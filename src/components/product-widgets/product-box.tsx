import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product_Box = ({ data }: any) => {
  return (
    <div className='px-4'>
      <div>
        <Image src={data?.img} alt="image" width={200} height={200} className='object-fill w-full h-full mb-3' />
      </div>
      <div className=''>
        <Link href={`/${data?.link}`} className='text-sm font-semibold font-opensans text-accent hover:text-secondary'>
          {data?.name}
        </Link>
        <p className='text-base font-semibold font-opensans text-accent hover:text-secondary my-3'>
         {data?.price}
        </p>
        <button className='text-base font-semibold font-roboto uppercase bg-primary text-white px-6 py-1 hover:bg-transparent hover:text-primary border-primary border-2 hover:border-primary'>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product_Box