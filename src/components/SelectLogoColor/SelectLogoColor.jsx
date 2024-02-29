import { SettingsContext } from '@/context/global-context'
import React, { useContext } from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const SelectLogoColor = ({colorsInLogo, handleSelectedColor}) => {

     const { selectedVariants } = useContext(SettingsContext)
     

     return (
          <>
               <h5 className='text-xl font-semibold mt-6 text-accent pl-2 font-roboto'>Select number of colour</h5>
               <p className='pl-2'>How many colors your logo design is?</p>
               <section className='bg-gray-50 md:p-6 p-5 border-[1.5px] rounded-lg border-secondary mt-4'>
                    {
                         selectedVariants?.map((v, id) => (
                              <div key={id}>
                                   <h5 className={`text-xl font-semibold text-accent pl-2 font-roboto ${id !== 0 && 'mt-5'}`}>For Position {id + 1}</h5>
                                   <div key={id} className='flex items-center justify-center md:justify-start md:items-start flex-wrap mt-4 gap-2 p-0 '>
                                        {
                                             [1, 2, 3, 4, 5].map((item, idx) => (
                                                  <div className='relative' key={idx} >
                                                       <button onClick={() => handleSelectedColor(v, item)} className={` p-2 cursor-pointer px-4 pl-2 text-lg bg-white rounded-full border-[2px] ${colorsInLogo === item ? ' border-secondary' : 'border-gray-100 hover:border-main'}`}>
                                                            <span className='p-1 bg-black text-white px-3 mr-1 rounded-full '>{item}</span> {item === 5 ? 'Full Colours' : item > 1 ? 'Colours' : 'Colour'}
                                                       </button>
                                                       {colorsInLogo?.some((i) => i.variantName === v && i.colorInLogo === item)&& <FaCircleCheck className='text-secondary absolute right-1 -top-2 bg-white rounded-full text-xl' />}
                                                  </div>
                                             ))
                                        }
                                   </div>
                              </div>
                         ))}
               </section>
          </>
     )
}

export default SelectLogoColor