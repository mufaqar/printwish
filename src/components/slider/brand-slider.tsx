import { Logos, LogosType } from '@/const/logos'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";

const Brands_Slider = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='py-16'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='w-fit mx-auto mb-10'>
                    <h2 className='sm:text-4xl text-2xl font-semibold font-opensans text-accent uppercase text-center mb-5'>
                        BRANDS WE WORK WITH
                    </h2>
                    <p className='text-lg font-normal text-center text-accent font-roboto'>
                        Here are some household names that trust PrintWish to supply their printed clothing:
                    </p>
                </div>
                <div className='mt-10'>
                    <Slider {...settings}>
                        {Logos?.map((item: LogosType, idx: number) => {
                            return <div key={idx}>
                                <Image src={item.img} alt="image" width={200} height={200} className='mx-auto' />
                            </div>
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Brands_Slider