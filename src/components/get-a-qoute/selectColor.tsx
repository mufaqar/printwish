import React from 'react'

const SelectColor = ({
     colors,
     selectedProduct,
     handleColor,
     isColorAndSize
}:any) => {
     return (
          <div className="bg-background md:pt-8 rounded-lg ">
               <h5 className={`text-xl font-semibold text-accent font-roboto bg-gray-200 px-4 py-6 border rounded ${isColorAndSize ? 'border-black/60' : '!border-red-500'}`}>Step 1 - Choose one or more colours: *</h5>
               <ul className='flex flex-wrap gap-[2px] md:gap-2 mt-4'>
                    {
                         colors?.map((clr: any, idx: number) => {
                              const colorExists = selectedProduct?.colors?.some((item: any) => item.code === clr.description);
                              return (
                                   <li key={idx} onClick={() => handleColor(clr)} className={`${colorExists ? 'border-green-400' : 'border-transparent'} p-1 hover-text border-[3px] rounded-full`}  >
                                        <div className='p-[18px] cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200 ease-in-out rounded-full' style={{ backgroundColor: `#${clr?.description}` }} />
                                        <span className="tooltip-text whitespace-nowrap text-center" id="top">{clr?.name}</span>
                                   </li>
                              )
                         })
                    }
               </ul>
          </div>
     )
}

export default SelectColor