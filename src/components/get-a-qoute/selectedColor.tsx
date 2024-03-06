import React from 'react'
import { RxCross2 } from 'react-icons/rx';

const SelectedColor = ({
     selctedColors,
     sizes,
     handleSize,
     removeSize,
     selectedProduct
}:any) => {
     return (
          <>
               {/* all selected colors list*/}
               <div>
                    {
                         selctedColors?.map((c: any, idx: number) => {
                            
                              return (
                                   <div key={idx} className='flex border-[1.5px] justify-between my-3 bg-background p-3 md:py-4 md:px-6 rounded-lg' style={{ borderColor: `#${c?.code}` }}>
                                        <div>
                                             <div className='flex items-center gap-2'>
                                                  <div className="p-4 rounded-full" style={{ backgroundColor: `#${c?.code}`, borderColor: `#${c?.code}` }} />
                                                  <p className='text-lg uppercase'>{c?.name}</p>
                                             </div>
                                             {/* map all size that are accociated to this product  */}
                                             <ul className='flex flex-wrap items-center gap-3 mt-3 '>
                                                  {
                                                      
                                                       sizes?.map((item: any, idx: number) => {
                                                            const matchingColor = selectedProduct.colors.find((color: any) => color.name === c?.name);
                                                            const quantity = matchingColor?.selectedSize.find((sizeObj: any) => sizeObj.name === item.name)?.quantity;

                                                            return (
                                                                 <div key={idx} className='flex flex-col items-center justify-center'>
                                                                      <p className='text-lg text-accent font-bold'>{item.name}</p>
                                                                      <div className='mt-1'>
                                                                           <input type="number" name={item.name} min="0" className='w-16 bg-white border border-gray-300 p-2 py-1 placeholder:text-lg placeholder:text-gray-400 placeholder:font-semibold font-semibold focus:outline-none text-lg focus:ring-0 focus:border-gray-500 text-center rounded-3xl'
                                                                                placeholder='0'
                                                                                value={quantity}
                                                                                onChange={(e) => handleSize(e, c?.name, item.name)}
                                                                           />
                                                                      </div>
                                                                 </div>
                                                            )
                                                       })
                                                  }
                                             </ul>
                                        </div>
                                        <i className='mt-4 font-semibold text-xl cursor-pointer active:scale-105'><RxCross2 onClick={() => removeSize(c.name)} /></i>
                                   </div>
                              )
                         })
                    }
               </div>
          </>
     )
}

export default SelectedColor