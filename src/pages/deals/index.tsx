import PageBanner from '@/components/banner/page-banner'
import Product_Box from '@/components/product-widgets/product-box'
import SeoMeta from '@/components/seo/Seo'
import { client } from '@/config/client'
import { GET_PRODUCTS_BY_DEAL } from '@/config/query'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductsPage = ({ products }: any) => {
    return (
        <>
         <SeoMeta
                title="Checkout | Printwish"
                description="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.9"
                url="deals"
            />
           
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
                                        <div className='p-1 border border-gray-200 pb-4' key={idx}>
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
