import React from 'react'

function Contact() {
  return (
    <>
    <main className='items-center mx-auto max-w-screen-xl px-6 md:px-6 py-2.5'>
<div className="lg:flex justify-between ">
<div className="txt">
<form action="#" className="space-y-3">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm lg:w-[700px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 w-96">Your message</label>
              <textarea id="message" rows={6} className="block p-2.5 w-full h-16 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-950 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
</div>
 <div className="cont mb-[20px] ">
<div className="img cursor-pointer lg:mr-5 mt-11">
    <img className='w-full h-[128px] ' src="images/Review.png" alt="" />
    </div>
    </div>
</div>
<div className="text-center cursor-pointer mb-20">
    <h4 className='text-[16px] font-[700] text-[#0188CC] leading-[19px] pb-1'>Get in touch</h4>
<h4 className='lg:w-[450px] m-auto text-[#000000] text-[16px] leading-[27px] pb-1'><strong>At PrintWish we want to provide you with awesome customer service. Please use the following methods of contact so we can attend your needs with the attention you deserve</strong></h4>
   <h4 className='text-[16px] font-[700] text-[#0188CC] leading-[19px] pb-2'>Contact Info</h4>
   <h4 className='text-[16px] font-[700] text-[#0188CC] leading-[19px] pb-[5px]'>Phone</h4>
   <p className='text-[14px] font-[700] pb-[5px]'><a className='hover:underline' href="">0800 051 0821</a></p>
   <h4 className='text-[16px] font-[700] text-[#0188CC] leading-[19px] pb-[5px]'>Email:</h4>
   <p className='text-[14px] font-[700] pb-[10px]'><a className='hover:underline' href="">enquiries@printwish.co.uk</a></p>
   <h4 className='text-[16px] font-[700] text-[#0188CC] leading-[19px] pb-[10px]'>The Office</h4>
   <h4 className='pb-1 text-[14px] '><strong>PrintWish</strong></h4>
   <p className='text-[14px]'><strong>6th Floor, City Gate East, Tollhouse Hill, Nottingham, NG1 5FS</strong>  </p>
    </div>

    </main>
    </>
  )
}

export default Contact