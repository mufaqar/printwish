import PageBanner from '@/components/banner/page-banner'
import Product_Box from '@/components/product-widgets/product-box'
import { apiRequest } from '@/config/requests'
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const CategorySlug = ({ products }: any) => {
     const { query } = useRouter()
     return (
          <>
               <PageBanner title={query.category} />
               <div className='container mx-auto px-3 my-20 w-full'>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-5'>
                         {products?.map((item: any, idx: number) => {
                              const img = item?.images[0]?.src
                              return <Product_Box key={idx} data={item} image={img} />
                         })}
                    </div>
               </div>



          </>
     )
}

export default CategorySlug


export async function getStaticProps({ params }: any) {
     const slug = params.category
     const dataForCategory = {
          per_page: 100,
     };

     const caterogies = await apiRequest('POST', 'get-products-categories', dataForCategory)
     const getID = caterogies.products.find((item: any) => item.slug === slug)

     const dataForProducts = {
          per_page: 12,
          category: `${getID?.id}`,
     }

     const { products } = await apiRequest('POST', 'get-products', dataForProducts)
     return {
          props: {
               products: products,
          },
     };
}

export const getStaticPaths: GetStaticPaths = async () => {
     const paths: any = [];
     return {
          paths,
          fallback: 'blocking',
     };
}
