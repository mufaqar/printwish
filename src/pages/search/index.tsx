import PageBanner from '@/components/banner/page-banner'
import Product_Box from '@/components/product-widgets/product-box'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { SEARCH_PRODUCTS, SEARCH_PRODUCTS_WITHOUT_CAREGORY } from '@/config/query'
import { client } from '@/config/client'
import { PiSmileySadThin } from 'react-icons/pi'

const Search = ({ products }: any) => {
  const { query } = useRouter()

  return (
    <>
      <PageBanner title={query.q} />
      <div className='container mx-auto px-3 my-20 w-full'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-5'>
          {
            products?.map((item: any, idx: number) => {
              const img = item?.featuredImage?.node?.mediaItemUrl
              return <Product_Box key={idx} data={item} image={img} />
            })
          }
        </div>
        {products.length <= 0 && <div className="text-gray-500 flex justify-center items-center w-full flex-col text-center">
          <PiSmileySadThin size={80} />
          Result Not Found!
        </div>}
      </div>
    </>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps<any> = async ({ query }) => {
  const { c, q } = query

  const { data } = await client.query({
    query: c === '' ? SEARCH_PRODUCTS_WITHOUT_CAREGORY : SEARCH_PRODUCTS,
    variables: {
      category: c,
      search: q,
    },
  })

  return { props: { products: data?.products?.nodes } }
}
