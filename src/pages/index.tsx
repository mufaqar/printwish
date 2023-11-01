import Main_Banner from '@/components/banner/main-banner'
import Brands_Slider from '@/components/slider/brand-slider'
import Reviews from '@/components/reviews/reviews'
import Category_Box from '@/components/product-widgets/category-box'
import { Categories, CategoryType } from '@/const/categories'
import Steps from '@/components/promotional-steps/steps'
import Product_Slider from '@/components/product-widgets/product-slider'
import { GetServerSideProps, GetStaticProps } from 'next'
import { apiRequest } from '@/config/requests'
import Head from 'next/head'
import OfferModelBox from '@/components/UI/modelBox/Offer'
import { useEffect, useState } from 'react'


export default function Home(props: any) {
  // const count = useSelector((state:any) => state.AddToCart.value)
  // const dispatch = useDispatch()
  const [openOfferModel, setOpenOfferModel] = useState<boolean>(false)
  useEffect(()=>{
    setTimeout(() => {
      setOpenOfferModel(true)
    }, 3000);
  },[])
  return (
    <>
      <Head>
        <title>Cheap Bulk Custom T-Shirt Printing in London, UK - Wholesale Tshirt Printing</title>
        <meta name="description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
        <link rel="canonical" href="https://www.printwish.co.uk/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
        <meta property="og:url" content="https://printwish.co.uk/" />
        <meta property="og:site_name" content="PrintWish T-Shirt Printing" />
        <meta property="article:publisher" content="https://www.facebook.com/printwishuk" />
        <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
        <meta property="og:image" content="https://backend.printwish.co.uk/wp-content/uploads/2023/10/trust.png" />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="467" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrintwishUk" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="57 minutes" />
        <meta name="google-site-verification" content="OU1pmCJ6gWoPeRZs1_8ycnWKRaixALVrLMHVxyBeVUE" />
        <meta  name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <Main_Banner />
      <Brands_Slider />
      <Reviews />
      <section className='pb-10'>
        <div className='max-w-screen-xl mx-auto'>
          <h2 className='sm:text-4xl text-2xl font-semibold font-opensans text-accent uppercase text-center mb-5'>
            BEST SELLING CATEGORIES
          </h2>
          <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-7 mt-10 p-4 md:p-8 bg-gray-100'>
            {Categories?.map((item: CategoryType, idx: number) => {
              return <Category_Box key={idx} data={item} />
            })}
          </div>
        </div>
      </section>
      <Steps />
      {
        props ? <Product_Slider products={props?.products} /> : <p>loading...</p>
      }
      <section className='py-6 pt-0 relative'>
        <div className='max-w-screen-xl mx-auto px-4'>
          <div className='w-fit mx-auto'>
            <h2 className='sm:text-4xl text-2xl font-semibold font-opensans text-accent uppercase text-center mb-5'>
              Know About PrintWish UK
            </h2>
            <p className='text-base font-normal text-accent text-center font-roboto'>
              Know About PrintWish UK
              Printwish UK is a leading custom apparel provider and it is always here to inspire you with great customized things like T-shirts, tote bags, hoodies, sweatshirts, Hi-vis, apron, Wholesale Tote Bags, and many more. The customized t-shirt trend is very popular among both teenagers in school and celebrities these shirts having a solid grip on the young fashion world. So if you are looking for a classy, customized T-shirt which can enhance your personality then you are in the right place because printwish UK customizes T-shirts as you like. Printwish t-shirt printing is better than others and you can also choose every element for your custom t-shirts like the color, the words, the images that will be printed on the shirts, and many more.
            </p>
          </div>
        </div>
      </section>
      <Reviews />
      {openOfferModel && <OfferModelBox/>}
      
    </>
  )
}




export const getStaticProps = async () => {
  const dataForProducts = {
    per_page: 10,
  };

  const { products } = await apiRequest('POST', 'get-products', dataForProducts)
  return { props: { products } }
}



