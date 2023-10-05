import { SettingsContext } from '@/context/global-context'
import { clearAll } from '@/features/AddToCart'
import useOrderHandler from '@/hooks/useOrderHandler'
import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Success = () => {
  const dispatch = useDispatch()
  const { allCartItems } = useContext(SettingsContext)
  const { OrderSubmit } = useOrderHandler()

  const hC = () =>{
    //     OrderSubmit(allCartItems)
    // dispatch(clearAll())
  }
  hC()

  return (
    <div>Success</div>
  )
}

export default Success