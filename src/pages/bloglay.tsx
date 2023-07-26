import React from 'react'
import Test from '@/components/blog-layout/test'
import {FaRegUser} from 'react-icons/fa'
import {GoFileDirectory} from 'react-icons/go'
import {FaRegComments} from 'react-icons/fa'
function bloglay() {
  return (
    <>
    <main className=' space-y-12 items-center lg:ml-10 max-w-screen-xl px-6 md:px-6 py-5 '>
      { Test.map((item,idx)=>{
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
                  <li className='list-none text-[16px] font-[400] text-[#7b858a]'><FaRegUser/> </li>
                  <a className='text-[13px] font-[600] text-[#7b858a] lg:pl-2' href="">  BY PRINTWISH</a>
                </span>
                <span className='flex list-none lg:pl-2'>
                  <li className='mr-[6px] text-[17px]  font-[400] text-[#7b858a]'><GoFileDirectory/></li>
                  <a className='text-[13px] font-[600] text-[#7b858a] ' href=""> UNCATEGORIZED</a>
                </span>

                <span className='flex list-none lg:pl-2 '>
                  <li className='mr-[6px] text-[#7b858a]'><FaRegComments/> </li>
                  <a className='text-[13px] font-[600] text-[#7b858a] ' href="">  COMMENTS OFF</a>
                  </span>
<a className='bg-[#0188cc] lg:ml-60 text-[0.625rem] fot-[500] px-[0.5rem] py-[0.2rem] hover:bg-[#03aafe] cursor-pointer text-white '>READ MORE...</a>
       </div>
              </div>
              
           </div>
           
           );
})}

    </main>
    </>
  )
}
export default bloglay