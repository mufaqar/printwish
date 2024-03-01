import React, { useContext, useState } from 'react'
import { designVarient } from '../../../public/data'
import Image from 'next/image'
import { SettingsContext } from '@/context/global-context';
import { BsCheckLg } from "react-icons/bs";


const CustomiztionProduct = ({ number }: any) => {

     const { selectedVariants, setSelectedVariants } = useContext(SettingsContext);
     
     const handleDesignPosition = (designPosition: string) => {
          // Toggle the selection of the variant
          if (selectedVariants.includes(designPosition)) {
               setSelectedVariants(selectedVariants.filter((item:any) => item !== designPosition));
          } else {
               setSelectedVariants([...selectedVariants, designPosition]);
          }
     };

     return (
          <>
               <section className='mt-4 rounded-lg'>
                    <div className='bg-gray-200 px-4 py-6 border border-black/60 rounded'>
                    <h5 className='text-xl font-semibold text-accent pl-2 font-roboto  '>Step 2 - Where must we print your artwork?</h5>
                    <p className='pl-2'>T-Shirt Print Area</p>
                    </div>
                    <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6'>
                         {designVarient.map((item, idx) => {
                              return (
                                   <button className='p-1 relative' key={idx} onClick={() => handleDesignPosition(item.position)}>
                                        <div className={` bg-white flex flex-col items-center gap-2 border-[3px] rounded-lg p-1 py-2 ${selectedVariants?.includes(item.position) ? 'border-secondary' : 'border-transparent'}`}>
                                             <h5 className="uppercase font-light font-roboto text-center">{item?.placement}</h5>
                                             <Image src={item.image} alt={item.position} width={400} height={400} className='w-2/3' />
                                             <h5 className="capitalize font-light font-roboto  text-center">{item.position}</h5>
                                        </div>
                                        {selectedVariants?.includes(item.position) && <BsCheckLg className='absolute top-3 right-3 bg-secondary text-white p-[2px] text-2xl rounded-full' />}
                                   </button>
                              )
                         })}
                    </div>

               </section>

          </>
     )
}

export default CustomiztionProduct



