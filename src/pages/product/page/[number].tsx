import PageBanner from '@/components/banner/page-banner'
import Pagination from '@/components/pagination/pagination'
import Product_Box from '@/components/product-widgets/product-box'
import Product_Sidebar from '@/components/sidebar/product-sidebar'
import { apiRequest } from '@/config/requests'
import { GetServerSideProps } from 'next'
import React from 'react'

const PageNumber = ({products}:any) => {
    return (
        <main>
            <PageBanner title="Products" />
            <section className='py-16 '>
                <div className='max-w-screen-xl mx-auto px-4 flex md:flex-row flex-col gap-5'>
                    {/* <div className='sm:w-1/4 w-full'>
                        <Product_Sidebar />
                    </div> */}
                    <div className=' w-full'> {/* sm:w-3/4 */}
                        <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-cols-1 gap-5'>
                            {products?.map((item:any, idx: number) => {
                                const img = item?.images[0]?.src
                                return <Product_Box key={idx} data={item} image={img}/>
                            })}
                        </div>
                        <Pagination/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PageNumber


export const getServerSideProps: GetServerSideProps<any> = async ({params}) => {
    const pagenumber = params?.number
    const dataForProducts = {
      per_page: 12,
      page : pagenumber
    };
    const {products} =  await apiRequest('POST', 'get-products', dataForProducts)    
    
    return { props: { products } }
  }
  