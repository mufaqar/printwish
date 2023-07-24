import Image from 'next/image'
import React from 'react'

const Main_Banner = () => {
  return (
    <section className=''>
      <Image src="/images/slide-1.webp" alt="slide-1.webp" width={1920} height={1280} className='object-cover w-full h-full object-center mx-auto' />
    </section>
  )
}

export default Main_Banner