
import Product_Box from '@/components/product-widgets/product-box'
import Reviews from '@/components/reviews/reviews'
import Brands_Slider from '@/components/slider/brand-slider'
import Image from 'next/image'
import React from 'react'
import Faqs from '@/components/faqs/faqs'

const Location = ({ products, pages }: any) => {

  return (
    <section className='container mx-auto px-4 my-10'>
      <figure className='flex justify-center'><Image src="/images/flag.webp" width={300} height={300} className='w-40' alt="flag" /></figure>
      <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center capitalize my-4'>T-Shirt Printing {pages?.title}</h1>
      <p className='font-bold text-xl text-center'>If you are based in {pages?.title} and searching for fabulous printing then look no further because we provide the best T-shirt printing in {pages?.title}. PrintWish produces quality printed shirts at reasonable rates.</p>
      <figure className='flex justify-center mt-4'><Image src="/images/why-chose.webp" width={1000} height={1000} className='w-[800px]' alt="flag" /></figure>
      <Brands_Slider />
      <Reviews />
      <div className='border-[3px] border-[#FF00FF] p-2'>
        <h5 className='text-center font-bold md:text-2xl'>Place Your Orders To Us And Get Upto 20% Off Prices With Free UK Shipping And Logo Setups.</h5>
      </div>
      <h4 className='bg-primary p-3 mt-3 text-center text-white font-bold text-2xl md:text-3xl'>BRANDED T-SHIRTS</h4>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 grid-cols-2 gap-5 mt-7'>
        {products?.map((item: any, idx: number) => {
          const img = item?.images[0]?.src
          return <Product_Box key={idx} data={item} image={img} />
        })}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: pages?.content }}
        className='locationContent'
      />
      {
        pages?.locationinfo?.faqs?.length > 0 && <>
        <h3 className='font-bold text-2xl md:text-3xl mt-4 mb-3 capitalize'>Frequently Asked Questions</h3>
        <Faqs data={pages.locationinfo.faqs} />
        </>
      }
      
      <Reviews />
    </section>
  )
}

export default Location

