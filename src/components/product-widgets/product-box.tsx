import { addItem } from '@/features/AddToCart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Product_Box = ({ data, image }: any) => {

  const cartItems = useSelector((state: any) => state.AddToCart.value)
  const dispatch = useDispatch()
  const handleAddToCart = (data: any) => {
    dispatch(addItem(data))
  }

  const isProductIndex = cartItems.findIndex((item: any) => item.id === data.id)

  return (
    <div className='px-4'>
      <div>
        <Image src={image} alt={data?.name} width={200} height={200} className='object-fill w-full h-full mb-3' />
      </div>
      <div className=''>
        <Link href={`/${data?.link}`} className='text-sm font-semibold font-opensans text-accent hover:text-secondary'>
          {data?.name}
        </Link>
        <p className='text-base font-semibold font-opensans text-accent hover:text-secondary my-3'>
          {data?.price}
        </p>
        <button className='text-base relative font-semibold font-roboto uppercase bg-primary text-white px-6 py-1 hover:bg-transparent hover:text-primary border-primary border-2 hover:border-primary'
          onClick={() => handleAddToCart(data)}
        >
          Add to cart
          {isProductIndex !== -1 &&
            <span className='absolute text-sm bg-red-600 p-1 flex flex-col justify-center items-center w-6 h-6 rounded-full text-white -right-4 -top-3'>{isProductIndex !== -1 ? cartItems[isProductIndex].quantity : ''}</span>
          }
        </button>
      </div>
    </div>
  )
}

export default Product_Box