import React from 'react'

const PageBanner = ({title}:any) => {
  return (
     <section className='py-16 bg-background'>
     <div className='max-w-screen-xl mx-auto px-4'>
         <h2 className='sm:text-4xl text-2xl font-semibold font-opensans text-accent uppercase text-center mb-5'>
         {title}
         </h2>
     </div>
 </section>
  )
}

export default PageBanner