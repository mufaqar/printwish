import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const count = useSelector((state:any) => state.AddToCart.value)
  // const dispatch = useDispatch()

  return (
    <>
      <p>Home</p>
    </>
  )
}

