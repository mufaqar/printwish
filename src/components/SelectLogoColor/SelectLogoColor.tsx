import { SettingsContext } from '@/context/global-context'
import React, { useContext } from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const SelectLogoColor = () => {
     const { colorsInLogo, setColorsInLogo } = useContext(SettingsContext)
     return (
          <section className='bg-gray-50 md:p-8 p-5 border-[1.5px] rounded-lg border-secondary mt-4'>
               <h5 className='text-xl font-semibold text-accent pl-2 font-roboto'>Step 3 - Select number of color</h5>
               <p className='pl-2'>How many colors your logo design is?</p>
               <div className='flex flex-wrap mt-4 gap-2'>
                    {
                         [1, 2, 3, 4, 5].map((item: any, idx: number) => (
                              <div className='relative' key={idx} >
                                   <button onClick={() => {setColorsInLogo(item); sessionStorage.setItem('colorInLogo', item)}} className={`p-2.5 cursor-pointer  px-8 pl-2 text-lg bg-white rounded-full border-[2px] ${colorsInLogo === item ? ' border-secondary' : 'border-gray-100 hover:border-main'}`}>
                                        <span className='p-1 bg-black text-white px-3 mr  -1 rounded-full'>{item}</span> {item === 5 ? 'Fill Colors Print' : item > 2 ? 'Colors' : 'Color'}
                                   </button>
                                   {colorsInLogo === item && <FaCircleCheck className='text-secondary absolute right-1 -top-2 bg-white rounded-full text-xl' />}
                              </div>
                         ))
                    }
               </div>

          </section>
     )
}

export default SelectLogoColor