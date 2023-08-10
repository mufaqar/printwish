import React, { useContext } from 'react'
import { designVarient } from '../../../public/data'
import Image from 'next/image'
import Slider from "react-slick";
import { SettingsContext } from '@/context/global-context';


const CustomiztionProduct = () => {

     const { selectedCustomizedLayout, setSelectedCustomizedLayout, selectedProduct, } = useContext(SettingsContext)

     const settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          responsive: [
               {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                    }
               },
               {
                 breakpoint: 1024,
                 settings: {
                   slidesToShow: 3,
                   slidesToScroll:1,
                 }
               },
               {
                 breakpoint: 600,
                 settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
                   initialSlide: 1
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

     const handleDesignPosition = ((designPosition:any) => {
          setSelectedCustomizedLayout(designPosition);
          // setSelectedProduct({...selectedProduct, designPosition})
     })

     return (
          <>
               <section className='mt-4 bg-background p-8 rounded-lg'>
                    <h5 className='text-xl font-semibold text-accent font-roboto'>Step 2 - Design Position:</h5>
                    <div className='mt-5'>
                         <Slider {...settings}>
                              {designVarient.map((item, idx) => {
                                   return (
                                        <button className='p-2' key={idx} onClick={() => handleDesignPosition(item.position)}>
                                             <div className={`bg-white flex flex-col jus items-center gap-2 border-[3px] rounded-lg p-3 ${selectedCustomizedLayout === item.position ? 'border-secondary' : 'border-transparent'}`}>
                                                  <h5 className="uppercase font-light font-roboto text-center">{item?.placement}</h5>
                                                  <Image src={item.image} alt={item.position} width={400} height={400} className='w-20' />
                                                  <h5 className="capitalize font-light font-roboto text-center">{item.position}</h5>
                                             </div>
                                        </button>
                                   )
                              })}
                         </Slider>
                    </div>
               </section>

          </>
     )
}

export default CustomiztionProduct



