import PageBanner from '@/components/banner/page-banner'
import Pagination from '@/components/pagination/pagination'
import Product_Box from '@/components/product-widgets/product-box'
import Product_Sidebar from '@/components/sidebar/product-sidebar'
import { apiRequest } from '@/config/requests'
import { GetServerSideProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const PageNumber = ({ products }: any) => {
    const {query} = useRouter()
    console.log("🚀 ~ file: [number].tsx:13 ~ PageNumber ~ query:", query)
    return (
        <>
            <Head>
                <title>{query.number} | Printwish</title>
                <meta name="description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
                <link rel="canonical" href={`https://www.printwish.co.uk/product/page/${query.number}`} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home" />
                <meta property="og:description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
                <meta property="og:url" content={`https://printwish.co.uk/product/page/${query.number}`} />
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
            </Head>
            <main>
                <PageBanner title="Products" />
                <section className='py-16 '>
                    <div className='max-w-screen-xl mx-auto px-4 flex md:flex-row flex-col gap-5'>
                        {/* <div className='sm:w-1/4 w-full'>
                        <Product_Sidebar />
                    </div> */}
                        <div className=' w-full'> {/* sm:w-3/4 */}
                            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-1 sm:gap-2 md:gap-4'>
                                {products?.map((item: any, idx: number) => {
                                    const img = item?.images[0]?.src
                                    return <Product_Box key={idx} data={item} image={img} />
                                })}
                            </div>
                            <Pagination perPage="30" endpoint="custom-post-api/v1/post-count" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PageNumber


export const getStaticProps = async ({ params }: any) => {
    const pagenumber = params?.number
    const dataForProducts = {
        per_page: 30,
        page: pagenumber
    };
    const { products } = await apiRequest('POST', 'get-products', dataForProducts)

    return { props: { products } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: any = [];
    return {
        paths,
        fallback: 'blocking',
    };

}
