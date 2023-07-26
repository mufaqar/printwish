import Product_Box from '@/components/product-widgets/product-box'
import Product_Sidebar from '@/components/sidebar/product-sidebar'
import { Products, ProductsType } from '@/const/products'
import React from 'react'

const ProductsPage = () => {
    return (
        <main>
            <section className='py-16 bg-background'>
                <div className='max-w-screen-xl mx-auto px-4'>
                    <h2 className='sm:text-4xl text-2xl font-semibold font-opensans text-accent uppercase text-center mb-5'>
                        Products
                    </h2>
                </div>
            </section>
            <section className='py-16 '>
                <div className='max-w-screen-xl mx-auto px-4 flex md:flex-row flex-col gap-5'>
                    <div className='sm:w-1/4 w-full'>
                        <Product_Sidebar />
                    </div>
                    <div className='sm:w-3/4 w-full'>
                        <div className='grid sm:grid-cols-4 grid-cols-1 gap-5'>
                            {Products?.map((item: ProductsType, idx: number) => {
                                return <Product_Box key={idx} data={item} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductsPage