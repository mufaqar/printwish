import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward, } from 'react-icons/io';
import { Feedback, FeedbackType } from '@/const/feedback';

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
        <section className='py-5 pb-16 max-w-screen-xl mx-auto px-4 relative'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='w-fit mx-auto '>
                    <h2 className='sm:text-4xl hidden md:block text-2xl font-semibold font-opensans text-accent uppercase text-center mb-5'>
                        WHAT OUR CLIENTS SAY ABOUT US
                    </h2>
                    <Image src="/images/reviews.webp" alt='reviews' height={300} width={700} className='mx-auto' />
                </div>
                <div className='relative mt-7 md:mt-24'>
                    <Slider ref={slider} {...settings}>
                    {Feedback?.map((item: FeedbackType, idx: number) => {
                            return <div key={idx}>
                                <Image src={item?.img} alt="image" width={500} height={200} className='mx-auto' />
                            </div>
                        })}
                    </Slider>
                    <button className="absolute -left-10 top-1/2 -mt-6 transform -translate-y-1/2 rounded-lg  text-secondary p-3 text-3xl " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                    <button className="absolute  -right-10 top-1/2 -mt-6 transform -translate-y-1/2 rounded-lg  text-secondary p-3 text-3xl " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
                </div>
            </div>
        </section>
    )
}

export default Reviews