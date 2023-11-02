import { SettingsContext } from '@/context/global-context';
import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import { RxCross1 } from 'react-icons/rx'
import Image from 'next/image';
import Link from 'next/link';


const OfferModelBox = ({setIsOpen, modalIsOpen}) => {

     const customStyles = {
          content: {
               top: '50%',
               left: '50%',
               right: 'auto',
               bottom: 'auto',
               marginRight: '-50%',
               transform: 'translate(-50%, -50%)',
               maxWidth: '700px',
               width: '100%',
               background: 'transparent',
               border: 'none',
               padding: '0'
          },
     };
     function closeModal() {
          setIsOpen(false);
          sessionStorage.setItem('modelState', JSON.stringify({state:false}))
     }

     return (
          <>
               <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
               >
                    <div className="p-2">
                         <div className="bg-black p-4 rounded-2xl">
                              <div className='pb-4'>
                                   <button className='w-full flex text-white text-2xl justify-end items-end' onClick={closeModal}><RxCross1 /></button>
                              </div>
                              <figure className='flex items-center justify-center'>
                                   <Image src="/images/logo.png" alt="logo" width={250} height={37} />
                              </figure>
                              <section className="text-center my-6 mb-10">
                                   <h5 className='text-red-600 font-bold -tracking-wider text-4xl'>Get 15% off</h5>
                                   <h2 className='text-white font-bold text-xl md:text-2xl'>Winter Discount Available Now</h2>
                                   <p className='text-white mt-2 md:text-xl leading-8 tracking-wide'>Get 15% Discount on all Orders by using the discount code "<span className="text-red-600 font-semibold">Winter2023</span>" at checkout. We are also offering next day fast and free delivery Via DPD.</p>
                                   <button className="mt-10 hover:scale-105"><Link href="/custom-t-shirt-printing-cheap-t-shirt-printing" className="bg-red-600 text-white font-semibold p-4 text-sm sm:text-xl rounded-lg px-5">PLACE ORDER AND GET 15% OFF</Link></button>
                              </section>
                         </div>
                    </div>
               </Modal>
          </>
     )
}

export default OfferModelBox
