import { clearAll, removeProductFromCart } from '@/features/AddToCart'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Cart = () => {
     const cartItems = useSelector((state: any) => state.AddToCart.value)
     const dispatch = useDispatch()
     const router = useRouter()

     const handleCheckout = () => {
          if (cartItems.length > 0) {
               router.push('/checkout')
          } else {
               toast.info("Checkout not working your cart is empty!");
          }
     }

     const totalPrice = cartItems.reduce((sum: any, product: any) => sum + +product.price, 0);
     const vat = parseInt(((20 / 100) * totalPrice).toFixed(2))

     return (
          <>

               <h2 className='sm:text-4xl text-2xl font-bold font-opensans text-center container mx-auto px-2 my-20 capitalize mb-2'>
                    Shopping Cart
               </h2>
               <section className='container mx-auto px-2 my-20'>
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                         <div className="rounded-lg md:w-2/3">
                              {
                                   cartItems.map((item: any, idx: number) => {
                                        return (
                                             <div key={idx} className='border rounded-lg hover:shadow p-6'>
                                                  <div key={idx} className="justify-between mb-4 relative bg-white sm:flex sm:justify-start items-start">
                                                       <Image src={item?.featuredImage?.node?.mediaItemUrl || item?.images[0]?.src} alt={item?.name} width={112} height={200} className="w-full rounded-lg sm:w-28" />
                                                       <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                                            <div className="mt-5 sm:mt-0 pr-4">
                                                                 <h2 className="text-lg font-bold text-gray-900">{item?.name || item?.title}</h2>
                                                                 <p className="text-lg font-bold mt-1">Price: £{item?.price}</p>
                                                                 <p className="mt-1 text-xs text-gray-700">SKU: {item?.sku}</p>
                                                            </div>

                                                            <button className="absolute -left-5 -top-5" onClick={() => dispatch(removeProductFromCart(item.id))}>
                                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                 </svg>
                                                            </button>
                                                       </div>
                                                  </div>
                                                  <ul className='flex flex-col flex-wrap gap-[2px] md:gap-2 mt-2 border-t-[1px] border-gray-200 w-full pt-4'>
                                                       {
                                                            item?.extra?.colors?.map((clr: any, idx: number) => {
                                                                 return (
                                                                      <li key={idx} className='flex items-center gap-2'>
                                                                           <div className='p-[18px] cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200 ease-in-out rounded-full border-[1px] border-gray-200' style={{ backgroundColor: `#${clr?.code}` }} />
                                                                           <ul className='flex flex-wrap gap-1 font-semibold text-gray-600 '>
                                                                                {
                                                                                     clr?.selectedSize?.map((s: any) => (
                                                                                          <li key={s?.name} className='border-[1px] p-1.5 text-sm mt-[2px] md:mt-0'>
                                                                                               <p>Size: {s?.name} </p>
                                                                                               <p>Quanitity: {s?.quantity} </p>
                                                                                               <p>Unit Price: {(s.price / s?.quantity).toFixed(2)} </p>
                                                                                          </li>
                                                                                     ))
                                                                                }
                                                                           </ul>
                                                                           
                                                                      </li>
                                                                 )
                                                            })
                                                       }
                                                  </ul>
                                                  {
                                                       item?.extra?.designArtWork.length > 0 && <ul className='mt-3 border-t-[1px] border-gray-200 pt-4 pb-2 border-b-[1px]'>
                                                            {
                                                                 item?.extra?.designArtWork?.map((d: any, i: number) => (
                                                                      <li key={i} className="md:flex justify-between items-center">
                                                                           <div className='flex-1'>
                                                                                <p>Customization Name : <span className='text-gray-600'>{d?.customisationName}</span></p>
                                                                                <p>Design Position : <span className='text-gray-600'>{d?.designPosition}</span></p>
                                                                                <p>Design Width : <span className='text-gray-600'>{d?.designWidth} <sup>cm</sup></span></p>
                                                                                <p>Special Instruction : <span className='text-gray-600'>{d?.specialInstruction}</span></p>
                                                                           </div>
                                                                           <img src={d?.imageURL} alt="logo" width={112} height={200} className="md:w-28 mt-3 md:mt-0" />
                                                                      </li>
                                                                 ))
                                                            }
                                                       </ul>
                                                  }
                                                  {
                                                       item?.extra?.textCreator.length > 0 && <ul className='border-gray-200 pt-4 pb-4 border-b-[1px]'>
                                                            {
                                                                 item?.extra?.textCreator?.map((d: any, i: number) => (
                                                                      <li key={i} className="md:flex justify-between items-center">
                                                                           <div className='flex-1'>
                                                                                <p>Customization Name : <span className='text-gray-600'>{d?.customisationName}</span></p>
                                                                                <p>Design Position : <span className='text-gray-600'>{d?.designPosition}</span></p>
                                                                                <p>Design Width : <span className='text-gray-600'>{d?.designWidth} <sup>cm</sup></span></p>
                                                                                <p>Special Instruction : <span className='text-gray-600'>{d?.specialInstruction}</span></p>
                                                                                {
                                                                                     d?.lines?.map((line: any, idx: number) => (
                                                                                          <div key={idx}>
                                                                                               <p>Text Color : <span className='text-gray-600'>{line?.color}</span></p>
                                                                                               <p>Text font : <span className='text-gray-600'>{line?.font}</span></p>
                                                                                               <p>Text size : <span className='text-gray-600'>{line?.size}</span></p>
                                                                                          </div>
                                                                                     ))
                                                                                }
                                                                           </div>
                                                                           <div className='bg-gray-100 h-full p-5 flex flex-col mt-3 md:mt-0 justify-center items-center'>
                                                                                {
                                                                                     d?.lines?.map((line: any, idx: number) => (
                                                                                          <h3 key={idx} className={` font-semibold uppercase
                                                                                          ${line.size === "small" && 'text-sm'}
                                                                                          ${line.size === "Medium" && 'text-base'}
                                                                                          ${line.size === "Large" && 'text-lg'}
                                                                                          ${line.size === "X-Large" && 'text-xl'}
                                                                                          `}>{line.text}</h3>
                                                                                     ))
                                                                                }
                                                                           </div>
                                                                      </li>
                                                                 ))
                                                            }
                                                       </ul>
                                                  }

                                             </div>
                                        )
                                   })
                              }
                              {cartItems.length > 0 ? <button onClick={() => dispatch(clearAll())} className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:bg-secondary">Clear All</button> : <p className='text-accent'>Cart Empty</p>}
                         </div>

                         <div className="mt-6 h-full rounded-lg border bg-white p-6 md:mt-0 md:w-1/3 sticky top-10">
                              <div className="mb-2 flex justify-between">
                                   <div className="text-gray-700">Subtotal <p className="text-xs text-gray-700">excluding VAT</p></div>
                                   <p className="text-gray-700">£{totalPrice}</p>
                              </div>
                              <div className="flex justify-between">
                                   <p className="text-gray-700">Shipping</p>
                                   <p className="text-gray-700">Free</p>
                              </div>
                              <div className="flex justify-between mt-2">
                                   <p className="text-gray-700">VAT</p>
                                   <p className="text-gray-700">£{vat}</p>
                              </div>
                              <hr className="my-4" />
                              <div className="flex justify-between">
                                   <p className="text-lg font-bold">Total</p>
                                   <div className="">
                                        <p className="mb-1 text-lg font-bold text-end">£{totalPrice+vat}</p>
                                        <p className="text-xs text-gray-700">including VAT</p>
                                   </div>
                              </div>

                              <button onClick={() => handleCheckout()} className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:bg-secondary">Check out</button>

                         </div>
                    </div>
               </section>
          </>
     )
}

export default Cart