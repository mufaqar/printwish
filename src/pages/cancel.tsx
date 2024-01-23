import React from 'react'
import { TbBasketOff } from 'react-icons/tb'
import SeoMeta from './../components/seo/Seo'

const Cancel = () => {
  return (
    <>
      <SeoMeta title="Cancel Order | Printwish" description="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders." url="cancel" />

      <div className='flex flex-col items-center text-center my-20'>
        <TbBasketOff size={80} color="red" />
        Your Order is Cancelled
      </div>
    </>
  )
}

export default Cancel