import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux'
import Main_Banner from '@/components/banner/main-banner'
import Brands_Slider from '@/components/slider/brand-slider'
import Reviews from '@/components/reviews/reviews'
import Category_Box from '@/components/product-widgets/category-box'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const count = useSelector((state:any) => state.AddToCart.value)
  // const dispatch = useDispatch()

  return (
    <>
      <Main_Banner />
      <Brands_Slider />
      <Reviews />
      <section className='py-16'>
        <div className='max-w-screen-xl mx-auto px-4'>
          <h2 className='sm:text-4xl text-2xl font-semibold text-accent uppercase text-center mb-5'>
            BEST SELLING CATEGORIES
          </h2>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-7 mt-10'>
            <Category_Box />
            <Category_Box />
            <Category_Box />
            <Category_Box />
            <Category_Box />
            <Category_Box />
          </div>
        </div>
      </section>
    </>
  )
}

