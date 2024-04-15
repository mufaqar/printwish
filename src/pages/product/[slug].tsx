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
import DeliveryTime from '@/components/deliveryTime/DeliveryTime'
import TextCreator from '@/components/textcreator/TextCreator';
import { GET_PRODUCT } from '@/config/query'
import { client } from '@/config/client'
import { useDispatch } from 'react-redux';
import { addItem } from '@/features/AddToCart';
import { calculatePrice, calculatePrintingPrice, formatDate, getNextBusinessDay, uid } from '@/utils';
import { BsCartDash } from 'react-icons/bs';
import Faqs from '@/components/faqs/faqs';
import { toast } from 'react-toastify';
import SizeAndInstruction from '@/components/sizeAndInstruction/SizeAndInstruction';
import UploadImage from '@/components/uploadImage/UploadImage';
import SelectedCustmizedLayout from '@/components/selectedCustmizedLayout/selectedCustmizedLayout';
import Slider from 'react-slick';
import { faqs } from '../../../public/data';
import { useRouter } from 'next/router';
import parse from "html-react-parser";
import Head from 'next/head';
import Reviews from '@/components/reviews/reviews';
import TopBar from '@/components/banner/top-bar';
import RatingInfo from '@/components/UI/RatingInfo'
import useGetTotalQuantity from '@/hooks/useGetTotalQuantity'
import HowToBuy from '@/components/HowToBuy/HowToBuy';
import SelectLogoColor from '@/components/SelectLogoColor/SelectLogoColor';
import SeoMeta from '@/components/seo/Seo';
import GetAQoute from '@/components/get-a-qoute/getAQoute';
import SelectColor from '@/components/get-a-qoute/selectColor';
import SelectedColor from '@/components/get-a-qoute/selectedColor';
import useColorsInLogo from '@/hooks/useColorsInLogo';
interface IColor {
  code: string,
  name: string
}

const ProductSlug = ({ post, product }: any) => {
  //const fullHead = parse(product.seo.fullHead);
  const { selectedCustomizedLayout, setSelectedCustomizedLayout, selectArt, designPosition, uploadedImages, selectedVariants, colorsInLogo,
    setSelectArt, setColorsInLogo, selectedProduct, setSelectedProduct, customizationButton, setCustomizationButton, setDesignPosition } = useContext(SettingsContext)
  var { whitesmall, whitelarge, colorsmall, colorlarge } = product.poductInfo

  const [orderForm, setOrderForm] = useState(false)

  useEffect(() => {
    setSelectedProduct({
      ...selectedProduct,
      productId: product.id,
      title: product.title
    })
  }, [calculatePrice])


  const [imagePath, setImagePath] = useState(product?.featuredImage?.node?.mediaItemUrl)

  const [reset, setRest] = useState(false)

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

  const handleColorRemoval = (colorName: any) => {
    setSelectedProduct((prevProduct: any) => {
      const updatedColors = prevProduct.colors.filter((color: any) => color.name !== colorName);
      return {
        ...prevProduct,
        colors: updatedColors
      };
    });
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

  // const handle product description tab and detail tab 
  const [DetailTab, setDetailTab] = useState('')
  const handleDetailsTabs = (e: string) => {
    setDetailTab(e)
  }

  const handleCustomization = () => {
    setSelectArt('')
    setCustomizationButton(!customizationButton)
    setColorsInLogo()
    setSelectedCustomizedLayout()
    setDesignPosition('')
  }

  useEffect(() => {
    if (innerWidth > 768) {
      setDetailTab('DESCRIPTION')
    }
  }, [innerWidth])

  const isPrintable = product?.productCategories.nodes.some((i: any) => i.slug === "custom-t-shirt-printing-cheap-t-shirt-printing")
  const dispatch = useDispatch()

  const totalQuantity = useGetTotalQuantity(selectedProduct)

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const slider = useRef<any>(null);
  const router = useRouter()

  const handleAddToCart = (data: any) => {
    sessionStorage.removeItem('coupon')
    data = { ...data, price: calculatePrice(customizedMergeData, totalPrice, totalQuantity, +colorsInLogo), productPrice: totalPrice, extra: selectedProduct }
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

  const mergeColorInLogo = (uploadedImages: any, colorsInLogo: any) => {
    const res = uploadedImages.map((image: any) => {
      const matchingColor = colorsInLogo.find((color: any) => color.variantName === image.item);
      return {
        ...image,
        colorInLogo: matchingColor ? matchingColor.colorInLogo : null
      };
    });
    return res.filter((image: any) => image.colorInLogo !== null);
  }

  const handleAddaQoute = (colorsInLogo: any, aditionalInformation: any) => {
    const ImagesWithLogoColor = mergeColorInLogo(uploadedImages, colorsInLogo);
    const orderData = {
      colosWithSize: selectedProduct?.colors,
      ImagesWithLogoColor,
      aditionalInformation,
      productId: product.id,
      title: product.title,
      sku: product?.sku,
      productImage: product?.featuredImage
    }
    sessionStorage.setItem('orderData', JSON.stringify(orderData))
    setOrderForm(false)
    router.push('/checkout')
  }

  return (
    <>
      <SeoMeta title={product?.seo?.title} description={product?.seo?.metaDesc} url={`product/${product?.slug}`} />
      <TopBar />

      <div className='block md:hidden px-3 container mx-auto'>
        <div className='mt-3 flex justify-center'>
          <Image src="/images/review-badge.svg" alt="rating" width={200} height={45} />
        </div>
        <h2 className='text-xl md:text-3xl lg:text-4xl font-medium mt-6 md:mt-0'>{product?.title}</h2>
        <p className='mt-4 font-normal text-accent'>Product Code: <span className=''>{product?.sku}</span></p>
      </div>
      <main className='md:flex container mx-auto px-4 gap-10 mt-7 font-opensans mb-20'>
        <section className='md:w-[40%] image-slider'>
          <Slider {...settings} ref={slider} className='border border-gray-200 rounded-lg p-1'>
            {
              product?.galleryImages?.nodes.length > 0 ? product?.galleryImages?.nodes.map((item: any, idx: number) => {
                return (
                  <div key={idx}>
                    <img src={item?.mediaItemUrl} alt={product.name} width={600} height={600} className="w-full rounded-lg" />
                    <h5 className='text-center font-semibold text-lg capitalize mb-3'>{item?.altText}</h5>
                  </div>
                )
              }) : <img src={imagePath} alt={product.name} width={600} height={600} className="w-full rounded-lg" />
            }
          </Slider>
          <div className='mt-5 text-lg text-gray-600 bg-background p-8 rounded-lg'>
            <h6>Printed From <strong className='text-gray-500'>£{(whitesmall || product?.price?.replace('£', '')).toFixed(2)}</strong> per unit</h6>
            <h6>Lead Time : <span className='text-gray-500'>3-5 working days</span></h6>
            <h6>Minimum Order Value is  <span className='text-gray-500'>25 units.</span></h6>
          </div>
          {
            product?.poductInfo?.rating?.ratingNumber && <div className='md:hidden'><RatingInfo data={product?.poductInfo?.productRating} /></div>
          }
          <section className='bg-background p-6 md:p-8 mt-5 rounded-lg'>
            <div className='font-semibold text-lg uppercase flex font-roboto gap-5 text-secondary'>
              <button className={DetailTab === 'DESCRIPTION' ? 'opacity-100 border-b-[3px] border-secondary' : 'border-b-[3px] opacity-50 border-transparent'} onClick={() => handleDetailsTabs('DESCRIPTION')}>DESCRIPTION</button>
              <button className={DetailTab === 'DETAILS' ? 'opacity-100 border-b-[3px] border-secondary' : 'border-b-[3px] opacity-50 border-transparent'} onClick={() => handleDetailsTabs('DETAILS')}>DETAILS</button>
              <button className={DetailTab === 'FAQS' ? 'opacity-100 border-b-[3px] border-secondary' : 'border-b-[3px] opacity-50 border-transparent'} onClick={() => handleDetailsTabs('FAQS')}>FAQ'S</button>
            </div>

            <div>
              {
                DetailTab === 'DESCRIPTION' && <div>
                  {/* description tab  */}
                  <h6 className='capitalize text-lg font-bold text-gray-600 mt-3 font-roboto'>features:</h6>
                  <div className='mt-2 pl-4 text-accent _features' dangerouslySetInnerHTML={{ __html: product?.content }} />

                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-semibold mt-3 font-roboto'>Fabric:</h6>
                  <p className='text-accent'>{product?.poductInfo?.fabric}</p>
                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-semibold mt-3 font-roboto'>Weight:</h6>
                  <p className='text-accent'>{product?.poductInfo?.weight}</p>
                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-semibold mt-3 font-roboto'>Size Description:</h6>
                  <ul className='mt-2 flex flex-wrap gap-x-2'>
                    {
                      product?.allPaSizes?.nodes?.map((item: any, idx: number) => (
                        <li key={idx} className='text-accent mb-1'><span className='font-bold'>{item.name}</span> {item?.description}",</li>
                      ))
                    }
                  </ul>
                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-semibold mt-3 font-roboto'>Washing Instructions:</h6>
                  <p className='text-accent'>{product?.poductInfo?.washingInstructions}</p>
                </div>
              }
              {DetailTab === 'DETAILS' &&
                <div>
                  {/* detail tab  */}
                  <div className='flex justify-between items-center border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-semibold mt-3 font-roboto'>Gender:</h6>
                    <p className='text-accent'>{product?.poductInfo?.gender}</p>
                  </div>
                  <div className='flex justify-between items-center border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-semibold mt-3 font-roboto'>Minimum Order Value is</h6>
                    <p className='text-accent'>{product?.poductInfo?.minimumOrder} Units</p>
                  </div>
                  <div className='border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-semibold mt-3 font-roboto'>Imprint Area:</h6>
                    <p className='text-accent mb-1 flex justify-between items-center'><span className='font-bold text-gray-600 '>{`LeftBreast:`}</span> {product?.poductInfo?.imprintArea?.leftbreast}</p>
                    <p className='text-accent mb-1 flex justify-between items-center'><span className='font-bold text-gray-600 '>{`Front:`}</span> {product?.poductInfo?.imprintArea?.front}</p>
                    <p className='text-accent mb-1 flex justify-between items-center'><span className='font-bold text-gray-600 '>{`Back:`}</span> {product?.poductInfo?.imprintArea?.back}</p>
                  </div>
                  <div className=' border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-semibold mt-3 font-roboto'>Imprint Method:</h6>
                    <p className='text-accent'>{product?.poductInfo?.imprintMethod}</p>
                  </div>
                  <div className=' border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-semibold mt-3 font-roboto'>Ready To Ship:</h6>
                    <p className='text-accent'>{product?.poductInfo?.readyToShip}</p>
                  </div>
                  <div className=' border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-semibold mt-3 font-roboto'>Packaging:</h6>
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
          <div className='hidden md:block'>
            <h2 className=' text-2xl md:text-4xl font-medium mt-6 md:mt-0'>{product?.title}</h2>
            <p className='mt-4 font-normal text-accent'>Product Code: <span className=''>{product?.sku}</span></p>
          </div>
          <div className="pt-[1px] w-full bg-gray-300 my-8" />
          <div className='text-sm md:text-base text-accent' dangerouslySetInnerHTML={{ __html: product?.excerpt }} />
          {
            isPrintable &&
            <section className='my-7 bg-background p-8 rounded-lg flex justify-between items-center'>
              <p className='text-lg text-accent font-roboto'>Customisations Available:</p>
              <div className='flex gap-8 '>
                <span className='flex items-center text-lg text-accent font-roboto'><BiCheck size={28} className='text-green-500' /> Print</span>
              </div>
            </section>
          }
          {/* <HowToBuy /> */}



          {
            product?.allPaColor.nodes.length > 0 &&
            <section className=''>
              <div className="bg-background p-3 md:p-8 rounded-lg ">
                <h5 className='text-xl font-semibold text-accent font-roboto'> Available Colors:</h5>
                <ul className='flex flex-wrap gap-[2px] md:gap-2 mt-4'>
                  {
                    product?.allPaColor.nodes?.map((clr: any, idx: number) => {
                      const colorExists = selectedProduct?.colors?.some((item: any) => item.code === clr.description);
                      return (
                        <li key={idx} className={`${colorExists ? 'border-green-400' : 'border-transparent'} p-1 hover-text border-[3px] rounded-full`}  >
                          <div className='p-[18px] cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200 ease-in-out rounded-full' style={{ backgroundColor: `#${clr?.description}` }} />
                          <span className="tooltip-text whitespace-nowrap text-center" id="top">{clr?.name}</span>
                        </li>
                      )
                    })
                  }
                </ul>

                {/* selected color and show all sizes with each selcted color */}
              </div>



            </section>
          }
          <div className="mt-6 border p-6 rounded-lg">
            <h4 className='font-semibold text-lg'>Are you looking for a discount on your order?</h4>
            <ul className="my-2 list-square pl-4">
              <li>Get 10% discount when you order 250+</li>
              <li>Get 15% discount when you order 750+</li>
              <li>Get 20% discount when you order 1000+</li>
            </ul>
            <p>Request us a Quote today and get an amazing discount with every bulk order.</p>
          </div>
          <button onClick={() => {
            setOrderForm(true);
            window.scrollTo({
              top: 0,
              behavior: 'smooth' 
            })
          }} className='flex w-full md:w-1/3 justify-center uppercase font-light items-center mt-4 border border-primary gap-2 py-3 bg-primary text-white px-6 hover:text-white hover:bg-secondary rounded-md'>
            Get a quote
          </button>




          {/* <div className='text-2xl flex items-center mt-3 gap-2'>
            Total: <span className='font-semibold text-secondary text-2xl'> {totalQuantity > 0 ? `£${calculatePrice(customizedMergeData, totalPrice, totalQuantity, +colorsInLogo)}` : `£0 `} <span className='font-normal text-primary text-xl ml-1'>excluding VAT</span></span>
          </div> */}

          {/* {
            Number(calculatePrice(customizedMergeData, totalPrice, totalQuantity, +colorsInLogo)) > 0 && <button onClick={() => { totalQuantity < product?.poductInfo?.minimumOrder ? toast.info(`Minimum Order Value is ${product?.poductInfo?.minimumOrder} Units`) : customizedMergeData.length > 0 ? handleAddToCart(product) : toast.warn('ADD YOUR LOGO PLEASE') }} className='flex uppercase font-light items-center mt-5 border border-primary gap-2 py-3 bg-primary text-white px-6 hover:text-primary hover:bg-transparent rounded-full'>
              <SlBasketLoaded /> Add to cart
            </button>
          } */}

          <DeliveryTime title="Standard" desc="" />
        </section>

      </main>
      <Reviews />

      {/* floating price */}
      {/* <section className='fixed bg-white hidden md:flex rounded-2xl min-w-[200px] flex-col justify-end items-end _shadow bottom-0 right-10 px-8 py-5'>
        <h5 className='text-2xl text-accent font-light'>Total: <span className='font-semibold text-secondary text-4xl'>{totalQuantity > 0 ? `£${calculatePrice(customizedMergeData, totalPrice, totalQuantity, +colorsInLogo)}` : `£0`}</span></h5>
        <p className='text-gray-500 font-light'>VAT excl.</p>
      </section> */}
      {/* <section className='md:hidden fixed bg-white bottom-0 w-full flex _shadow z-10 cursor-pointer'>
        <div className='flex-1 p-2 px-5'>
          <h5 className='font-semibold'>Total</h5>
          <h4 className='font-semibold text-secondary text-xl'>{totalQuantity > 0 ? `£${calculatePrice(customizedMergeData, totalPrice, totalQuantity, +colorsInLogo)}` : `£0`} <span className='text-gray-500 text-base font-light'>VAT excl.</span></h4>
        </div>

        <div onClick={() => { totalQuantity < product?.poductInfo?.minimumOrder ? toast.info(`Minimum order quantity are ${product?.poductInfo?.minimumOrder}`) : handleAddToCart(product) }} className='flex-1 bg-primary uppercase text-white gap-2 p-2 flex items-center justify-center'>
          <BsCartDash /> Add to cart
        </div>

      </section> */}
      {
        orderForm && <GetAQoute
          colors={product?.allPaColor.nodes}
          selectedProduct={selectedProduct}
          handleColor={HandleColor}
          selctedColors={selectedProduct?.colors}
          sizes={product?.allPaSizes?.nodes}
          handleSize={handleSize}
          removeSize={handleColorRemoval}
          number={customizedMergeData?.length + 2}
          setOrderForm={setOrderForm}
          handleAddaQoute={handleAddaQoute}
        />
      }

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
