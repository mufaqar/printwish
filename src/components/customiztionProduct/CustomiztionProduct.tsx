import React, { useContext, useState } from 'react'
import { TShirtPrint, TshirtSwitch, designVarient } from '../../../public/data'
import Image from 'next/image'
import Slider from "react-slick";
import { SettingsContext } from '@/context/global-context';


const CustomiztionProduct = () => {
     const { setSelectedCustomizedLayout, setNameAndNumber } = useContext(SettingsContext)
     const [CustomizationType, setCustomizationType] = useState('')
     const [nameAndNumberState, setNameAndNumberState] = useState<any>(false)

     return (
          <>
               <section className='mt-4 bg-background p-8  rounded-lg'>
                    <h6 className='text-xl font-light text-secondary'>CUSTOMISATION:</h6>
                    <h5 className='text-xl font-semibold text-accent font-roboto mt-3'>Step 3 - Select the type of customisation:</h5>
                    <div className='mt-5 md:flex item-center gap-6'>
                         <button onClick={() => setCustomizationType('Print')} className={`bg-white flex items-center gap-3 p-2 hover:scale-105 active:scale-100 w-full md:w-60 text-xl rounded-full border-[2px] ${CustomizationType === 'Print' ? 'border-secondary' : ' border-transparent'}`}>
                              <figure className='bg-accent p-2 rounded-full'>
                                   <Image src={TShirtPrint} width={100} height={100} className='w-5 h-5' alt="print" />
                              </figure>
                              <span>Print</span>
                         </button>
                         <button onClick={() => { setCustomizationType('Embroidery'); setNameAndNumberState(false); setNameAndNumber('') }} className={`bg-white flex items-center gap-3 p-2 hover:scale-105 active:scale-100 mt-3 md:mt-0 w-full md:w-60 text-xl border-[2px] rounded-full ${CustomizationType === 'Embroidery' ? 'border-secondary' : ' border-transparent'}`}>
                              <figure className='bg-accent p-2 rounded-full'>
                                   <Image src={TshirtSwitch} width={100} height={100} className='w-5 h-5' alt="print" />
                              </figure>
                              <span>Embroidery</span>
                         </button>
                    </div>
               </section>
               {CustomizationType.length > 1 &&
                    <section className='mt-4 bg-background p-8 rounded-lg'>
                         <div className='flex item-center justify-between'>
                              <h5 className='text-xl font-semibold text-accent font-roboto'>Step 4 - Design Position:</h5>
                              {
                                   CustomizationType === 'Print' && <div className='flex items-center gap-2'>
                                        <span className="ml-3 font-medium text-gray-900 dark:text-gray-300">Names & Numbers</span>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                             <input type="checkbox" value={nameAndNumberState} onChange={() => { setNameAndNumberState(!nameAndNumberState); setSelectedCustomizedLayout(''); setNameAndNumber('') }} className="sr-only peer" />
                                             <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                   </div>
                              }
                         </div>
                         {
                              nameAndNumberState ? <NameAndNumber /> : <DesignPosition />
                         }
                    </section>
               }
          </>
     )
}

export default CustomiztionProduct



export const NameAndNumber = () => {
     const { nameAndNumber, setNameAndNumber } = useContext(SettingsContext)
     return (
          <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5'>
               <button className='p-2' onClick={()=>setNameAndNumber('Names Numbers')}>
                    <div className={`bg-white flex flex-col jus items-center gap-2 border-[3px] rounded-lg p-3 ${nameAndNumber === 'Names Numbers' ? 'border-secondary' : 'border-transparent'}`}>
                         <h5 className="uppercase font-light font-roboto text-center">Back</h5>
                         <Image src={`/images/tshirt-varients/names-numbers.png`} alt={`names-numbers`} width={400} height={400} className='w-20' />
                         <h5 className="capitalize font-light font-roboto text-center">Names Numbers</h5>
                    </div>
               </button>
          </section>
     )
}

const DesignPosition = () => {
     const { selectedCustomizedLayout, setSelectedCustomizedLayout } = useContext(SettingsContext)

     const settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
     };


     return (
          <div className='mt-5'>
               <Slider {...settings}>
                    {designVarient.map((item, idx) => {
                         return (
                              <button className='p-2' key={idx} onClick={() => setSelectedCustomizedLayout(item.position)}>
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

     )
}


