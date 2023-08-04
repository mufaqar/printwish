import PageBanner from '@/components/banner/page-banner'
import Product_Box from '@/components/product-widgets/product-box'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { SEARCH_PRODUCTS, SEARCH_PRODUCTS_WITHOUT_CAREGORY} from '@/config/query'
import {client} from '@/config/client'


const Search = ({ products }: any) => {
  const { query } = useRouter()

  return (
    <>
      <PageBanner title={query.q} />
      <div className='container mx-auto px-3 my-20 w-full'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-5'>
          {products?.map((item: any, idx: number) => {
            const img = item?.featuredImage?.node?.mediaItemUrl
            return <Product_Box key={idx} data={item} image={img} />
          })}
        </div>
      </div>
    </>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps<any> = async ({query}) => {
  const {c, q} = query
  
    const {data} = await client.query({
      query: c === '' ? SEARCH_PRODUCTS_WITHOUT_CAREGORY : SEARCH_PRODUCTS,
      variables: {
        category: c,
        search: q,
      },
    })

  return { props: { products: data?.products?.nodes } }
}
