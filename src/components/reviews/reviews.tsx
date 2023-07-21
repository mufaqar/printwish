import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';

const Reviews = () => {
    const settings = {
        dots: true,
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
    return (
        <section className='py-16'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='w-fit mx-auto'>
                    <Image src="/images/reviews.webp" alt='reviews' height={300} width={700} className='mx-auto' />
                </div>
                <div className='mt-16'>
                    <Slider {...settings}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item: any, idx: number) => {
                            return <div key={idx}>
                                <Image src="/images/feedback1.webp" alt="image" width={500} height={200} className='mx-auto' />
                            </div>
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Reviews