import React from 'react'

import { FaRegUser } from 'react-icons/fa'
import { GoFileDirectory } from 'react-icons/go'
import { FaRegComments } from 'react-icons/fa'
import BlogSidebar from '@/components/blogsidebar'
function bloglay() {
  return (
    <>
      <main className='space-y-12 items-center lg:ml-10 max-w-screen-xl px-6 md:px-6 py-5 '>
        {Data.map((item, idx) => {
          return (
            <div key={idx} className="container lg:flex ">
              <div className='h-20 w-[60px] text-center'>
                <span className="text-[#222529] text-[1.75rem] font-[500] px-[10px] py-0 bg-[#f4f4f4] block border-[1px] border-[#e3e3e3]  ">{item.Day}</span>
                <span className="bg-[#0188cc] text-white font-[400] text-[14px] py-[2px] leading-[27px]  block box-border">{item.Month}</span>
              </div>
              <div className="cont lg:ml-7">
                <h1>
                  <a className='lg:text-[22px] font-[600] cursor-pointer' href=""> {item.Heading}</a>
                </h1>
                <p className='lg:text-[15px] leading-[27px] text-[#7b858a] pb-[2.1rem] font-[400] lg:w-[690px] tracking-[.2px] pt-2 mb-[1rem] border-b-[1px] '>{item.description}</p>
                <div className="icons lg:flex text-black  pt-1 border-b-[1px] pb-[1.5rem] ">
                  <span className='flex '>
                    <li className='list-none text-[16px] font-[400] text-[#7b858a]'><FaRegUser /> </li>
                    <a className='text-[13px] font-[600] text-[#7b858a] lg:pl-2' href="">  BY PRINTWISH</a>
                  </span>
                  <span className='flex list-none lg:pl-2'>
                    <li className='mr-[6px] text-[17px]  font-[400] text-[#7b858a]'><GoFileDirectory /></li>
                    <a className='text-[13px] font-[600] text-[#7b858a] ' href=""> UNCATEGORIZED</a>
                  </span>

                  <span className='flex list-none lg:pl-2 '>
                    <li className='mr-[6px] text-[#7b858a]'><FaRegComments /> </li>
                    <a className='text-[13px] font-[600] text-[#7b858a] ' href="">  COMMENTS OFF</a>
                  </span>
                  <a className='bg-[#0188cc] lg:ml-60 text-[0.625rem] fot-[500] px-[0.5rem] py-[0.2rem] hover:bg-[#03aafe] cursor-pointer text-white '>READ MORE...</a>
                </div>
              </div>

            </div>



          );
        })}

        <BlogSidebar />

      </main>
    </>
  )
}
export default bloglay


const Data = [

  {
    id: '1',
    Day: '03',
    Month: 'MAY',
    Heading: '20 reasons why T-shirt printing is good for your business',
    description: 'Custom T-Shirt Printing Custom t-shirt printing is a method that includes using a machine to carve out pictures and letters on pieces of tinted vinyl. A heat press is then utilized to transport each vinyl to...'
  },

  {
    id: '2',
    Day: '20',
    Month: 'APR',
    Heading: 'Importance of Custom T-Shirts',
    description: 'Custom T-Shirt Printing In Custom t-shirt printing first, print the picture over a transfer paper with ink, and then you displace the picture to the shirt using heat press or iron. Then turn the shirt inside...'
  },

  {
    id: '3',
    Day: '06',
    Month: 'APR',
    Heading: 'How to Start a Custom T-Shirt Printing Business?',
    description: 'Custom T-Shirt Printing Custom t-shirt printing relates to the technique or method of printing on a t-shirt. Custom t-shirt printing involves an intricate design, lettering, or picture, which is implemented or imprinted onto the t-shirt utilizing...'
  },

  {
    id: '4',
    Day: '27',
    Month: 'APR',
    Heading: 'How to Advertise Custom t-shirts Online?',
    description: 'T-Shirt Printing A T-shirt inspires most people because it offers leisure and comfort. T-shirt printing is a process in which one can print any logo or design on a shirt by screen printing methods. One can...'
  },
]

