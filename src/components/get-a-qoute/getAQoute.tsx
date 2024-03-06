import React, { useContext, useState } from 'react'
import SelectColor from './selectColor'
import SelectedColor from './selectedColor'
import CustomiztionProduct from '../customiztionProduct/CustomiztionProduct'
import SelectLogoColor from '../SelectLogoColor/SelectLogoColor'
import UploadImage from '../uploadImage/UploadImage'
import useColorsInLogo from '@/hooks/useColorsInLogo'
import { SettingsContext } from '@/context/global-context'

const GetAQoute = ({
     colors,
     selectedProduct,
     handleColor,
     selctedColors, 
     sizes,
     handleSize,
     removeSize,
     number,
     setOrderForm,
     handleAddaQoute
}: any) => {
     
     const [colorsInLogo, handleSelectedColor] = useColorsInLogo();
     const [aditionalInformation, setAditionalInformation] = useState('')
     const { selectedVariants } = useContext(SettingsContext);
     console.log("🚀 ~ selectedVariants:", selectedVariants)


     return (
          <section className='absolute w-full h-full inset-0 z-[100] bg-white/50 '>
               <div className="bg-[#F2F2F2] shadow-xl max-w-[90%] mx-auto p-6 flex flex-col gap-5">
                    <button onClick={()=>setOrderForm(false)} className='uppercase font-light items-center border border-primary gap-2 w-full text-center py-3 bg-primary text-white px-6 hover:text-primary hover:bg-transparent '>Close The order form</button>
                    <SelectColor colors={colors} selectedProduct={selectedProduct} handleColor={handleColor} />
                    <SelectedColor selctedColors={selctedColors} sizes={sizes} selectedProduct={selectedProduct} handleSize={handleSize} removeSize={removeSize}/>
                    {
                         selctedColors?.length > 0 && <CustomiztionProduct number={number} />
                    }
                    {
                         selectedVariants?.length > 0 && 
                         selctedColors?.length > 0 &&
                         <SelectLogoColor handleSelectedColor={handleSelectedColor} colorsInLogo={colorsInLogo}/>
                    }
                    {
                         selectedVariants?.length > 0 && 
                         selctedColors?.length > 0 &&
                         colorsInLogo &&
                         <UploadImage />
                    }
                    
                    <h5 className={`text-xl font-semibold text-accent mb-2 mt-5 font-roboto`}>Additional information or requests</h5>
                    <textarea value={aditionalInformation} onChange={(e)=>setAditionalInformation(e.target.value)} className='block w-full p-3 h-[340px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md'/>
                    <button onClick={()=>
                         {
                              selectedVariants?.length > 0 && 
                              selctedColors?.length > 0 &&
                              colorsInLogo &&
                              handleAddaQoute(colorsInLogo, aditionalInformation)
                         }
                    } 
                    className={`
                    uppercase font-light items-center border border-primary gap-2 w-full text-center py-3 text-white px-6   mt-7 rounded-lg
                         ${
                              selectedVariants?.length > 0 && 
                         selctedColors?.length > 0 &&
                         colorsInLogo ? 'bg-primary hover:bg-transparent hover:text-primary cursor-pointer' : 'bg-gray-400 border-gray-400 cursor-default'
                         }
                    `}
                    >Add to Qoute</button>
               </div>
          </section>
     )
}

export default GetAQoute