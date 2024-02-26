import React from 'react'
import SelectColor from './selectColor'
import SelectedColor from './selectedColor'

const GetAQoute = ({
     colors,
     selectedProduct,
     handleColor,
     selctedColors, 
     sizes,
     handleSize,
     removeSize
}: any) => {
     return (
          <section className='fixed w-full h-full inset-0 z-[100] bg-white/50'>
               <div className="bg-[#F2F2F2] shadow-xl max-w-[90%] mx-auto p-6">
                    <button className='uppercase font-light items-center border border-primary gap-2 w-full text-center py-3 bg-primary text-white px-6 hover:text-primary hover:bg-transparent '>Close The order form</button>
                    <SelectColor colors={colors} selectedProduct={selectedProduct} handleColor={handleColor} />
                    <SelectedColor selctedColors={selctedColors} sizes={sizes} selectedProduct={selectedProduct} handleSize={handleSize} removeSize={removeSize}/>
               </div>
          </section>
     )
}

export default GetAQoute