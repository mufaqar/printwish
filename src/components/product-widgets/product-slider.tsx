import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight, } from 'react-icons/bs';
import Product_Box from './product-box';
import { Products, ProductsType } from '@/const/products';

const Product_Slider = ({products}:any) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const slider = React.useRef<Slider>(null);
    return (
        <section className='py-16 relative'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='w-fit mx-auto mb-10'>
                    <h2 className='sm:text-4xl text-2xl font-semibold font-opensans text-accent uppercase text-center mb-5'>
                        FEATURED PRODUCTS
                    </h2>
                </div>
                <div className='mt-24 relative'>
                    <Slider ref={slider} {...settings}>
                        {products?.map((item:any, idx: number) => {
                            const img = item?.images[0]?.src
                            return <Product_Box key={idx} data={item} image={img} />
                        })}
                    </Slider>
                    <button className="absolute -top-10 right-20 transform -translate-y-1/2 bg-primary rounded-lg hover:bg-secondary text-white p-3 text-2xl " onClick={() => slider?.current?.slickPrev()}><BsArrowLeft /></button>
                    <button className="absolute -top-10 right-4 transform -translate-y-1/2 bg-primary rounded-lg hover:bg-secondary text-white p-3 text-2xl " onClick={() => slider?.current?.slickNext()}><BsArrowRight /></button>
                </div>
            </div>
        </section>
    )
}

export default Product_Slider