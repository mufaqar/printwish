
import Product_Box from '../../components/product-widgets/product-box'
import Reviews from '../../components/reviews/reviews'
import Image from 'next/image'
import React from 'react'
import Faqs from '../../components/faqs/faqs'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DeliveryTime from '@/components/deliveryTime/DeliveryTime'
// import parse from "html-react-parser";

const Location = ({ products, pages, slug }: any) => {
  // console.log("🚀 ~ Location ~ pages:", pages.locationinfo)
  // const fullHead = parse(pages.seo.fullHead);
  const router = useRouter()
  return (
    <>
      <section className='container mx-auto px-4 my-10'>
        <div className='mb-10'>
          <h1 className='font-bold text-[#D1DE8B] text-4xl sm:text-[46px] capitalize my-4'> {pages?.locationinfo?.productSection?.title}</h1>
          <p className='font-bold text-xl text-gray-600'>{pages?.locationinfo?.productSection?.subTitle}</p>
          <div className='grid grid-col-1 gap-5 sm:grid-cols-2 md:grid-cols-4 mt-12'>
              {
              pages?.locationinfo?.productSection?.productSections.map((item: any, id: number) => (
                <div key={id}>
                    <Image src={item?.image?.node?.mediaItemUrl} alt={item.name} width={600} height={200} className='sm:h-[180px] object-cover border border-gray-100' />
                    <h5 className='text-center mt-4 font-bold text-gray-700 text-lg'>{item?.title} </h5>
                    <div
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                      className='text-center font-light mt-4 text-gray-800'
                    />
                    <Link href={item?.link}  className='bg-[#D1DE8B] text-black p-2 w-full mt-4 hover:scale-105 block text-center'>View Products</Link>                  
                  </div>
                ))
              }
            </div>

            <div className='md:max-w-[420px] mx-auto'>

            <DeliveryTime title="Standard" desc="" /></div>

          <h4 className='bg-primary p-3 text-center text-white font-bold text-2xl mt-10 md:text-3xl'>Our Range of Printed T- shirts</h4>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 grid-cols-2 gap-5 mt-7'>
            {products?.map((item: any, idx: number) => {
              const img = item?.featuredImage?.node.mediaItemUrl
              return <Product_Box key={idx} data={item} image={img} />
            })}
          </div>

        {/* Order  Section   */}
          <h2 className='font-bold text-[#D1DE8B] text-4xl sm:text-[46px] capitalize my-4  mt-10'> {pages?.locationinfo?.orderSection?.title}</h2>
          <p className='font-bold text-xl text-gray-600'>{pages?.locationinfo?.orderSection?.subTitle}</p>
          <div className='grid grid-col-1 gap-5 sm:grid-cols-2 md:grid-cols-4 mt-12'>
            {
              pages?.locationinfo?.orderSection?.orderSections.map((item: any, id: number) => (
                <div key={id}>
                  <Image src={item?.image?.node?.mediaItemUrl} alt={item.name} width={600} height={200} className='sm:h-[180px] object-cover border border-gray-100' />
                  <h5 className='text-center mt-4 font-bold text-gray-700 text-lg'>{item?.title} </h5>
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                    className='text-center font-light mt-4 text-gray-800'
                  />
                </div>
              ))
            }
          </div>
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
    </>
  )
}

export default Location





const list1 = [
  {
    name: "T-Shirt Customisation in London",
    text: "Experience premium t-shirt printing in London at PrintWish. As one of the leading customisation hubs in the UK, we invite you to discover the nation's top-selling tees and pick your top choice, while relishing a seamless shopping experience.",
    image: "/images/T-shirt Printing London Image.jpg"
  },
  {
    name: "UniSex T-Shirts",
    text: "We boast an extensive collection of bespoke unisex t-shirts, perfect for any event, sourced from top-tier brands. Whether you're dressing up for a special occasion or seeking everyday comfort, our tees are tailored to meet diverse needs.",
    image: "/images/Image for T-shirts Category Page and Unisex.jpg"
  },
  {
    name: "Men's T-Shirts",
    text: "Dive into personalised t-shirt crafting with PrintWish. Explore our vast, curated selection of men's tees, each promising unparalleled comfort and style. With us, find not just apparel, but an extension of your personality.",
    image: "/images/Men's T-shirts.jpg"
  },
  {
    name: "Women's T-Shirts",
    text: "Venture through our wide style range to unearth the finest in women's tees. With both contemporary and classic designs, opt for our standout ready stock. Every piece can be tailored, ensuring it mirrors your unique essence.",
    image: "/images/Womens T-shirts.jpg"
  }
]

const list2 = [
  {
    name: "Ways to Make Your Clothes Unique?",
    text: "Fashion is about expressing oneself. Several methods exist to make apparel uniquely yours. Depending on your taste, desired apparel style, and occasion, we've got you covered. Let&#39;s explore our wide range of offerings below:",
    image: "/images/Delivery Image.jpg"
  },
  {
    name: "Screen Printing",
    text: "Our in-house experts perform screen printing using top-notch inks and materials, promising a striking appearance. Dive into vivid colors and sharp designs, making every attire uniquely yours.",
    image: "/images/Screen Printing.jpg"
  },
  {
    name: "Embroidery",
    text: "Embroidery stands as our core. A method we cherish deeply, it offers your attire a bespoke touch that resonates with heritage and craftsmanship, ensuring each piece tells a story.",
    image: "/images/Embroidery.jpg"
  },
  {
    name: "Digital Print",
    text: "Popular for its precision, digital printing is among the favored techniques. Ensuring crisp text and imagery, it lets you wear your thoughts, beliefs, or simply, your style with unmatched clarity.",
    image: "/images/DTG Printing.jpg"
  },
]

const openSchdule = [
  {
    day: "Monday",
    time: "8.30am - 5pm"
  },
  {
    day: "Tuesday",
    time: "8.30am - 5pm"
  },
  {
    day: "Wednesday",
    time: "8.30am - 5pm"
  },
  {
    day: "Thursday",
    time: "8.30am - 5pm"
  },
  {
    day: "Friday",
    time: "8.30am - 5pm"
  },
  {
    day: "Saturday",
    time: "Closed"
  },
  {
    day: "Sunday",
    time: "Closed"
  }
]