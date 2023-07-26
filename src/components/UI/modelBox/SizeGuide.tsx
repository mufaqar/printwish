import { SettingsContext } from '@/context/global-context';
import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineDownload } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';


const SizeGuide = () => {

     const { modalIsOpen, setIsOpen } = useContext(SettingsContext)

     const customStyles = {
          content: {
               top: '50%',
               left: '50%',
               right: 'auto',
               bottom: 'auto',
               marginRight: '-50%',
               transform: 'translate(-50%, -50%)',
               maxWidth: '1000px',
               width: '100%'
               
          },
     };
     function closeModal() {
          setIsOpen(false);
     }
     const [selectedTab, setSelectedTab] = useState('FRUIT OF THE LOOM')

     return (
          <div>

               <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
               >
                    <div className='grid grid-cols-2 items-center border-b-[1px] border-gray-100 pb-4'>
                         <h3 className='flex-1 font- text-2xl capitalize'>Size charts</h3>
                         <button className='w-full flex justify-end items-end' onClick={closeModal}><RxCross1 /></button>
                    </div>
                    <div>
                         <div className='grid grid-cols-2'>
                              <button className={`text-xl p-3 font-bold text-secondary border-b-[3px] border-secondary ${selectedTab === 'FRUIT OF THE LOOM' ? 'opacity-100 ' : 'opacity-40'}`} onClick={() => setSelectedTab('FRUIT OF THE LOOM')}>FRUIT OF THE LOOM</button>
                              <button className={`text-xl p-3 font-bold text-secondary border-b-[3px] border-secondary ${selectedTab === 'ORDERING SAMPLES' ? 'opacity-100 ' : 'opacity-40'}`} onClick={() => setSelectedTab('ORDERING SAMPLES')}>ORDERING SAMPLES</button>
                         </div>
                         {
                              selectedTab === 'FRUIT OF THE LOOM' ? <FruitOfTheLoom /> : <OrderingSamples />
                         }
                    </div>

               </Modal>
          </div>
     )
}

export default SizeGuide


const FruitOfTheLoom = () => {
     return (
          <div className='mt-5 text-accent text-lg'>
               <p>You will find the size information for this product in the Description section on this page.</p>
               <p className='mt-2'>Note that the sizes shown are intended as a guide only.</p>
               <p className='mt-2'>You can also <a href="/files/Fruit-of-the-Loom-Size-Guide.pdf" className='inline-flex hover:underline items-center gap-1 text-secondary' download={true}>download the size guide <AiOutlineDownload /></a> for this brand. </p>
          </div>
     )
}

const OrderingSamples = () => {
     return (
          <div className='mt-5 text-accent text-lg'>
               <p>You may wish to view samples of garments in order to find the right size. This is especially useful as you are not able to return customised garments if they are the wrong size.</p>
               <p className='mt-2'>To obtain samples you will need to place an order for the plain garments you wish to view. We are not able to supply free samples for online orders.</p>
               <p className='mt-2'>You can then either keep the garments or return them to us for a refund.  <Link href="/content/10-pricing-guide" className='inline-flex hover:underline items-center gap-1 text-secondary'> See full info <MdArrowForwardIos /></Link> </p>
          </div>
     )
}