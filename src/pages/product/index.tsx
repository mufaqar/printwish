import PageBanner from '@/components/banner/page-banner'
import Pagination from '@/components/pagination/pagination'
import Product_Box from '@/components/product-widgets/product-box'
import SeoMeta from '@/components/seo/Seo'
//import Product_Sidebar from '@/components/sidebar/product-sidebar'
import { apiRequest } from '@/config/requests'
import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

const ProductsPage = ({ products }: any) => {
    // console.log('products', products)
    return (
        <>
            <SeoMeta title="Products  | Printwish" description="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" url="product" />
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
                            {/* <Pagination perPage="30" endpoint="custom-post-api/v1/post-count" /> */}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProductsPage

export const getServerSideProps = async () => {
    const dataForProducts = {
        per_page: 30,
    };
    const { products } = await apiRequest('POST', 'get-products', dataForProducts)
    const AllProduct = await apiRequest('GET', 'get-products')
    return { props: { products } }
}
