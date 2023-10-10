import React from 'react'
import { TbBasketOff } from 'react-icons/tb'

const Cancel = () => {
  return (
    <div className='flex flex-col items-center text-center my-20'>
      <TbBasketOff size={80} color="red"/>
      Your order are canceled!
    </div>
  )
}

export default Cancel