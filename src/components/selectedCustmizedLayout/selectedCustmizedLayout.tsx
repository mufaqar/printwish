import { SettingsContext } from '@/context/global-context'
import { useWindowSize } from '@/hooks/useWindowSize'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { MdDelete, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const SelectedCustmizedLayout = ({ item, id }: any) => {
     
     const { selectedProduct, setSelectedProduct } = useContext(SettingsContext)

     const [details, setDetails] = useState(false)
     const windowSize = useWindowSize();
     useEffect(() => {
          if (windowSize.innerWidth > 768) {
               setDetails(true)
          } else {
               setDetails(false)
          }
     }, [windowSize])

     // here delete customization from the selectedProduct.designArtWork 
     const deleteCustomization = ({ id, uploadImage }: any) => {
          if (uploadImage) {
               const destractureDesignArt = { ...selectedProduct }
               const getDesignArtWork = [...destractureDesignArt.designArtWork]
               // remove Item from designArtWork
               const remaningItem = getDesignArtWork.filter((item) => item.id !== id)
               setSelectedProduct({ ...selectedProduct, designArtWork: remaningItem })
          } else {
               const destractureTextCreator = [...selectedProduct.textCreator]
               const remaningItem = destractureTextCreator?.filter((item:any) => item.id !== id)
               setSelectedProduct({ ...selectedProduct, textCreator: remaningItem })
          }
     }

     return (
          <section className='bg-gray-50 md:p-8 p-5 border-[3px] rounded-lg border-secondary mt-4'>
               <div className='flex flex-col-reverse md:flex-row justify-between gap-4'>
                    <h4 className='text-xl uppercase font-opensans'>CUSTOMISATION {id} - <span className='text-secondary'>{item?.customisationName}</span></h4>
                    <div className='flex justify-end'>
                         <button onClick={() => deleteCustomization({ id: item?.id, uploadImage: item?.imageURL?.length > 4 })} className='flex items-center text-xl hover:text-secondary'><MdDelete /> Delete</button>
                    </div>
               </div>
               <button onClick={() => setDetails(!details)} className='flex md:hidden items-center mt-4 text-secondary'>View detail
                    {details ? <MdKeyboardArrowUp size={25} /> : <MdKeyboardArrowDown size={25} />}</button>
               <div className={` sm:grid-cols-3 mt-6 ${details ? 'grid' : 'hidden'}`}>
                    <div>
                         <h6 className='text-highlight text-lg uppercase'>TYPE OF CUSTOMISATION:</h6>
                         <p className='capitalize text-lg mt-1'>Print</p>
                         <h6 className='text-highlight text-lg uppercase mt-6'>DESIGN POSITION:</h6>
                         <p className='capitalize text-lg mt-1'>{item?.designPosition}</p>
                    </div>
                    <div>
                         {
                              item?.numberOfColorInLogo > 0 && <>
                                   <h6 className='text-highlight text-lg uppercase mt-6 md:mt-0'>No. of colors in logo:</h6>
                                   <p className='capitalize text-lg mt-1'>{item?.numberOfColorInLogo}</p>
                              </>
                         }

                         <h6 className={`text-highlight text-lg uppercase ${item?.numberOfColorInLogo > 0 && 'mt-6'}`}>DESIGN WIDTH:</h6>
                         <p className='capitalize text-lg mt-1'>{item?.designWidth} cm</p>
                    </div>
                    <div className='flex md:justify-center items-center mt-5 md:mt-0'>
                         {
                              item.lines ?
                                   <div className='bg-white h-full w-2/3 flex flex-col justify-center items-center'>
                                        {
                                             item?.lines?.map((line: any, idx: number) => (
                                                  <h3 key={idx} className={` font-semibold uppercase
                                                  ${line.size === "small" && 'text-sm'}
                                                  ${line.size === "Medium" && 'text-base'}
                                                  ${line.size === "Large" && 'text-lg'}
                                                  ${line.size === "X-Large" && 'text-xl'}
                                                  `}>{line.text}</h3>
                                             ))
                                        }
                                   </div>
                                   : <Image src={item?.imageURL} alt="image" width={140} height={140} />
                         }

                    </div>
               </div>
          </section>
     )
}

export default SelectedCustmizedLayout