import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward, } from 'react-icons/io';

const GallerySlider = ({gallery}) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
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
    const slider = React.useRef(null);
    return (
        <section className='py-5 container mx-auto px-4 relative'>
            <div className='relative'>
                <Slider ref={slider} {...settings}>
                {gallery?.map((item, idx) => {
                        return <div key={idx} className='p-2'>
                            <Image src={item?.image?.image?.mediaItemUrl} alt="image" width={500} height={200} className='mx-auto' />
                        </div>
                    })}
                </Slider>
                <button className="absolute -left-10 top-1/2  transform -translate-y-1/2 rounded-lg  text-secondary p-3 text-3xl " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                <button className="absolute  -right-10 top-1/2  transform -translate-y-1/2 rounded-lg  text-secondary p-3 text-3xl " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
            </div>
        </section>
    )
}

export default GallerySlider