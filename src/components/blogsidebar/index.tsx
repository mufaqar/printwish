import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
function BlogSidebar() {
    return (
        <>
            <main className='items-center   max-w-screen-xl px-6 md:px-6 lg:flex lg:-mt-[590px] '>
                <div className="cont  pt-3 bg-white  border-[1px] lg:w-[250px] h-[390px] pl-[20px]">
                    <h1 className='text-[17px] font-[500] text-[#4d4d4d] leading-[32px]'>BLOG CATEGORIES</h1>
                    <ul className=' flex mb-[1rem] mt-4'>
                        <li className='text-[12px] font-bold mr-[15px] h-auto mt-2  '><AiOutlineRight /></li>
                        <a className='leading-[27px] font-[500] text-[16px] leading-[27px] hover:text-[#0188cc] text-[#7b858a] ' href="">
                            Uncategorized
                        </a>
                    </ul>
                    <div className="fot mt-10  mb-[15px] border-b-[1px] lg:w-[200px] ">
                        <h1 className='text-[17px] font-[500] mb-[15px]'>RECENT POSTS</h1>
                        <li className='font-[500] text-[17px] leading-tight list-none cursor-pointer hover:underline' >20 reasons why T-shirt printing is good for your business</li>
                        <p className='text-[.8em] text-[#7b858a] pt-2 font-[400] pb-[15px]'>May 3, 2021</p>
                    </div>
                    <div className="fot2 ">
                        <a className='font-[500] text-[17px] hover:underline' href="">Importance of Custom T-Shirts</a><br />
                        <span className='text-[.8em] text-[#7b858a] font-[400]'>April 20, 2021</span>
                    </div>
                </div>
            </main>
        </>
    )
}

export default BlogSidebar