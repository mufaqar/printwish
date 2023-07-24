import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight, } from 'react-icons/bs';

const Reviews = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
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
                    <Image src="/images/reviews.webp" alt='reviews' height={300} width={700} className='mx-auto' />
                </div>
                <div className='mt-24'>
                    <Slider ref={slider} {...settings}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item: any, idx: number) => {
                            return <div key={idx}>
                                <Image src="/images/feedback1.webp" alt="image" width={500} height={200} className='mx-auto' />
                            </div>
                        })}
                    </Slider>
                    <button className="absolute top-1/2 right-20 transform -translate-y-1/2 bg-primary rounded-lg hover:bg-secondary text-white p-3 text-2xl " onClick={() => slider?.current?.slickPrev()}><BsArrowLeft /></button>
                    <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary rounded-lg hover:bg-secondary text-white p-3 text-2xl " onClick={() => slider?.current?.slickNext()}><BsArrowRight /></button>
                </div>
            </div>
        </section>
    )
}

export default Reviews