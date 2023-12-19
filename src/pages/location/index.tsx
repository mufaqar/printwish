
import Product_Box from '../../components/product-widgets/product-box'
import Reviews from '../../components/reviews/reviews'
import Image from 'next/image'
import React from 'react'
import Faqs from '../../components/faqs/faqs'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
// import parse from "html-react-parser";


const Location = ({ products, pages,slug }: any) => {
  // const fullHead = parse(pages.seo.fullHead);
  const router = useRouter()
  return (
    <>

    
    <section className='container mx-auto px-4 my-10'>
      <div className='mb-10'>
        <h1 className='font-bold text-[#D1DE8B] text-4xl sm:text-[46px] capitalize my-4'>Personalised Clothing {pages?.title}</h1>
        <p className='font-bold text-xl text-gray-600'>Desire a distinctive addition to your {pages?.title} closet? At PrintWish, we showcase a
          diverse array, ready for your personal touch. Dive into a world where your fashion
          aspirations meet our expertise. This includes advanced techniques in printing,
          intricate embroidery, and so much more. Whether you’re seeking tees branded
          with your unique logo or exclusive patterns shipped UK-wide, our promise is
          quality and originality.</p>
        <div className='grid grid-col-1 gap-5 sm:grid-cols-2 md:grid-cols-4 mt-12'>
          {
            list1.map((item, id) => (
              <div key={id}>
                <Image src={item.image} alt={item.name} width={600} height={200} className='sm:h-[180px] object-cover border border-gray-100' />
                <h5 className='text-center mt-4 font-bold text-gray-700 min-h-[57px] text-lg'>{item?.name.replace(/London/g, pages?.title)}</h5>
                <h6 className='text-center font-light mt-1 text-gray-800'>{item.text.replace(/London/g, pages?.title)}</h6>
                <button onClick={()=>router.push('/custom-t-shirt-printing-cheap-t-shirt-printing')} className='bg-[#D1DE8B] text-black p-2 w-full mt-4 hover:scale-105'>View Products</button>
              </div>
            ))
          }
        </div>

        <h4 className='bg-primary p-3 text-center text-white font-bold text-2xl mt-10 md:text-3xl'>BRANDED T-SHIRTS</h4>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 grid-cols-2 gap-5 mt-7'>
          {products?.map((item: any, idx: number) => {
            const img = item?.featuredImage?.node.mediaItemUrl
            return <Product_Box key={idx} data={item} image={img} />
          })}
        </div>

        <div className='grid grid-cols-1 items-center md:grid-cols-2 mt-12'>
          <div className='text-lg text-gray-600'>
            <h5>Printwish Clothing</h5>
            <p className='mt-2'>0800 051 0821</p>
            <h6 className='mt-7 font-semibold underline'><Link href="mailto:enquiries@printwish.co.uk" >enquiries@printwish.co.uk </Link></h6>
            <button className='mt-5 bg-[#D1DE8B] p-2 px-16 hover:scale-105 rounded-full shadow-xl'><Link href="mailto:enquiries@printwish.co.uk" >Enquire</Link></button>
          </div>
          <div className='md:mt-0 mt-6'>
            <div className='grid grid-cols-2 p-4 t_shadow font-semibold'>
              <div />
              <div className='text-center sm:text-lg'> Opening Times </div>
            </div>
            <div className='grid grid-cols-2 text-gray-600'>
              <ul className='text-center border-r-[1px] border-black'>
                {
                  openSchdule.map((d, i) => (
                    <li key={i} className='my-6'>{d.day}</li>
                  ))
                }
              </ul>
              <ul className='text-center '>
                {
                  openSchdule.map((d, i) => (
                    <li key={i} className='my-6'>{d.time}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <h2 className='font-bold text-[#D1DE8B] text-4xl sm:text-[46px] capitalize my-4  mt-10'>ORDER DELIVERY TIMELINE?</h2>
        <p className='font-bold text-xl text-gray-600'>We are committed to timely deliveries. With complimentary UK Shipping on every
          order, you can expect your curated pieces within 5-7 business days post payment.
          Should you have urgent needs or special requests, our dedicated team is
          available at sales@printwish.co.uk.</p>

        <div className='grid grid-col-1 gap-5 sm:grid-cols-2 md:grid-cols-4 mt-12'>
          {
            list2.map((item, id) => (
              <div key={id}>
                <Image src={item.image} alt={item.name} width={600} height={200} className='sm:h-[180px] object-cover border border-gray-100' />
                <h5 className='text-center mt-4 font-bold text-gray-700 text-lg'>{item?.name}</h5>
                <h6 className='text-center font-light mt-4 text-gray-800'>{item.text.replace(/London/g, item?.name)}</h6>
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