import { GetStaticPaths } from 'next';
import React, { useContext, useState } from 'react'
import { Posts } from '../../../public/data'
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


interface IColor {
  code: string,
  name: string
}


const ProductSlug = ({ post }: any) => {
  // console.log("🚀 ~ file: [slug].tsx:6 ~ ProductSlug ~ post:", post)
  const { selectedCustomizedLayout, selectArt, colorsInLogo, setIsOpen, setSelectArt } = useContext(SettingsContext)


  const [color, setColor] = useState<any>([])   // All selected color
  const [size, setSize] = useState();
  const [customizationButton, setCustomizationButton] = useState(false)
  const [productWithSizeAndQuantity, setProductWithSizeAndQuantity] = useState<any>([])

  const HandleColor = (selectedColor: any) => {
    const colorExists = color.some((item: any) => item.code === selectedColor.code);
    if (!colorExists) {
      setColor([...color, selectedColor])
    }
  }
  const RemoveColorFromSelectedList = (getRemoveColor: any) => {
    const RemaningItem = color?.filter((item: any) => item.code !== getRemoveColor.code)
    setColor(RemaningItem)
  }

  const handleSize = (e: any, colorName: any, ProductCode: any) => {

    const size = e.target.name
    const quantity = e.target.value

    if (quantity > 0) {
      // here is we get size quantity and color name
      const sizeRes = {
        size, quantity, colorName, ProductCode
      }
      // check if size color and product code exist in productWithSizeAndQuantity state 
      const SizeAndColorExists = productWithSizeAndQuantity.some((item: any) => item.size === size && item.colorName === colorName && item?.ProductCode === ProductCode);

      if (SizeAndColorExists) {
        // const findSize = productWithSizeAndQuantity.filter((item: any) => item.colorName !== colorName || item?.size !== size || item?.ProductCode !== ProductCode)
        const findSize = productWithSizeAndQuantity.filter(
          (item:any) => !(item.size === size && item.colorName === colorName && item.ProductCode === ProductCode)
        );
        setProductWithSizeAndQuantity([...findSize, sizeRes])
      } else {
        setProductWithSizeAndQuantity([...productWithSizeAndQuantity, sizeRes])
      }
    }

  }

  // const handle product description tab and detail tab 
  const [DetailTab, setDetailTab] = useState('DESCRIPTION')
  const handleDetailsTabs = (e: string) => {
    setDetailTab(e)
  }


  const handleCustomization = () => {
    setCustomizationButton(!customizationButton)
    setSelectArt('')
  }



  return (
    <>
      {/* top bar with some content  */}
      <section className='shadow-lg p-3'>
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
        <section className='md:w-[40%]'>
          <Image src={post.image} alt={post.title} width={600} height={600} className="w-full" />
          <section className='bg-background p-8 mt-10 rounded-lg'>

            <div className='font-bold text-xl uppercase flex font-roboto gap-5 text-secondary'>
              <button className={DetailTab === 'DESCRIPTION' ? 'opacity-100' : 'opacity-50'} onClick={() => handleDetailsTabs('DESCRIPTION')}>DESCRIPTION</button>
              <button className={DetailTab === 'DETAILS' ? 'opacity-100' : 'opacity-50'} onClick={() => handleDetailsTabs('DETAILS')}>DETAILS</button>
            </div>

            <div>
              {
                DetailTab === 'DESCRIPTION' ? <div>
                  {/* description tab  */}
                  <h6 className='capitalize text-lg font-bold text-gray-600 mt-3 font-roboto'>features:</h6>
                  <ul className='mt-2 pl-8'>
                    {
                      post?.features?.map((item: any, idx: number) => (
                        <li key={idx} className='text-accent list-disc mb-1'>{item}</li>
                      ))
                    }
                  </ul>
                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Fabric:</h6>
                  <p className='text-accent'>{post?.fabric}</p>
                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Weight:</h6>
                  <p className='text-accent'>{post?.Weight}</p>
                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Size Description:</h6>
                  <ul className='mt-2 flex flex-wrap gap-x-2'>
                    {
                      post?.sizeDescription?.map((item: any, idx: number) => (
                        <li key={idx} className='text-accent mb-1'><span className='font-bold'>{item.type}</span> {item?.size}",</li>
                      ))
                    }
                  </ul>
                  <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Washing Instructions:</h6>
                  <p className='text-accent'>{post?.WashingInstructions}</p>
                </div> : <div>
                  {/* detail tab  */}
                  <div className='flex justify-between items-center border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Gender:</h6>
                    <p className='text-accent'>{post?.Gender}</p>
                  </div>
                  <div className='flex justify-between items-center border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Minimum Order:</h6>
                    <p className='text-accent'>{post?.MinimumOrderQuantity}</p>
                  </div>
                  <div className='border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Imprint Area:</h6>
                    <p className='text-accent mb-1 flex justify-between items-center'><span className='font-bold text-gray-600 '>{`LeftBreast:`}</span> {post.ImprintArea.LeftBreast}</p>
                    <p className='text-accent mb-1 flex justify-between items-center'><span className='font-bold text-gray-600 '>{`Front:`}</span> {post.ImprintArea.Front}</p>
                    <p className='text-accent mb-1 flex justify-between items-center'><span className='font-bold text-gray-600 '>{`Back:`}</span> {post.ImprintArea.Back}</p>
                  </div>
                  <div className=' border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Imprint Method:</h6>
                    <p className='text-accent'>{post?.ImprintMethod}</p>
                  </div>
                  <div className=' border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Ready To Ship:</h6>
                    <p className='text-accent'>{post?.ReadyToShip}</p>
                  </div>
                  <div className=' border-b-[1px] py-2 border-gray-200'>
                    <h6 className='capitalize mb-1 text-lg text-gray-600 font-bold mt-3 font-roboto'>Packaging:</h6>
                    <p className='text-accent'>{post?.Packaging}</p>
                  </div>

                </div>
              }
            </div>
          </section>
        </section>

        <section className='md:w-[60%] text-accent'>
          <h2 className=' text-2xl md:text-4xl font-bold mt-6 md:mt-0'>{post.title}</h2>
          <p className='mt-4 font-normal text-accent'>Product Code: <span className=''>{post?.ProductCode}</span></p>
          <div className="pt-[1px] w-full bg-gray-300 my-8" />
          <p className='text-lg text-accent font-roboto'>{post?.shortDescription}</p>
          <section className='my-7 bg-background p-8 rounded-lg flex justify-between items-center'>
            <p className='font-normal text-accent'>Customisations Available:</p>
            <div className='flex gap-8 '>
              <i className='flex items-center text-lg'><BiCheck size={28} className='text-green-500' /> Print</i>
            </div>
          </section>
          <div className="pt-[1px] w-full bg-gray-300 my-8" />
          <section className='bg-background p-3 md:p-8 rounded-lg '>
            <div>
              <h6 className='text-accent font-normal'>Choose Color:</h6>
              <ul className='flex flex-wrap gap-1 md:gap-3 mt-4'>
                {
                  post?.color?.map((clr: any, idx: number) => {
                    const colorExists = color.some((item: any) => item.code === clr.code);
                    return (
                      <li key={idx} onClick={() => HandleColor(clr)} className={`${colorExists ? 'border-green-400' : 'border-transparent'} p-1 border-[3px] rounded-full`}  >
                        <div className='p-6 cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200 ease-in-out rounded-full' style={{ backgroundColor: `#${clr?.code}` }} />
                      </li>
                    )
                  })
                }
              </ul>
              {/* selected color and show all sizes with each selcted color */}
              <div>
                {
                  color?.map((c: IColor, idx: number) => {
                    return (
                      <div key={idx} className='mt-6 flex justify-between '>
                        <div>
                          <div className='flex items-center gap-2'>
                            <div className="p-6 rounded-full" style={{ backgroundColor: `#${c?.code}` }} />
                            <p className='text-lg uppercase'>{c?.name}</p>
                          </div>
                          {/* map all size that are accociated to this product  */}
                          <ul className='flex flex-wrap items-center gap-4 mt-3 '>
                            {
                              post.sizeDescription.map((item: any, idx: number) => {
                                return (
                                  <div key={idx} className='flex flex-col items-center justify-center'>
                                    <p className='text-lg text-accent font-bold'>{item.type}</p>
                                    <div className='mt-1'>
                                      <input type="number" name={item.type} className='w-16 bg-white border border-gray-300 p-2 py-1 placeholder:text-lg placeholder:text-gray-400 placeholder:font-semibold font-semibold focus:outline-none text-lg focus:ring-0 focus:border-gray-500 text-center rounded-3xl'
                                        placeholder='0'
                                        value={size}
                                        onChange={(e) => handleSize(e, c?.name, post.ProductCode)}
                                      />
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </ul>
                        </div>
                        <i className='mt-4 font-semibold text-xl active:scale-105'><RxCross2 onClick={() => RemoveColorFromSelectedList(c)} /></i>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
          <button onClick={() => setIsOpen(true)} className='mt-5 font-bold font-roboto text-secondary uppercase hover:underline flex justify-end items-end w-full'>Size Guide</button>
          {customizationButton && <CustomiztionProduct />}
          {selectedCustomizedLayout?.length > 1 && <Artwork />}
          {selectArt === 'Upload image' && <SelectNumberOfLogoColor />}
          {typeof colorsInLogo === 'number' && <UploadImage />}
          {selectArt === 'Text creator' && <TextCreator />}

          <SizeGuide />

          <button onClick={() => handleCustomization()} className='flex uppercase font-light items-center text-xl mt-6 border border-secondary gap-2 py-3 hover:bg-secondary hover:text-white px-6 text-secondary rounded-full'>
            {customizationButton ? <AiOutlineLine /> : <AiOutlinePlus />} {customizationButton ? 'Cancle customization' : 'Add customization'}
          </button>
          <div className='text-3xl mt-10 flex items-center gap-2'>
            Total: <span className='font-semibold text-secondary text-5xl'>£{post?.price}</span>
          </div>
          <button className='flex uppercase font-light items-center text-2xl mt-8 border border-secondary gap-2 py-3 bg-secondary text-white px-8 hover:text-secondary hover:bg-transparent rounded-full'>
            <SlBasketLoaded /> Add to cart
          </button>
          <Image src="/images/clothing-are-rated-excellent-on-trustpilot1.png" alt="start rating" width={500} height={500} className='w-80 mt-10' />
        </section>
      </main>
    </>
  )
}

export default ProductSlug



const SelectNumberOfLogoColor = () => {
  const { colorsInLogo, setColorsInLogo } = useContext(SettingsContext)
  return (
    <section className='mt-4 bg-background p-8 gap-6 rounded-lg'>
      <h5 className='text-xl font-semibold text-accent capitalize font-roboto'>Select number of color contain logo:</h5>
      <ul className='flex flex-wrap items-center mt-5'>
        {
          [1, 2, 3, 4, 5].map((no, idx) => (
            <li key={idx} onClick={() => setColorsInLogo(no)} className={`p-1 cursor-pointer hover:scale-105 rounded-full border-[2px] ${colorsInLogo === no ? 'border-secondary' : 'border-transparent'}`}> <div className={`w-[52px] h-[52px] text-white font-bold text-xl flex flex-col justify-center items-center rounded-full  ${colorsInLogo === no ? 'bg-accent' : 'bg-black/40'}`}>{no}</div></li>
          ))
        }
      </ul>
    </section>
  )
}

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState<any>(null);

  console.log("🚀 ~ file: [slug].tsx:260 ~ UploadImage ~ selectedImage:", imagePreview)

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));

  };

  return (
    <section className='mt-4 bg-background p-8 grid gap-10 grid-cols-2 rounded-lg'>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} />
        </label>
      </div>
      <div>
        <Image
          src={imagePreview || '/images/image.png'}
          alt="Selected Preview"
          width={500}
          height={500}
          className='max-w-60 rounded-lg'
        />
      </div>
    </section>
  )
}






export async function getStaticProps({ params }: any) {
  const slug = params.slug
  const post = Posts.find(item => item.slug === slug)
  return {
    props: {
      post,
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
