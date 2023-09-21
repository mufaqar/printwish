import { apiRequest } from '@/config/requests'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderData } from '../../../public/data'
import { toast } from 'react-toastify'
import { clearAll } from '@/features/AddToCart'
import { useRouter } from 'next/router'
import CraditCard from '@/components/paymentOption/CraditCard'
import { FaArrowLeft } from 'react-icons/fa'

const Checkout = () => {
     const cartItems = useSelector((state) => state.AddToCart.value)
     // const dispatch = useDispatch()
     // const router = useRouter()
     const [proceed, setProceed] = useState(false)

     const PlaceOrder = async (cartItems) => {
          setProceed(true)
     }

     const price = cartItems.reduce((sum, product) => sum + +product.price, 0);
     const vat = parseInt(((20 / 100) * price).toFixed(2))

     const totalPrice = price+vat


     return (
          <>
               <div className="relative mx-auto w-full bg-white">
                    <div className="grid min-h-screen grid-cols-2">
                         <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-1 lg:py-24">
                              <div className="mx-auto w-full max-w-lg">
                                   {proceed && <FaArrowLeft className='text-gray-500 hover:text-black text-2xl mb-5' onClick={()=>setProceed(!proceed)}/>}
                                   <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">Secure Checkout<span className="mt-2 block h-1 w-10 bg-primary sm:w-20"></span></h1>
                                   {
                                        !proceed &&
                                        <>
                                             <form action="" className="mt-10 flex flex-col space-y-4">
                                                  <div><label className="text-xs font-semibold text-gray-500">Name</label><input type="text" id="card-name" name="name" placeholder="name" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
                                                  <div><label className="text-xs font-semibold text-gray-500">Email</label><input type="email" id="email" name="email" placeholder="john.capler@fang.com" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
                                                  <div><label className="text-xs font-semibold text-gray-500">Mobile Number</label><input type="text" id="card-name" name="mobile-number" placeholder="mobile number" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
                                                  <div><label className="text-xs font-semibold text-gray-500">Address</label><textarea placeholder="mobile number" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"></textarea>     </div>
                                             </form>
                                             <p className="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#" className="whitespace-nowrap text-secondary underline hover:text-primary">Terms and Conditions</a></p>
                                             <button type="submit" onClick={() => PlaceOrder(cartItems)} className="mt-4 inline-flex w-full items-center justify-center rounded bg-primary py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-primary sm:text-lg">Proceed</button>
                                        </>
                                   }
                                   {proceed && <CraditCard totalPrice={totalPrice}/>}
                              </div>
                         </div>
                         <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-1 lg:py-24">
                              <h2 className="sr-only">Order summary</h2>
                              <div>
                                   <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="absolute inset-0 h-full w-full object-cover" />
                                   <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white to-primary opacity-95"></div>
                              </div>
                              <div className="relative">
                                   <ul className="space-y-5">
                                        {
                                             cartItems?.map((item, idx) => {
                                                  return (
                                                       <li className="flex justify-between" key={idx}>
                                                            <div className="inline-flex">
                                                                 <div className="ml-3">
                                                                      <p className="text-base font-semibold text-white">{item?.name}</p>
                                                                      <p className="font-medium text-white text-opacity-80">Price</p>
                                                                      <p className="text-xs font-medium text-gray-400">Exclude Vat</p>
                                                                 </div>
                                                            </div>
                                                            <p className="text-sm font-semibold text-white">£ {item?.price}</p>
                                                       </li>
                                                  )
                                             })
                                        }
                                   </ul>
                                   <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                                   <div className="space-y-2">
                                        <p className="flex justify-between text-lg font-bold text-white"><span>Total price:</span><span>£{totalPrice}</span></p>
                                        <p className="text-xs font-medium !-mt-0 !mb-2 text-gray-400">include Vat</p>
                                        <p className="flex justify-between text-sm font-medium text-white"><span>Shipping</span><span> Free </span></p>
                                        <p className="flex justify-between text-sm font-medium text-white"><span>Vat: 20%</span><span>£{vat}</span></p>
                                   </div>
                              </div>
                              <div className="relative mt-10 text-white">
                                   <h3 className="mb-5 text-lg font-bold">Support</h3>
                                   <p className="text-sm font-semibold">0800 051 0821 <span className="font-light">(International)</span></p>
                                   <p className="mt-1 text-sm font-semibold">enquiries@printwish.co.uk<span className="font-light">(Email)</span></p>
                                   <p className="mt-1 text-sm font-semibold">sales@printwish.co.uk<span className="font-light">(Email)</span></p>
                                   <p className="mt-2 text-xs font-medium">Call us now for payment related issues</p>
                              </div>
                              <div className="relative mt-10 flex">
                                   <p className="flex flex-col"><span className="text-sm font-bold text-white">Money Back Guarantee</span><span className="text-xs font-medium text-white">within 30 days of purchase</span></p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Checkout