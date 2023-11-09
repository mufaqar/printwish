import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx'
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai'
import { SlBasketLoaded } from 'react-icons/sl'
import CustomiztionProduct from '@/components/customiztionProduct/CustomiztionProduct';
import { SettingsContext } from '@/context/global-context';
import Artwork from '@/components/artwork/Artwork';
import TextCreator from '@/components/textcreator/TextCreator';
import { GET_PRODUCT } from '@/config/query'
import { client } from '@/config/client'
import { useDispatch } from 'react-redux';
import { addItem } from '@/features/AddToCart';
import { calculatePrice } from '@/utils';
import { toast } from 'react-toastify';
import SizeAndInstruction from '@/components/sizeAndInstruction/SizeAndInstruction';
import UploadImage from '@/components/uploadImage/UploadImage';
import SelectedCustmizedLayout from '@/components/selectedCustmizedLayout/selectedCustmizedLayout';
import { useRouter } from 'next/router';
import parse from "html-react-parser";
import Head from 'next/head';
import DealsBanner from '@/components/banner/deals-banner';
import TopBar from '@/components/banner/top-bar';


interface IColor {
  code: string,
  name: string
}


const ProductSlug = ({ post, product }: any) => {

  const fullHead = parse(product.seo.fullHead);

  const { selectedCustomizedLayout, setSelectedCustomizedLayout, selectArt, setIsOpen,
    setSelectArt, setColorsInLogo, selectedProduct, setSelectedProduct, customizationButton, setCustomizationButton,
    totalQuantity, setTotalQuantity } = useContext(SettingsContext)

  var { whitesmall, whitelarge, colorsmall, colorlarge } = product.poductInfo

  const [totalItems, setTotalItems] = useState<any>(product?.poductInfo?.minimumOrder);
  const [selectedItem, setSelectedItem] = useState<boolean>(false)

  useEffect(() => {
    setSelectedProduct({
      ...selectedProduct,
      productId: product.id,
      title: product.title
    })
  }, [calculatePrice])

  const [imagePath, setImagePath] = useState(product?.featuredImage?.node?.mediaItemUrl)

  const HandleColor = (clr: any) => {
    const colorExists = selectedProduct?.colors?.some((color: any) => color.name === clr.name);
    if (!colorExists) {
      const newColor = {
        name: clr.name,
        code: clr.description,
        selectedSize: []
      };
      setSelectedProduct((prevState: any) => ({
        ...prevState,
        colors: [...prevState.colors, newColor]
      }));
    }
  }

  
  const handleSize = (e: any, colorName: any, size: any) => {

    const v = Number(e.target.value)

    if (v > product?.poductInfo?.minimumOrder) {
      toast.info(`You can select a maximum of ${product?.poductInfo?.minimumOrder} items`);
      e.target.value = 0;
    }

    const colorIndex = selectedProduct.colors.findIndex((color: any) => color.name === colorName);

    const sizes = {
      name: size,
      quantity: e.target.value,
      price: 0
    };
    /* The above code is calculating the price based on the color and size of a product. If the color
    is 'WHITE' and the size is '3XL', '4XL', or '5XL', the price is calculated by multiplying the
    value of the target element by the variable 'whitelarge'. If the size is not '3XL', '4XL', or
    '5XL', the price is calculated by multiplying the value of the target element by the variable
    'whitesmall'. If the color is not 'WHITE', the same logic is applied using the variables
    'colorlarge' */
    if (colorName === 'WHITE') {
      if (size === '3XL' || size === '4XL' || size === '5XL') {
        sizes.price = e.target.value * whitelarge
      } else {
        sizes.price = e.target.value * whitesmall
      }
    } else {
      if (size === '3XL' || size === '4XL' || size === '5XL') {
        sizes.price = e.target.value * colorlarge
      } else {
        sizes.price = e.target.value * colorsmall
      }
    }

    setSelectedProduct((prevProduct: any) => {
      const updatedColors = [...prevProduct.colors];
      const updatedColor = { ...updatedColors[colorIndex] };

      // Check if the size already exists in the selectedSize array
      const existingSizeIndex = updatedColor.selectedSize.findIndex((existingSize: any) => existingSize.name === size);

      if (existingSizeIndex !== -1) {
        // If the size exists, update the quantity
        updatedColor.selectedSize[existingSizeIndex].quantity = e.target.value;
        updatedColor.selectedSize[existingSizeIndex].price = sizes?.price;
      } else {
        // If the size doesn't exist, add the new sizes object
        updatedColor.selectedSize.push(sizes);
      }
      updatedColors[colorIndex] = updatedColor;

      // if reduce quantity or remove quantity then item from selectedSize array
      if (sizes.quantity < 1) {
        const remaningItem = updatedColor.selectedSize.filter((item: any) => item?.quantity !== '')
        updatedColor.selectedSize = remaningItem
      }

      return {
        ...prevProduct,
        colors: updatedColors
      };
    });
    
  }

  useEffect(()=>{
    if(totalQuantity > totalItems){
      toast.info(`You enter greater then maximum value`);
    }
    if(totalQuantity === Number(totalItems)){
      setSelectedItem(true)
    }
  },[totalQuantity])


  const handleColorRemoval = (colorName: any) => {
    setSelectedProduct((prevProduct: any) => {
      const updatedColors = prevProduct.colors.filter((color: any) => color.name !== colorName);
      return {
        ...prevProduct,
        colors: updatedColors
      };
    });
    setSelectedItem(false)
    setTotalQuantity(0)
  }

  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerWidth(window.innerWidth);
      const handleResize = () => {
        setInnerWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleCustomization = () => {
    setSelectArt('')
    setCustomizationButton(!customizationButton)
    setColorsInLogo()
    setSelectedCustomizedLayout()
  }



  const isPrintable = product?.productCategories.nodes.some((i: any) => i.slug === "custom-t-shirt-printing-cheap-t-shirt-printing")
  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedProduct) {
      let newTotalQuantity = 0;
      selectedProduct.colors?.forEach((color: any) => {
        color.selectedSize?.forEach((size: any) => {
          const quantity = parseInt(size.quantity);
          if (quantity >= 1) {
            newTotalQuantity += quantity;
          }
        });
      });
      setTotalQuantity(newTotalQuantity);
    }
  }, [selectedProduct]);


  let totalPrice = 0;
  selectedProduct?.colors?.forEach((color: any) => {
    color.selectedSize?.forEach((size: any) => {
      totalPrice += parseFloat(size.price);
    });
  });

  if (totalPrice === 0) {
    totalPrice = whitesmall ? whitesmall : Number(product?.price?.replace('£', ''))
  }

  // here array concatct 
  const dd = selectedProduct?.designArtWork?.concat(selectedProduct?.textCreator);
  // here remove undefined item from dd list becase we concat two array if one array are empty then its
  // responce as a undfined in array!
  var customizedMergeData = dd?.filter((x: any) => x !== undefined);

  const router = useRouter()
  const handleAddToCart = (data: any) => {
    data = { ...data, price: calculatePrice(customizedMergeData, totalPrice, totalQuantity), extra: selectedProduct }
    dispatch(addItem(data))
    setSelectedProduct({
      textCreator: [],
      designArtWork: [],
      colors: [],
      productId: product.id,
      title: product.title
    })
    router.push('/cart')
  }

  return (
    <>
      <Head>
        <title>{product.seo.title}</title>
        {fullHead}
      </Head>
      {/* top bar with some content  */}
      <TopBar />
      <DealsBanner title={product?.title} />


      <section className="bg-gray-100 md:p-12 md:-mt-28 container mx-auto p-3 md:rounded-xl md:mb-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="hidden lg:block">
            <h2 className=' text-2xl md:text-4xl font-medium mt-6 md:mt-0'>{product?.title}</h2>
            <p className='mt-4 font-normal text-accent'>Product Code: <span className=''>{product?.sku}</span></p>
          </div>
          <div className="flex justify-between gap-8 flex-col-reverse md:flex-row">
            <Image src={imagePath} alt={product.name} width={600} height={600} className="md:max-w-[300px] w-full rounded-lg" />
            <div className="flex items-center justify-between md:justify-start md:flex-col md:items-end">
              <button className='bg-black p-2 text-white text-sm px-4 whitespace-nowrap'>SAVE 32% ON RRP</button>
              <div className='font-semibold text-secondary text-5xl mt-5'>£{calculatePrice(customizedMergeData, totalPrice, totalQuantity)}</div>
            </div>
          </div>
        </div>

        <main className='md:flex bg-white rounded-xl container mx-auto p-10 relative z-10 -mt-12 gap-10 font-opensans'>
          <section className='w-full text-accent'>
            {
              product?.allPaColor.nodes.length > 0 &&
              <section>
                <div>
                  <h5 className='text-xl font-semibold text-accent font-roboto'>Step 1 - Choose Color:</h5>
                  <ul className='flex flex-wrap gap-[2px] md:gap-2 mt-4'>
                    {
                      product?.allPaColor.nodes?.map((clr: any, idx: number) => {
                        const colorExists = selectedProduct?.colors?.some((item: any) => item.code === clr.description);
                        return (
                          <li key={idx} onClick={() => HandleColor(clr)} className={`${colorExists ? 'border-green-400' : 'border-transparent'} p-1 hover-text border-[3px] rounded-full`}  >
                            <div className='p-[18px] cursor-pointer border hover:scale-105 active:scale-100 transition-all duration-200 ease-in-out rounded-full' style={{ backgroundColor: `#${clr?.description}` }} />
                            <span className="tooltip-text whitespace-nowrap text-center" id="top">{clr?.name}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                  {/* selected color and show all sizes with each selcted color */}

                  <div>
                    {
                      selectedProduct?.colors?.map((c: IColor, idx: number) => {
                        return (
                          <div key={idx} className='mt-6 flex justify-between '>
                            <div>
                              <div className='flex items-center gap-2'>
                                <div className="p-5 rounded-full border" style={{ backgroundColor: `#${c?.code}` }} />
                                <p className='text-lg uppercase'>{c?.name}</p>
                              </div>
                              {/* map all size that are accociated to this product  */}
                              <ul className='flex flex-wrap items-center gap-4 mt-3 '>
                                {
                                  product?.allPaSizes?.nodes?.map((item: any, idx: number) => {

                                    const matchingColor = selectedProduct.colors.find((color: any) => color.name === c?.name);
                                    var quantity = matchingColor?.selectedSize.find((sizeObj: any) => sizeObj.name === item.name)?.quantity;

                                    return (
                                      <div key={idx} className={`${selectedItem && 'opacity-50'} flex flex-col items-center justify-center`}>
                                        <p className='text-lg text-accent font-bold'>{item.name}</p>
                                        <div className='mt-1'>
                                          <input type="number" name={item.name} min="0" 
                                            className='w-16 bg-white border border-gray-300 p-2 py-1 placeholder:text-lg placeholder:text-gray-400 placeholder:font-semibold font-semibold focus:outline-none text-lg focus:ring-0 focus:border-gray-500 text-center rounded-3xl'
                                            placeholder='0'
                                            value={quantity}
                                            onChange={(e) => handleSize(e, c?.name, item.name)}
                                            disabled={selectedItem}
                                          />
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                            <i className='mt-4 font-semibold text-xl active:scale-105'><RxCross2 onClick={() => handleColorRemoval(c.name)} /></i>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </section>
            }


            {
              isPrintable &&
              <>

                {
                  customizedMergeData?.map((item: any, idx: number) => (<SelectedCustmizedLayout item={item} id={idx + 1} key={idx} />))
                }

                {customizationButton && <CustomiztionProduct />}
                {selectedCustomizedLayout?.length > 1 && <Artwork />}

                {
                  selectArt === 'Upload image' && <>
                    <section className='mt-4 bg-background p-8 rounded-lg'>
                      <UploadImage />
                      <SizeAndInstruction />
                    </section>
                  </>
                }

                {selectArt === 'Text creator' && <TextCreator />}
              
                {!customizationButton && <h5 className='text-xl font-semibold text-accent font-roboto mt-5'>Step 2 - Select Customization:</h5>}

                {
                  customizedMergeData?.length < 4 &&
                  <button onClick={() => selectedProduct?.designArtWork ? selectedProduct?.designArtWork.length < 4 ? handleCustomization() : toast.error("Customization Limit Completed!") : handleCustomization()} className='flex uppercase font-light items-center mt-6 border border-secondary gap-2 py-3 hover:bg-secondary hover:text-white px-5 text-secondary rounded-full'>
                    {customizationButton ? <AiOutlineLine /> : <AiOutlinePlus />} {customizationButton ? 'Cancle customization' : 'Add customization 11'}
                  </button>
                }
              </>
            }
            <button onClick={() => { totalQuantity != Number(product?.poductInfo?.minimumOrder) ? toast.info(`You select only ${product?.poductInfo?.minimumOrder} Units. But you you have selected ${totalQuantity} Units ${ totalQuantity > product?.poductInfo?.minimumOrder ? `Please remove ${totalQuantity-Number(product?.poductInfo?.minimumOrder)} unit.` : `Please add ${Number(product?.poductInfo?.minimumOrder)-totalQuantity} unit` }`) : handleAddToCart(product) }} className='flex uppercase font-light items-center mt-8 border border-primary gap-2 py-3 bg-primary text-white px-6 hover:text-primary hover:bg-transparent rounded-full'>
              <SlBasketLoaded /> Add to cart
            </button>
          </section>
        </main>

      </section>

    </>
  )
}

export default ProductSlug




export async function getServerSideProps({ params }: any) {
  const slug = params.slug

  const response = await client.query({
    query: GET_PRODUCT,
    variables: {
      id: slug,
    },
  });

  const product = response?.data?.product;
  return {
    props: {
      product,
    },
  };
}


// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths: any = [];
//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }