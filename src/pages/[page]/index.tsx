import PageBanner from '@/components/banner/page-banner'
import Product_Box from '@/components/product-widgets/product-box'
import { apiRequest } from '@/config/requests'
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Location from '../location'
import { client } from '@/config/client'
import { LOCATION_PAGE } from '@/config/query'

const CategorySlug = ({ products, slug, pages }: any) => {
     console.log("🚀 ~ file: index.tsx:12 ~ CategorySlug ~ pages:", pages)
     const { query } = useRouter()
     return (
          <>
               {
                    slug?.includes("t-shirt-printing") ? <Location /> : <>
                         <PageBanner title={query.page} />
                         <div className='container mx-auto px-3 my-20 w-full'>
                              <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-5'>
                                   {products?.map((item: any, idx: number) => {
                                        const img = item?.images[0]?.src
                                        return <Product_Box key={idx} data={item} image={img} />
                                   })}
                              </div>
                         </div>
                    </> 
               }
          </>

     )
}

export default CategorySlug


export async function getStaticProps({ params }: any) {
     const slug = params.page
     if(slug.includes("t-shirt-printing")){
          const response = await client.query({
               query: LOCATION_PAGE,
               variables: {
                    id: `/locations/${slug}/`,
               },
          });
          const pages = response?.data;
     
          const dataForLocationPageProducts = {
               per_page: 30,
          };
          const res = await apiRequest('POST', 'get-products', dataForLocationPageProducts)

          return {
               props: {
                    productsForLocationPage: res.products,
                    slug,
                    pages
               },
          };
     }
     
     
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
               slug,
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
