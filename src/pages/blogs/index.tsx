import React from 'react'
import Bloglay from '@/components/blog-layout/bloglay'
import Blogsli from '@/components/blog-sidbar/blogsli'
import About from '@/components/AboutUs/about'
import Deliver from '@/components/Delivery/deliver'
import Contact from '@/components/contactus/Contact'
import Read from '@/components/Readmore/read'
const Blogs = () => {
  return (
    <>
    
    <div className=" mx-auto items-center lg:flex  ">
    <Bloglay/>
    <Blogsli/>
    </div>
    <About/>
    <Deliver/>
    <Contact/>
    <Read/>
    </>
  )
}
export default Blogs