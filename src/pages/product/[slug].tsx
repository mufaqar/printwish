import { GetStaticPaths } from 'next';
import React, { useState } from 'react'
import { Posts } from '../../../public/data'
import Image from 'next/image';
import { BiCheck } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'


interface IColor {
  code: string,
  name: string
}


const ProductSlug = ({ post }: any) => {
  // console.log("🚀 ~ file: [slug].tsx:6 ~ ProductSlug ~ post:", post)
  const [color, setColor] = useState<any>([])
  const [size, setSize] = useState();
  const [productWithSizeAndQuantity, setProductWithSizeAndQuantity] = useState<any>([])
  console.log("🚀 ~ file: [slug].tsx:20 ~ ProductSlug ~ productWithSizeAndQuantity:", productWithSizeAndQuantity)

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

  const handleSize = (e:any, colorName:any) => {
    const size = e.target.name
    const quantity = e.target.value

    if(quantity > 0){
      const sizeRes = {
        size,quantity,colorName
      }
      console.log("🚀 ~ file: [slug].tsx:41 ~ handleSize ~ sizeRes:", sizeRes)
      
      const SizeAndColorExists = productWithSizeAndQuantity.some((item: any) => item.size === size && item.colorName === colorName);
      console.log("🚀 ~ file: [slug].tsx:43 ~ handleSize ~ SizeAndColorExists:", SizeAndColorExists)
      if(SizeAndColorExists){
          // const findSize = productWithSizeAndQuantity.filter((item:any)=>{item.size !== size})
          // console.log("🚀 ~ file: [slug].tsx:43 ~ handleSize ~ findSize:", findSize)
          // setProductWithSizeAndQuantity([...findSize, sizeRes])
      }else{
        // setProductWithSizeAndQuantity([...productWithSizeAndQuantity, sizeRes])
      }
    }
    
  }

  return (
    <main className='flex container mx-auto px-4 gap-10 mt-7 font-opensans mb-20'>
      <div className='w-[40%]'>
        <Image src={post.image} alt={post.title} width={600} height={600} className="w-full" />
      </div>
      <div className='w-[60%] text-accent'>
        <h2 className=' text-2xl md:text-4xl font-bold'>{post.title}</h2>
        <p className='mt-4 font-normal text-accent'>Product Code: <span className=''>{post?.ProductCode}</span></p>
        <div className="pt-[1px] w-full bg-gray-300 my-8" />
        <p className='text-lg text-accent font-roboto'>{post?.shortDescription}</p>
        <section className='my-7 bg-background p-8 rounded-lg flex justify-between items-center'>
          <p className='font-normal text-accent'>Customisations Available:</p>
          <div className='flex gap-8'>
            <i className='flex items-center text-lg'><BiCheck size={28} className='text-green-500' /> Print</i>
            <i className='flex items-center text-lg'><BiCheck size={28} className='text-green-500' /> Embroidery</i>
          </div>
        </section>
        <div className="pt-[1px] w-full bg-gray-300 my-8" />
        <section className='bg-background p-8 rounded-lg '>
          <div>
            <h6 className='text-accent font-normal'>Choose Color:</h6>
            <ul className='flex flex-wrap gap-4 mt-4'>
              {
                post?.color?.map((clr: any, idx: number) => {
                  const colorExists = color.some((item: any) => item.code === clr.code);
                  return (
                    <li key={idx} onClick={() => HandleColor(clr)} className={`${colorExists ? 'border-green-400' : 'border-transparent'} p-2 border-[3px] rounded-full`}  >
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
                                    onChange={(e)=>handleSize(e, c?.name)}
                                     />
                                  </div>
                                </div>
                              )
                            })
                          }
                        </ul>
                      </div>
                      <i className='mt-4 font-semibold text-xl hover:scale-110 active:scale-105'><RxCross2 onClick={() => RemoveColorFromSelectedList(c)} /></i>
                    </div>
                  )
                })
              }
            </div>

          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductSlug



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
