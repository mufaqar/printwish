import React from 'react'
import SelectColor from './selectColor'
import SelectedColor from './selectedColor'
import CustomiztionProduct from '../customiztionProduct/CustomiztionProduct'
import SelectLogoColor from '../SelectLogoColor/SelectLogoColor'

const GetAQoute = ({
     colors,
     selectedProduct,
     handleColor,
     selctedColors, 
     sizes,
     handleSize,
     removeSize,
     number
}: any) => {
     return (
          <section className='absolute w-full h-full inset-0 z-[100] bg-white/50'>
               <div className="bg-[#F2F2F2] shadow-xl max-w-[90%] mx-auto p-6">
                    <button className='uppercase font-light items-center border border-primary gap-2 w-full text-center py-3 bg-primary text-white px-6 hover:text-primary hover:bg-transparent '>Close The order form</button>
                    <SelectColor colors={colors} selectedProduct={selectedProduct} handleColor={handleColor} />
                    <SelectedColor selctedColors={selctedColors} sizes={sizes} selectedProduct={selectedProduct} handleSize={handleSize} removeSize={removeSize}/>
                    <CustomiztionProduct number={number} />
                    <SelectLogoColor />
               </div>
          </section>
     )
}

export default GetAQoute