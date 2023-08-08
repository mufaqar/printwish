import Image from 'next/image';
import React, { useContext } from 'react'
import { customizedIcon, textIcon } from '../../../public/data';
import { SettingsContext } from '@/context/global-context';

const Artwork = () => {
     const { selectArt, setSelectArt, setColorsInLogo, selectedProduct, setSelectedProduct } = useContext(SettingsContext)
     const handleSelectArt = (e:string) =>{
          var line:any[] = []
          var imageURL
          if(e === 'Text creator'){
               setColorsInLogo()
               const updatedState = { ...selectedProduct };
               delete updatedState.imageURL;
               delete updatedState.numberOfColorInLogo
               setSelectedProduct({...updatedState, line})
          }else{
               const updatedState = { ...selectedProduct };
               delete updatedState.line;
               setSelectedProduct({...updatedState, imageURL})
          }
          setSelectArt(e)
     }

     return (
          <section className='mt-4 bg-background p-8 rounded-lg'>
               <h5 className='text-xl font-semibold text-accent font-roboto'>Step 5 - Artwork:</h5>
               <div className='mt-5 md:flex item-center gap-6'>
                    <button onClick={()=>handleSelectArt('Upload image')} className={`bg-white flex items-center gap-3 p-2 hover:scale-105 active:scale-100 mt-3 md:mt-0 w-full md:w-60 text-xl border-[2px] rounded-full ${selectArt === 'Upload image' ? 'border-secondary' : ' border-transparent'}`}>
                         <figure className='bg-accent p-2 rounded-full'>
                              <Image src={customizedIcon} width={100} height={100} className='w-5 h-5' alt="print" />
                         </figure>
                         <span>Upload image</span>
                    </button>
                    <button onClick={()=>handleSelectArt('Text creator')} className={`bg-white flex items-center gap-3 p-2 hover:scale-105 active:scale-100 mt-3 md:mt-0 w-full md:w-60 text-xl border-[2px] rounded-full ${selectArt === 'Text creator' ? 'border-secondary' : ' border-transparent'}`}>
                         <figure className='bg-accent p-2 rounded-full'>
                              <Image src={textIcon} width={100} height={100} className='w-5 h-5' alt="print" />
                         </figure>
                         <span>Text creator</span>
                    </button>
               </div>

          </section>
     )
}

export default Artwork