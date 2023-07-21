import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product_Box = () => {
  return (
    <div className=''>
      <Image src="/images/1.webp" alt="image" width={200} height={200} className='object-fill mb-3' />
      <div className=''>
        <Link href="#" className='text-sm font-semibold text-accent hover:text-secondary'>
          GILDAN Kids Ring Spun Soft Style T-Shirt
        </Link>
        <p className='text-base font-semibold text-accent hover:text-secondary my-3'>
          £4.46
        </p>
        <button className='text-base font-semibold uppercase bg-primary text-white px-6 py-1 hover:bg-transparent hover:text-primary border-primary border-2 hover:border-primary'>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product_Box