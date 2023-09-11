import React from 'react'

const PageBanner = ({ title, category }: any) => {
  const img = category?.image?.src.length > 5 ? category?.image?.src : "/images/merge.png"
  return (
    <section className='p-3 md:p-0'>
      <div className='py-10 md:py-16 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${ img })` }}>
        <div className='max-w-screen-xl mx-auto px-4 text-white'>
          <h2 className='sm:text-4xl text-2xl font-semibold font-opensans uppercase mb-5'>
            {title}
          </h2>
          <p>{category?.description}</p>
        </div>
      </div>
    </section>
  )
}

export default PageBanner