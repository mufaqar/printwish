import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux'
import Main_Banner from '@/components/banner/main-banner'
import Brands_Slider from '@/components/slider/brand-slider'
import Reviews from '@/components/reviews/reviews'
import Category_Box from '@/components/product-widgets/category-box'
import { Categories, CategoryType } from '@/const/categories'
import Link from 'next/link'
import Steps from '@/components/promotional-steps/steps'
import Product_Slider from '@/components/product-widgets/product-slider'

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
            {Categories?.map((item: CategoryType, idx: number) => {
              return <Category_Box key={idx} data={item} />
            })}
          </div>
        </div>
      </section>
      <Steps />
      <Product_Slider />
      <section className='py-16 relative'>
        <div className='max-w-screen-xl mx-auto px-4'>
          <div className='w-fit mx-auto'>
            <h2 className='sm:text-4xl text-2xl font-semibold text-accent uppercase text-center mb-5'>
              Know About PrintWish UK
            </h2>
            <p className='text-base font-normal text-accent text-center '>
              Know About PrintWish UK
              Printwish UK is a leading custom apparel provider and it is always here to inspire you with great customized things like T-shirts, tote bags, hoodies, sweatshirts, Hi-vis, apron, Wholesale Tote Bags, and many more. The customized t-shirt trend is very popular among both teenagers in school and celebrities these shirts having a solid grip on the young fashion world. So if you are looking for a classy, customized T-shirt which can enhance your personality then you are in the right place because printwish UK customizes T-shirts as you like. Printwish t-shirt printing is better than others and you can also choose every element for your custom t-shirts like the color, the words, the images that will be printed on the shirts, and many more.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

