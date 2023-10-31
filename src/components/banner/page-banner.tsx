import React from 'react'
import { points } from './deals-banner'
import { TiTick } from 'react-icons/ti'

const PageBanner = ({ title, category, slug }: any) => {
  const img = category?.image?.src.length > 5 ? category?.image?.src : "/images/merge.png"
  return (
    <section>
      <div className='py-6 relative md:py-16 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 36,63,0.9), rgba(0, 36,63,0.9)), url(${img})` }}>
        <div className='container mx-auto px-4  text-white'>
          <h2 className='sm:text-4xl text-2xl font-bold font-opensans capitalize mb-2'>
            {title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: category?.description }}
          />
        </div>
        {/* <div className='bg-black/20 absolute inset-0'/> */}
        {
          slug === "custom-t-shirt-printing-cheap-t-shirt-printing" &&
          <ul className="container mx-auto px-4  text-white mt-4">
            {
              points.map((item, idx) => (
                <li className='flex items-center my-2' key={idx}>
                  <TiTick className="text-secondary text-2xl" />
                  <span>{item}</span>
                </li>
              ))
            }
          </ul>
        }
      </div>
    </section>
  )
}

export default PageBanner