import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux'
import Main_Banner from '@/components/banner/main-banner'
import Brands_Slider from '@/components/slider/brand-slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const count = useSelector((state:any) => state.AddToCart.value)
  // const dispatch = useDispatch()

  return (
    <>
      <Main_Banner />
      <Brands_Slider />
    </>
  )
}

