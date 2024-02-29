import React from 'react'
import SelectColor from './selectColor'
import SelectedColor from './selectedColor'
import CustomiztionProduct from '../customiztionProduct/CustomiztionProduct'
import SelectLogoColor from '../SelectLogoColor/SelectLogoColor'
import UploadImage from '../uploadImage/UploadImage'

const GetAQoute = ({
     colors,
     selectedProduct,
     handleColor,
     selctedColors, 
     sizes,
     handleSize,
     removeSize,
     number,
     setOrderForm
}: any) => {

     return (
          <section className='absolute w-full h-full inset-0 z-[100] bg-white/50'>
               <div className="bg-[#F2F2F2] shadow-xl max-w-[90%] mx-auto p-6">
                    <button onClick={()=>setOrderForm(false)} className='uppercase font-light items-center border border-primary gap-2 w-full text-center py-3 bg-primary text-white px-6 hover:text-primary hover:bg-transparent '>Close The order form</button>
                    <SelectColor colors={colors} selectedProduct={selectedProduct} handleColor={handleColor} />
                    <SelectedColor selctedColors={selctedColors} sizes={sizes} selectedProduct={selectedProduct} handleSize={handleSize} removeSize={removeSize}/>
                    <CustomiztionProduct number={number} />
                    <SelectLogoColor />
                    <UploadImage />
                    <h5 className={`text-xl font-semibold text-accent mb-2 mt-5 font-roboto`}>Additional information or requests</h5>
                    <textarea className='block w-full p-3 h-[340px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md'/>
                    <button className='uppercase font-light items-center border border-primary gap-2 w-full text-center py-3 bg-primary text-white px-6 hover:text-primary hover:bg-transparent mt-7 rounded-lg '>Add a Qoute</button>
               </div>
          </section>
     )
}

export default GetAQoute