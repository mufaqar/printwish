import PageBanner from '@/components/banner/page-banner'
import Product_Box from '@/components/product-widgets/product-box'
import { client } from '@/config/client'
import { GET_PRODUCTS_BY_DEAL } from '@/config/query'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductsPage = ({ products }: any) => {
    return (
        <>
            <Head>
                <title>Deals | Printwish</title>
                <meta name="description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
                <link rel="canonical" href="https://www.printwish.co.uk/deals" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="deals" />
                <meta property="og:description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
                <meta property="og:url" content="https://printwish.co.uk/deals" />
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
                <PageBanner title="Deals" />
                <section className='py-16 '>
                    <div className='max-w-screen-xl mx-auto px-4 flex md:flex-row flex-col gap-5'>
                        {/* <div className='sm:w-1/4 w-full'>
                        <Product_Sidebar />
                    </div> */}
                        <div className=' w-full'>
                            <div className='grid md:grid-cols-2 gap-1 sm:gap-2 md:gap-4'>
                                {products?.map((item: any, idx: number) => {
                                    const img = item?.featuredImage?.node?.mediaItemUrl
                                    return (
                                        <div className='p-1 border border-gray-200 pb-4'>
                                            <Link href={`/deals/${item?.slug}`} className='border-b-[1px] border-gray-100 p-2 md:h-[300px] cursor-pointer mb-2 flex flex-col justify-center items-center group'>
                                                <Image src={img} alt={item?.title} width={200} height={200} className='object-contain h-[180px] transition-all duration-200 ease-in-out w-full mb-3 group-hover:scale-95 md:h-full' />
                                            </Link>
                                            <div className='flex flex-col justify-center items-center'>
                                                <h5 className="min-h-[40px]">
                                                    <Link href={`/deals/${item?.slug}`} className='text-sm font-bold flex font-roboto text-accent hover:text-secondary'>
                                                        <span className='text-center'>{item?.title}</span>
                                                    </Link>
                                                </h5>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProductsPage

export const getServerSideProps = async () => {
    const response = await client.query({
        query: GET_PRODUCTS_BY_DEAL,
    });

    const products = response?.data?.deals.nodes[0].products.nodes;

    return { props: { products } }
}
