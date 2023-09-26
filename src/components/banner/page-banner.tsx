import React from 'react'

const PageBanner = ({ title, category }: any) => {
  const img = category?.image?.src.length > 5 ? category?.image?.src : "/images/merge.png"
  return (
    <section>
      <div className='py-6 relative md:py-16 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${img})` }}>
        <div className='container mx-auto px-4  text-white'>
          <h2 className='sm:text-4xl text-2xl font-bold font-opensans capitalize mb-2'>
            {title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: category?.description }}
          />
        </div>
        {/* <div className='bg-black/20 absolute inset-0'/> */}
      </div>
    </section>
  )
}

export default PageBanner