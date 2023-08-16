import { GetStaticPaths } from 'next';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { BiCheck } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai'
import { SlBasketLoaded } from 'react-icons/sl'
import CustomiztionProduct from '@/components/customiztionProduct/CustomiztionProduct';
import { SettingsContext } from '@/context/global-context';
import Artwork from '@/components/artwork/Artwork';
import SizeGuide from '@/components/UI/modelBox/SizeGuide';
import { LuShirt } from 'react-icons/lu'
import { TiTick } from 'react-icons/ti'
import { TbTruckDelivery } from 'react-icons/tb'
import Link from 'next/link';
import TextCreator from '@/components/textcreator/TextCreator';
import { GET_PRODUCT } from '@/config/query'
import { client } from '@/config/client'
import { useDispatch } from 'react-redux';
import { addItem } from '@/features/AddToCart';
import { calculatePrice, uid } from '@/utils';
import { BsCartDash } from 'react-icons/bs';
import Faqs from '@/components/faqs/faqs';
import { toast } from 'react-toastify';
import SizeAndInstruction from '@/components/sizeAndInstruction/SizeAndInstruction';
import UploadImage from '@/components/uploadImage/UploadImage';
import SelectedCustmizedLayout from '@/components/selectedCustmizedLayout/selectedCustmizedLayout';
import Slider from 'react-slick';
import { faqs } from '../../../public/data';


interface IColor {
  code: string,
  name: string
}


const ProductSlug = ({ post, product }: any) => {
  // console.log("🚀 ~ file: [slug].tsx:32 ~ ProductSlug ~ product:", product)

  const { selectedCustomizedLayout, setSelectedCustomizedLayout, selectArt, colorsInLogo, setIsOpen,
    setSelectArt, setColorsInLogo, selectedProduct, setSelectedProduct, customizationButton, setCustomizationButton } = useContext(SettingsContext)
  // console.log("🚀 ~ file: [slug].tsx:39 ~ ProductSlug ~ selectedProduct:", selectedProduct)

  var { whitesmall, whitelarge, colorsmall, colorlarge } = product.poductInfo

  useEffect(() => {
    setSelectedProduct({
      ...selectedProduct,
      productId: product.id,
      title: product.title
    })
  }, [])

  const [imagePath, setImagePath] = useState(product?.featuredImage?.node?.mediaItemUrl)

  const HandleColor = (clr: any) => {
    const colorExists = selectedProduct.colors.some((color: any) => color.name === clr.name);
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
    if(colorName === 'WHITE'){
      if(size === '3XL' || size === '4XL' || size === '5XL'){
        sizes.price = e.target.value * whitelarge
      }else{
        sizes.price = e.target.value * whitesmall
      }
    }else{
      if(size === '3XL' || size === '4XL' || size === '5XL'){
        sizes.price = e.target.value * colorlarge
      }else{
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
      return {
        ...prevProduct,
        colors: updatedColors
      };
    });
  }

  const handleColorRemoval = (colorName: any) => {
    setSelectedProduct((prevProduct: any) => {
      const updatedColors = prevProduct.colors.filter((color: any) => color.name !== colorName);
      return {
        ...prevProduct,
        colors: updatedColors
      };
    });
  }

  // const handle product description tab and detail tab 
  const [DetailTab, setDetailTab] = useState('DESCRIPTION')
  const handleDetailsTabs = (e: string) => {
    setDetailTab(e)
  }

  const handleCustomization = () => {
    setSelectArt('')
    setCustomizationButton(!customizationButton)
    setColorsInLogo()
    setSelectedCustomizedLayout()
  }

  const isPrintable = product?.productCategories.nodes.some((i: any) => i.slug === "t-shirts")

  const dispatch = useDispatch()
  const handleAddToCart = (data: any) => {
    dispatch(addItem(data))
  }

  let totalQuantity = 0;
  selectedProduct?.colors?.forEach((color: any) => {
    color.selectedSize?.forEach((size: any) => {
      totalQuantity += parseInt(size.quantity);
    });
  });

  let totalPrice = 0;
  selectedProduct?.colors?.forEach((color: any) => {
    color.selectedSize?.forEach((size: any) => {
      totalPrice += parseFloat(size.price);
    });
  });

  // here array concatct 
  const dd = selectedProduct?.designArtWork?.concat(selectedProduct?.textCreator);
  // here remove undefined item from dd list becase we concat two array if one array are empty then its
  // responce as a undfined in array!
  var customizedMergeData = dd?.filter((x: any) => x !== undefined);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const slider = useRef<any>(null);

  


  return (
    <>
      {/* top bar with some content  */}
      <section className='shadow-lg p-3 hidden md:block'>
        <div className='container mx-auto px-4 flex flex-wrap justify-center items-center gap-5'>
          <Link href="#" className='flex border-r-[2px] border-accent px-6 item-center hover:text-secondary gap-2 text-base uppercase text-accent'>
            <LuShirt className="text-2xl text-secondary" />
            <p>No Minimum Order</p>
          </Link>
          <Link href="#" className='flex border-r-[2px] border-accent px-6 item-center hover:text-secondary gap-2 text-base uppercase text-accent'>
            <TiTick className="text-2xl text-secondary" />
            <p>PRICE MATCH PROMISEr</p>
          </Link>
          <Link href="#" className='flex border-r-[2px] border-accent px-6 item-center hover:text-secondary gap-2 text-base uppercase text-accent'>
            <TbTruckDelivery className="text-2xl text-secondary" />
            <p>FREE DELIVERY OVER £100</p>
          </Link>
          <Link href="#" className='flex px-6 item-center hover:text-secondary gap-2 text-base uppercase text-accent'>
            <Image src="/images/rating.png" alt="rating" width={300} height={300} className="w-56" />
          </Link>
        </div>
      </section>

      <main className='md:flex container mx-auto px-4 gap-10 mt-7 font-opensans mb-20'>
        <section className='md:w-[40%] image-slider'>
          <Slider {...settings} ref={slider} className='border border-gray-200 rounded-lg p-1'>
            {
              product?.galleryImages?.nodes.length > 0 ? product?.galleryImages?.nodes.map((item: any, idx: number) => {
                return (
                  <div key={idx}>
                    <Image src={item?.mediaItemUrl} alt={product.name} width={600} height={600} className="w-full rounded-lg" />
                    <h5 className='text-center font-semibold text-lg capitalize mb-3'>{item?.altText}</h5>
                  </div>
                )
              }) : <Image src={imagePath} alt={product.name} width={600} height={600} className="w-full border border-gray-200 rounded-lg" />
            }
          </Slider>

          <section className='bg-background p-8 mt-10 rounded-lg'>
            <div className='font-bold text-xl uppercase flex font-roboto gap-5 text-secondary'>
              <button className={DetailTab === 'DESCRIPTION' ? 'opacity-100' : 'opacity-50'} onClick={() => handleDetailsTabs('DESCRIPTION')}>DESCRIPTION</button>
              <button className={DetailTab === 'DETAILS' ? 'opacity-100' : 'opacity-50'} onClick={() => handleDetailsTabs('DETAILS')}>DETAILS</button>
              <button className={DetailTab === 'FAQS' ? 'opacity-100' : 'opacity-50'} onClick={() => handleDetailsTabs('FAQS')}>FAQ'S</button>
            </div>

            <div>
              {
                DetailTab === 'DESCRIPTION' && <div>
                  {/* description tab  */}
                  <h6 className='capitalize text-lg font-bold text-gray-600 mt-3 font-roboto'>features:</h6>
                  <div className='mt-2 pl-4 text-accent _features' dangerouslySetInnerHTML={{ __html: product?.content }} />

                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Fabric:</h6>
                  <p className='text-accent'>{product?.poductInfo?.fabric}</p>
                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Weight:</h6>
                  <p className='text-accent'>{product?.poductInfo?.weight}</p>
                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Size Description:</h6>
                  <ul className='mt-2 flex flex-wrap gap-x-2'>
                    {
                      product?.allPaSizes?.nodes?.map((item: any, idx: number) => (
                        <li key={idx} className='text-accent mb-1'><span className='font-bold'>{item.name}</span> {item?.description}",</li>
                      ))
                    }
                  </ul>
                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Washing Instructions:</h6>
                  <p className='text-accent'>{product?.poductInfo?.washingInstructions}</p>
                </div>
              }
              {DetailTab === 'DETAILS' &&
                <div>
                  {/* detail tab  */}
                  <div className='flex justify-between items-center border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Gender:</h6>
                    <p className='text-accent'>{product?.poductInfo?.gender}</p>
                  </div>
                  <div className='flex justify-between items-center border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Minimum Order:</h6>
                    <p className='text-accent'>{product?.poductInfo?.minimumOrder}</p>
                  </div>
                  <div className='border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Imprint Area:</h6>
                    <p className='text-accent mb-1 flex justify-between items-center'><span className='font-bold text-gray-600 '>{`LeftBreast:`}</span> {product?.poductInfo?.imprintArea?.leftbreast}</p>
                    <p className='text-accent mb-1 flex justify-between items-center'><span className='font-bold text-gray-600 '>{`Front:`}</span> {product?.poductInfo?.imprintArea?.front}</p>
                    <p className='text-accent mb-1 flex justify-between items-center'><span className='font-bold text-gray-600 '>{`Back:`}</span> {product?.poductInfo?.imprintArea?.back}</p>
                  </div>
                  <div className=' border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Imprint Method:</h6>
                    <p className='text-accent'>{product?.poductInfo?.imprintMethod}</p>
                  </div>
                  <div className=' border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Ready To Ship:</h6>
                    <p className='text-accent'>{product?.poductInfo?.readyToShip}</p>
                  </div>
                  <div className=' border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Packaging:</h6>
                    <p className='text-accent'>{product?.poductInfo?.packaging}</p>
                  </div>
                </div>
              }
              {
                DetailTab === 'FAQS' && <Faqs data={faqs} />
              }
            </div>
          </section>
        </section>

        <section className='md:w-[60%] text-accent'>
          <h2 className=' text-2xl md:text-4xl font-bold mt-6 md:mt-0'>{product?.title}</h2>
          <p className='mt-4 font-normal text-accent'>Product Code: <span className=''>{product?.sku}</span></p>
          <div className="pt-[1px] w-full bg-gray-300 my-8" />
          <div className='text-lg text-accent font-roboto' dangerouslySetInnerHTML={{ __html: product?.excerpt }} />
          {
            isPrintable &&
            <section className='my-7 bg-background p-8 rounded-lg flex justify-between items-center'>
              <p className='text-lg text-accent font-roboto'>Customisations Available:</p>
              <div className='flex gap-8 '>
                <span className='flex items-center text-lg text-accent font-roboto'><BiCheck size={28} className='text-green-500' /> Print</span>
              </div>
            </section>
          }

          <div className="pt-[1px] w-full bg-gray-300 my-8" />
          <section className='bg-background p-3 md:p-8 rounded-lg '>
            <div>
              <h5 className='text-xl font-semibold text-accent font-roboto'>Step 1 - Choose Color:</h5>
              <ul className='flex flex-wrap gap-[2px] md:gap-2 mt-4'>
                {
                  product?.allPaColor.nodes?.map((clr: any, idx: number) => {
                    const colorExists = selectedProduct?.colors?.some((item: any) => item.code === clr.description);
                    return (
                      <li key={idx} onClick={() => HandleColor(clr)} className={`${colorExists ? 'border-green-400' : 'border-transparent'} p-1 border-[3px] rounded-full`}  >
                        <div className='p-[18px] cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200 ease-in-out rounded-full' style={{ backgroundColor: `#${clr?.description}` }} />
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
                            <div className="p-5 rounded-full" style={{ backgroundColor: `#${c?.code}` }} />
                            <p className='text-lg uppercase'>{c?.name}</p>
                          </div>
                          {/* map all size that are accociated to this product  */}
                          <ul className='flex flex-wrap items-center gap-4 mt-3 '>
                            {
                              product?.allPaSizes?.nodes?.map((item: any, idx: number) => {

                                const matchingColor = selectedProduct.colors.find((color: any) => color.name === c?.name);
                                const quantity = matchingColor?.selectedSize.find((sizeObj: any) => sizeObj.name === item.name)?.quantity;

                                return (
                                  <div key={idx} className='flex flex-col items-center justify-center'>
                                    <p className='text-lg text-accent font-bold'>{item.name}</p>
                                    <div className='mt-1'>
                                      <input type="number" name={item.name} className='w-16 bg-white border border-gray-300 p-2 py-1 placeholder:text-lg placeholder:text-gray-400 placeholder:font-semibold font-semibold focus:outline-none text-lg focus:ring-0 focus:border-gray-500 text-center rounded-3xl'
                                        placeholder='0'
                                        value={quantity}
                                        onChange={(e) => handleSize(e, c?.name, item.name)}
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

          {
            isPrintable &&
            <>
              <div className='flex justify-end items-end w-full'><button onClick={() => setIsOpen(true)} className='mt-5 font-bold font-roboto text-secondary uppercase hover:underline '>Size Guide</button></div>
              {
                customizedMergeData?.map((item: any, idx: number) => (<SelectedCustmizedLayout item={item} id={idx + 1} key={idx} />))
              }

              {customizationButton && <CustomiztionProduct />}
              {selectedCustomizedLayout?.length > 1 && <Artwork />}
              {selectArt === 'Upload image' && <SelectNumberOfLogoColor />}
              {
                colorsInLogo > 0 && <>
                  <section className='mt-4 bg-background p-8 rounded-lg'>
                    <UploadImage />
                    <SizeAndInstruction />
                  </section>
                </>
              }
              {selectArt === 'Text creator' && <TextCreator />}
              <SizeGuide />
              <button onClick={() => selectedProduct?.designArtWork ? selectedProduct?.designArtWork.length < 4 ? handleCustomization() : toast.error("Customization Limit Completed!") : handleCustomization()} className='flex uppercase font-light items-center text-xl mt-6 border border-secondary gap-2 py-3 hover:bg-secondary hover:text-white px-6 text-secondary rounded-full'>
                {customizationButton ? <AiOutlineLine /> : <AiOutlinePlus />} {customizationButton ? 'Cancle customization' : 'Add customization'}
              </button>
            </>
          }

          <div className='text-3xl mt-10 flex items-center gap-2'>
            Total: <span className='font-semibold text-secondary text-5xl'>£{calculatePrice(selectedProduct, totalPrice)}</span>
          </div>

          <button onClick={() => { totalQuantity < product?.poductInfo?.minimumOrder ? toast.info(`Minimum order are ${product?.poductInfo?.minimumOrder}`) : handleAddToCart(product) }} className='flex uppercase font-light items-center text-2xl mt-8 border border-secondary gap-2 py-3 bg-secondary text-white px-8 hover:text-secondary hover:bg-transparent rounded-full'>
            <SlBasketLoaded /> Add to cart
          </button>
          <Image src="/images/clothing-are-rated-excellent-on-trustpilot1.png" alt="start rating" width={500} height={500} className='w-80 mt-10' />
        </section>
      </main>

      {/* floating price */}
      <section className='fixed bg-white hidden md:flex rounded-2xl min-w-[300px] flex-col justify-end items-end _shadow bottom-0 right-10 px-8 py-5'>
        <h5 className='text-3xl text-accent font-light'>Total: <span className='font-semibold text-secondary text-5xl'>£{calculatePrice(selectedProduct, totalPrice )}</span></h5>
        <p className='text-gray-500 font-light'>VAT excl.</p>
      </section>
      <section className='md:hidden fixed bg-white bottom-0 w-full flex _shadow z-10 cursor-pointer'>
        <div className='flex-1 p-2 px-5'>
          <h5 className='font-semibold'>Total</h5>
          <h4 className='font-semibold text-secondary text-xl'>£{calculatePrice(selectedProduct, totalPrice)} <span className='text-gray-500 text-base font-light'>VAT excl.</span></h4>
        </div>
        <div onClick={() => { totalQuantity < product?.poductInfo?.minimumOrder ? toast.info(`Minimum order are ${product?.poductInfo?.minimumOrder}`) : handleAddToCart(product) }} className='flex-1 bg-secondary uppercase text-white gap-2 p-2 flex items-center justify-center'>
          <BsCartDash /> Add to cart
        </div>
      </section>

    </>
  )
}

export default ProductSlug


const SelectNumberOfLogoColor = () => {
  const { colorsInLogo, setColorsInLogo, selectedProduct, setSelectedProduct } = useContext(SettingsContext)

  const handleNumberOfColorInLogo = (no: any) => {
    setColorsInLogo(no)
    setSelectedProduct({ ...selectedProduct, numberOfColorInLogo: no })
  }
  return (
    <section className='mt-4 bg-background p-8 gap-6 rounded-lg'>
      <h5 className='text-xl font-semibold text-accent capitalize font-roboto'>Step 4 - Select number of color contain logo:</h5>
      <ul className='flex flex-wrap items-center mt-5'>
        {
          [1, 2, 3, 4, 5].map((no, idx) => (
            <li key={idx} onClick={() => handleNumberOfColorInLogo(no)} className={`p-1 cursor-pointer hover:scale-105 rounded-full border-[2px] ${colorsInLogo === no ? 'border-secondary' : 'border-transparent'}`}> <div className={`w-[52px] h-[52px] text-white font-bold text-xl flex flex-col justify-center items-center rounded-full  ${colorsInLogo === no ? 'bg-accent' : 'bg-black/40'}`}>{no}</div></li>
          ))
        }
      </ul>
    </section>
  )
}








export async function getStaticProps({ params }: any) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
