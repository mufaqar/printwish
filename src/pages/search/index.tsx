import PageBanner from '@/components/banner/page-banner'
import Product_Box from '@/components/product-widgets/product-box'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { SEARCH_PRODUCTS, SEARCH_PRODUCTS_WITHOUT_CAREGORY } from '@/config/query'
import { client } from '@/config/client'
import { PiSmileySadThin } from 'react-icons/pi'
import Head from 'next/head'

const Search = ({ products }: any) => {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>{query.q} | Printwish</title>
        <meta name="description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
        <link rel="canonical" href={`https://printwish.co.uk/${query.q}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Search" />
        <meta property="og:description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
        <meta property="og:url" content={`https://printwish.co.uk/${query.q}`} />
        <meta property="og:site_name" content="PrintWish T-Shirt Printing" />
        <meta property="article:publisher" content="https://www.facebook.com/printwishuk" />
        <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
        <meta property="og:image" content="https://printwish.co.uk/wp-content/uploads/2020/03/DTG-Printing-Image.-.jpg" />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="467" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrintwishUk" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="57 minutes" />
      </Head>
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
