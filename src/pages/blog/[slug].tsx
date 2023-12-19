import React from 'react'
import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'
import { FaRegFolder } from 'react-icons/fa'
import { FaRegComments } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { ImLinkedin2 } from 'react-icons/im'
import { BiLogoGooglePlus } from 'react-icons/bi'
import { FaPinterest } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'
import { BsFillPlayFill } from 'react-icons/bs'
import BlogSidebar from '@/components/blogsidebar'
import Image from 'next/image'
import SeoMeta from '@/components/seo/Seo'

function SingleBlog() {
    return (
        <>
         <SeoMeta title="Blog and Latest News about T-Shirt Printing  " description="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders." url="blog" />

            <main className='my-20 lg:flex lg:flex-wrap justify-between items-center mx-auto max-w-screen-xl md:px-6  px-6   '>

                <div className=" container lg:w-[800px] ">
                    <div className=" border-b-[1px]">
                    <div className='h-20 w-[60px] text-center'>
                        <span className="text-[#222529] text-[1.75rem] font-[500] px-[10px] py-0 bg-[#f4f4f4] block border-[1px] border-[#e3e3e3]  ">03</span>
                        <span className="bg-[#0188cc] text-white font-[400] text-[14px] py-[2px] leading-[27px]  block box-border">MAY</span>
                    </div>
                    <div className="">
                        <h1 className='lg:text-[22px] font-[600] cursor-pointer font-OpenSans mb-[15px]'>20 reasons why T-shirt printing is good for your business</h1>
                    </div>


                    {/* content is here    */}

                    <div className="cont lg:pl-[85px]">
                        <div className="custom ">
                            <p className='mb-[1.25rem] font-[400] text-[14px] leading-[27px] text-[#7b858a] font-OpenSans'><strong>Custom T-Shirt Printing</strong></p>
                            <p className='lg:text-[17px] leading-[27px] text-[#7b858a] mb-[1.25rem] font-[400] lg:w-[700px] -tracking-[0.01px] font-OpenSans'>Custom t-shirt printing is a method that includes using a machine to carve out pictures and letters on pieces of tinted vinyl. A heat press is then utilized to transport each vinyl to the t-shirt. CAD-Cut vinyl is perfect for printing custom t-shirts. The custom t-shirts UK are also known as customized t-shirts in the <strong>UK</strong>.</p>
                            <h2 className='text-[30px] font-[300] leading-[40px]  text-[#1d2127] font-OpenSans lg:w-[550px] mb-[1.25rem]'>20 reasons why T-shirt printing is good for your business
                            </h2>
                        </div>


                        <div className="icons lg:flex text-black  lg:w-[900px] pb-[1.5rem] lg:space-x-6 ">
                            <div className="lg:flex lg:space-x-6  ">
                                <span className='flex space-x-2'>
                                    <li className='list-none text-[18px] font-[400] text-[#7b858a]'><FaRegUser /> </li>
                                    <a className='text-[13px] font-[600] text-[#7b858a]  font-OpenSans hover:underline' href="">  BY PRINTWISH</a>
                                </span>
                                <span className='flex list-none space-x-2'>
                                    <li className=' text-[18px]  font-[400] text-[#7b858a]'><FaRegFolder /></li>
                                    <a className='text-[13px] font-[600] text-[#7b858a] font-OpenSans  hover:underline' href=""> UNCATEGORIZED</a>
                                </span>

                                <span className='flex list-none  space-x-2'>
                                    <li className=' text-[18px] text-[#7b858a] font-[400]'><FaRegComments /> </li>
                                    <a className='text-[13px] font-OpenSanspx] font-[600] text-[#7b858a] font-OpenSans ' href="">  COMMENTS OFF</a>
                                </span>
                            </div>

                            <div className="lg:flex">
                                <span className='flex list-none  space-x-2'>
                                    <li className=' text-[18px] text-[#7b858a] font-[400]'><FaShareAlt /> </li>
                                    <a className='text-[13px] font-OpenSanspx] font-[600] text-[#7b858a] font-OpenSans ' href="">  SHARE:</a>
                                </span>
                                <div className="flex space-x-2 lg:ml-2 lg:-mt-[2px]">
                                    <div className="group flex relative">
                                        <Link className='py-1 px-1 h-6 w-6 text-[17px] text-white rounded-[50px] bg-[#7b858a]' href={"https://www.youtube.com/watch?v=Js8yfY3S0G4"}><BiLogoFacebook />
                                        </Link>  <span className="group-hover:opacity-100 transition-opacity bg-black px-2 py-1 text-sm text-gray-100  absolute left-1/2 
                -translate-x-1/2 translate-y-full opacity-0 mx-auto">Facebook</span>
                                    </div>
                                    <div className="group flex relative">
                                        <Link className='pt-[6px] px-[6px] h-6 w-6 text-[13px] text-white rounded-[50px] bg-[#7b858a]' href={"https://www.youtube.com/watch?v=Js8yfY3S0G4"}><FaTwitter /></Link>  <span className="group-hover:opacity-100 transition-opacity bg-black px-1 text-sm text-gray-100 absolute left-1/2 
                -translate-x-1/2 translate-y-full opacity-0 px-2 py-1  mx-auto">Twitter</span>
                                    </div>
                                    <div className="group flex relative">
                                        <Link className=' py-1 px-1 h-6 w-6 text-[14px] text-white rounded-[50px] bg-[#7b858a]' href={"https://www.youtube.com/watch?v=Js8yfY3S0G4"}><ImLinkedin2 /></Link>  <span className="group-hover:opacity-100 transition-opacity bg-black px-1 text-sm text-gray-100 absolute left-1/2 
                -translate-x-1/2 translate-y-full opacity-0 px-2 py-1  mx-auto">Linkedin</span>
                                    </div>
                                    <div className="group flex relative">
                                        <Link className='pt-[2px] px-[2px] h-6 w-6 text-[20px] text-white rounded-[50px] bg-[#7b858a]' href={"https://www.youtube.com/watch?v=Js8yfY3S0G4"}><BiLogoGooglePlus /></Link>  <span className="group-hover:opacity-100 transition-opacity bg-black px-1 text-sm text-gray-100  absolute left-1/2 
                -translate-x-1/2 translate-y-full opacity-0 px-2 py-1  mx-auto">Google</span>
                                    </div>
                                    <div className="group flex relative">
                                        <Link className='pt-[5px] px-1 h-6 w-6 text-[14px] text-white rounded-[50px] bg-[#7b858a]' href={"https://www.youtube.com/watch?v=Js8yfY3S0G4"}><FaPinterest /></Link>  <span className="group-hover:opacity-100 transition-opacity bg-black px-1 text-sm text-gray-100 absolute left-1/2 
                -translate-x-1/2 translate-y-full opacity-0 px-2 py-1  mx-auto">Pinterest</span>
                                    </div>
                                    <div className="group flex relative">
                                        <Link className='pt-[5px] pl-[5px] h-6 w-6 text-[14px] text-white rounded-[50px] bg-[#7b858a]' href={"https://www.youtube.com/watch?v=Js8yfY3S0G4"}><MdEmail /></Link>  <span className="group-hover:opacity-100 transition-opacity bg-black px-1 text-sm text-gray-100  absolute left-1/2 
                -translate-x-1/2 translate-y-full opacity-0 px-2 py-1  mx-auto">Mail</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="print mb-[4rem]">
                        <div className="flex items-center space-x-5 mt-5 pb-5 border-b-[1px]">
                            <div className="img">
                                <Image width={20} height={20} src="/images/pw.png" alt="" />
                            </div>
                            <div className="pw ">
                                <p className=''>
                                    <strong className='text-[18px] font-OpenSans '><Link href={"https://printwish.co.uk/author/printwish/"}>PRINTWISH</Link></strong>
                                </p>

                            </div>

                        </div>
                    </div>
                    <footer className=''>
                        <div className="post">
                            <h4 className='font-[700] text-[1.2em] mb-[15px] font-OpenSans'>RELATED <strong>POSTS</strong></h4>
                            <div className="lg:flex space-x-5">
                                {Data.map((item, idx) => {
                                    return (
                                        <div key={idx} className="Detail">
                                            <span className='flex items-center text-[#7b858a] text-[13px] '>
                                                <i className='text-[18px] font-[400] pr-[5px]'> <FaRegClock /> </i>
                                                {item.Date}
                                            </span>

                                            <h3 className='text-[25px] font-[500] mt-[5px] tracking-[.3px] leading-normal mb-[15px] text-[#222529] lg:w-[300px] font-OpenSans'><Link href={"https://printwish.co.uk/how-to-start-a-custom-t-shirt-printing-business/"}>
                                                {item.title}</Link></h3>

                                            <Link className='flex items-center' href={"https://printwish.co.uk/how-to-start-a-custom-t-shirt-printing-business/"}>
                                                <span className='text-[.9em] text-[#222529] font-[700] font-OpenSans -tracking-[1px] hover:underline leading-[27px]'>READ MORE</span>
                                                <i className='text-[1.5em] -ml-[2px] text-[#222529]  font-[600]'><BsFillPlayFill /></i>
                                            </Link>
                                        </div>
                                    )

                                })}
                            </div>
                        </div>
                    </footer>
                </div>
<div className="lg:top-60  ml-4 relative">
                <div className="sticky lg:top-0 lg:ml-0 lg:w-[300px]">
    <BlogSidebar />
  </div>
</div>
            </main>

        </>
    )
}

export default SingleBlog;


const Data = [
    {
        id: '1',
        Date: ' April 6, 2021 ',
        title: ' How to Start a Custom T-Shirt Printing Business? '
    },
    {
        id: '2',
        Date: 'March 27, 2021',
        title: 'How to Advertise Custom t-shirts Online? '
    },
    {
        id: '3',
        Date: ' April 20, 2021',
        title: 'Importance of Custom T-Shirts '
    }

]

