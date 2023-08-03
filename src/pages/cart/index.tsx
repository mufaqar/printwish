import PageBanner from '@/components/banner/page-banner'
import { clearAll, decreaseCartItem, increseCartItem, removeProductFromCart } from '@/features/AddToCart'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Cart = () => {
     const cartItems = useSelector((state: any) => state.AddToCart.value)
     const dispatch = useDispatch()
     const router = useRouter()

     const IncreaseCartItemHandler = (product: any) => {
          dispatch(increseCartItem(product))
     }
     const DecreaseCartItemHandler = (product: any) => {
          dispatch(decreaseCartItem(product))
     }

     const handleCheckout = () => {
          if(cartItems.length > 0){
               router.push('/checkout')
          }else{
               toast.info("Checkout not working your cart is empty!");
          }
     }

     return (
          <>
               <PageBanner title="Shopping Cart" />
               <section className='container mx-auto px-2 my-20'>
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                         <div className="rounded-lg md:w-2/3">
                              {
                                   cartItems.map((item: any, idx: number) => {
                                        return (
                                             <div key={idx} className="justify-between mb-6 relative rounded-lg hover:shadow bg-white p-6  border sm:flex sm:justify-start">
                                                  <img src={item.images[0]?.src} alt={item?.name} className="w-full rounded-lg sm:w-40" />
                                                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                                       <div className="mt-5 sm:mt-0 pr-4">
                                                            <h2 className="text-lg font-bold text-gray-900">{item?.name}</h2>
                                                            <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                                                       </div>
                                                       <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                            <div className="flex items-center border-gray-100">
                                                                 <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => DecreaseCartItemHandler(item)}> - </button>
                                                                 <input className="h-8 w-12 border border-gray-300 bg-white text-center text-xs outline-none" type="number" value={item.quantity} min="1" />
                                                                 <button className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => IncreaseCartItemHandler(item)}> + </button>
                                                            </div>
                                                            <p className="text-sm">{item?.price} £</p>
                                                            <button className="absolute -left-5 -top-5" onClick={() => dispatch(removeProductFromCart(item.id))}>
                                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                 </svg>
                                                            </button>
                                                       </div>
                                                  </div>
                                             </div>
                                        )
                                   })
                              }
                              {cartItems.length > 0 ? <button onClick={() => dispatch(clearAll())} className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:bg-secondary">Clear All</button> : <p className='text-accent'>Cart Empty</p>}
                         </div>

                         <div className="mt-6 h-full rounded-lg border bg-white p-6 md:mt-0 md:w-1/3 sticky top-10">
                              <div className="mb-2 flex justify-between">
                                   <p className="text-gray-700">Subtotal</p>
                                   <p className="text-gray-700">$129.99</p>
                              </div>
                              <div className="flex justify-between">
                                   <p className="text-gray-700">Shipping</p>
                                   <p className="text-gray-700">$4.99</p>
                              </div>
                              <hr className="my-4" />
                              <div className="flex justify-between">
                                   <p className="text-lg font-bold">Total</p>
                                   <div className="">
                                        <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                                        <p className="text-sm text-gray-700">including VAT</p>
                                   </div>
                              </div>

                              <button onClick={()=>handleCheckout()} className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:bg-secondary">Check out</button>
                          
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Cart