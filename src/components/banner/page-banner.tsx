import React from 'react'

const PageBanner = ({ title, category }: any) => {
  return (
    <section className='p-3'>
      <div className='py-16 bg-background bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${category?.image?.src})` }}>
        <div className='max-w-screen-xl mx-auto px-4'>
          <h2 className='sm:text-4xl text-2xl font-semibold font-opensans text-black uppercase mb-5'>
            {title}
          </h2>
          <p>{category?.description}</p>
        </div>
      </div>
    </section>
  )
}

export default PageBanner