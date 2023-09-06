
import React from 'react'

function Locations() {
  return (
    <div>Locations</div>
  )
}

export default Locations

// import Product_Box from '@/components/product-widgets/product-box'
// import Reviews from '@/components/reviews/reviews'
// import Brands_Slider from '@/components/slider/brand-slider'
// import { apiRequest } from '@/config/requests'
// import { GetServerSideProps, GetStaticPaths } from 'next'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { locationFaqs } from '../../../public/data'
// import Faqs from '@/components/faqs/faqs'
// import { LOCATION_PAGE } from '@/config/query'
// import { client } from '@/config/client'

// const Location = ({ products, pages }: any) => {

//   return (
//     <section className='container mx-auto px-4 my-10'>
//       <figure className='flex justify-center'><Image src="/images/flag.webp" width={300} height={300} className='w-40' alt="flag" /></figure>
//       <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center capitalize my-4'>T-Shirt Printing London</h1>
//       <p className='font-bold text-xl text-center'>If you are based in London and searching for fabulous printing then look no further because we provide the best T-shirt printing in London. PrintWish produces quality printed shirts at reasonable rates.</p>
//       <figure className='flex justify-center mt-4'><Image src="/images/why-chose.webp" width={1000} height={1000} className='w-[800px]' alt="flag" /></figure>
//       <Brands_Slider />
//       <Reviews />
//       <div className='border-[3px] border-[#FF00FF] p-2'>
//         <h5 className='text-center font-bold md:text-2xl'>Place Your Orders To Us And Get Upto 20% Off Prices With Free UK Shipping And Logo Setups.</h5>
//       </div>
//       <h4 className='bg-primary p-3 mt-3 text-center text-white font-bold text-2xl md:text-3xl'>BRANDED T-SHIRTS</h4>
//       <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-cols-1 gap-5 mt-7'>
//         {products?.map((item: any, idx: number) => {
//           const img = item?.images[0]?.src
//           return <Product_Box key={idx} data={item} image={img} />
//         })}
//       </div>
//       <h3 className='font-bold text-2xl md:text-3xl mt-20 mb-3 capitalize '>Premium & Affordable T-shirt Printing in London</h3>
//       <p className='text-accent font-roboto'> PrintWish is an industry-leading t-shirt printing company in London that offers high-quality customized merchandise in bulk quantities. So, if you want custom t-shirt printing cheap and unique to your personality, you’ve come to the right place. Our commitment to premium quality and on-time deliveries has made us one of the best t-shirt printing companies.</p>
//       <p className='text-accent font-roboto'>Typically, custom-printed t-shirts are a staple for corporate events, trade shows, or other social festivals. These are versatile clothing that helps promote a business or create awareness in general. Furthermore, custom t-shirts have become trendy fashion apparel that allows people to go creative with everyday clothing. At PrintWish, no order is too big or small for us. We have an in-house team of design and printing experts who work dedicatedly and offer premium quality t-shirt printing in London. Right from the moment you get in touch, our team maintains transparency at every step of the production process and takes feedback for desired outputs. Over the years, we have successfully catered to clients with diverse needs. Our team ensures to print t-shirts that live up to the client’s expectations and beyond. With our latest printing techniques and modern resources, we have made t-shirt printing cheap, stylish, and comfortable.</p>
//       <h3 className='font-bold text-2xl md:text-3xl mt-4 mb-3 capitalize'>T-shirt printing for varied purposes</h3>
//       <ul className='text-accent font-roboto pl-6'>
//         <li className='list-disc mt-2'><strong>Social events –</strong> Custom t-shirts are perfect for all social events ranging from formal marketing booths to grand industry exhibitions. We outfit brands and companies for a variety of events such as conferences, concerts, product launches, etc. Irrespective of the event size, we offer high-quality custom t-shirts to all our customers.</li>
//         <li className='list-disc mt-2'><strong>Promotional tools –</strong> Custom-printed t-shirts are widely used for promoting one’s brand and generating awareness. Our team at Printwish helps clients design and print custom t-shirts that fulfil their marketing goals. With our high-quality t-shirt printing in London, we strive to help companies transform their brand into something distinctively physical.</li>
//         <li className='list-disc mt-2'><strong>Workwear or uniforms –</strong> Custom-printed t-shirts make for amazing workwear and uniforms that increase a company’s visibility in the market. Be it simple logo prints or other creative designs, the custom t-shirts printed at Printwish look awesome and lets your brand name shine in the workplace.</li>
//       </ul>
//       <p className='text-accent font-roboto mt-2'>  So, if you are in need of custom-printed t-shirts, you’ve come to the right place. Over the years, we have been committed to delivering the highest level of customer satisfaction. Here, our team consists of printing, designing, and marketing experts who work with clients to understand their requirements and get the most satisfactory results.   More than a t-shirt printing company, we are business consultants who go above and beyond to make custom t-shirts that are bespoke to your requirements. Moreover, our hard work and expertise have helped us meet deadlines without compromising on the quality of merchandise and customer service.   Not to miss, we offer online customization of t-shirts wherein one can design their own unique t-shirt using the latest tools and software. Be it some abstract patterns, a brand logo, or a picture, we make t-shirt printing cheap and hassle-free while assuring the best quality prints. Pick from our available range of t-shirts or design one for yourself today!</p>
//       <h3 className='font-bold text-2xl md:text-3xl mt-4 mb-3 capitalize'>Frequently Asked Questions</h3>
//       <Faqs data={locationFaqs}/>
//       <Reviews />
//     </section>
//   )
// }

// export default Location




// export async function getStaticProps({ params }: any) {
//   const slug = params.location
//   const response = await client.query({
//     query: LOCATION_PAGE,
//     variables: {
//       slug,
//     },
//   });

//   const pages = response?.data?.page;

//   const dataForProducts = {
//     per_page: 30,
//   };
//   const { products } = await apiRequest('POST', 'get-products', dataForProducts)


//   return { props: { products, pages } }
// }
