import { addItem } from '@/features/AddToCart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Product_Box = ({ data, image }: any) => {
  //console.log("🚀 ~ file: product-box.tsx:8 ~ data:", data)

  //var { whitesmall, whitelarge, colorsmall, colorlarge } = data.poductInfo;



  const colors_lenght = data?.attributes?.find((cl:any)=> (cl.name ==='Color')  )
  const cartItems = useSelector((state: any) => state.AddToCart.value)
  const dispatch = useDispatch()
  const handleAddToCart = (data: any) => {
    dispatch(addItem(data))
  }
  const isProductIndex = cartItems.findIndex((item: any) => item.id === data.id)
  return (
    <div className='p-1 border border-gray-200 '>
      <Link href={`/product/${data?.slug}`} className='border border-gray-100 p-2 md:h-[300px] cursor-pointer mb-2 flex flex-col justify-center items-center group'>
        <Image src={image} alt={data?.title || data?.name} width={200} height={200} className='transition-all duration-200 ease-in-out object-fill w-full mb-3 group-hover:scale-95' />
      </Link>
      <div className='flex flex-col justify-center items-center'>
        <h5 className="min-h-[40px]">
          <Link href={`/product/${data?.slug}`} className='text-sm font-bold flex font-roboto text-accent hover:text-secondary'>
            <span className='text-center'>{data?.title || data?.name}</span>
          </Link>
        </h5>
        <p className='text-base'>
          <strong>{colors_lenght?.options?.length}</strong> Colors available        
        </p>

        <p className='text-center font-bold font-roboto mb-3 text-primary'>
          From <span className='text-secondary  hover:text-secondary'>£{data?.price}</span>
        </p>
        <Link href={`/product/${data?.slug}`}  className='text-base relative font-semibold flex justify-center font-roboto uppercase bg-primary text-white px-6 py-1 hover:bg-transparent hover:text-primary border-primary border-2 hover:border-primary'
          
        >
          View Product
          {/* {isProductIndex !== -1 &&
            <span className='absolute text-sm bg-red-600 p-1 flex flex-col justify-center items-center w-6 h-6 rounded-full text-white -right-4 -top-3'>{isProductIndex !== -1 ? cartItems[isProductIndex].quantity : ''}</span>
          } */}
        </Link>
      </div>
    </div>
  )
}

export default Product_Box