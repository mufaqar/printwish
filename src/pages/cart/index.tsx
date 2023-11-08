import { clearAll, removeProductFromCart } from '@/features/AddToCart'
import { TotalPriceCalculate } from '@/utils'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Cart = () => {
     const cartItems = useSelector((state: any) => state.AddToCart.value)

     console.log("🚀 ~ file: index.tsx:12 ~ Cart ~ cartItems:", cartItems)

     const dispatch = useDispatch()
     const router = useRouter()
     const [coupon, setcoupon] = useState();
     const [coupon_message, setcoupon_message] = useState(false);
     const [validCoupon, setValidCoupon] = useState(false)

     const handleCheckout = () => {
          if (cartItems.length > 0) {
               router.push('/checkout')
          } else {
               toast.info("Checkout not working your cart is empty!");
          }
     }

     useEffect(() => {
     }, [validCoupon])

     const { priceWithVat, vat, totalPriceWithoutVAT, couponDiscountPrice } = TotalPriceCalculate(cartItems)

     const ApplyCoupon = () => {
          const valid_coupon = "Winter2023";
          if (valid_coupon === coupon) {
               sessionStorage.setItem("coupon", 'valid')
               setValidCoupon(true);
               setcoupon_message(false);
          }
          else {
               setcoupon_message(true);
          }
     }

     const onchangeCoupon = (e: any) => {
          setcoupon(e.target.value)
     }

     return (
          <>
               <Head>
                    <title>Add to cart | Printwish</title>
                    <meta name="description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
                    <link rel="canonical" href={`https://www.printwish.co.uk/cart`} />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="cart" />
                    <meta property="og:description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
                    <meta property="og:url" content={`https://printwish.co.uk/cart`} />
                    <meta property="og:site_name" content="PrintWish T-Shirt Printing" />
                    <meta property="article:publisher" content="https://www.facebook.com/printwishuk" />
                    <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
                    <meta property="og:image" content="https://backend.printwish.co.uk/wp-content/uploads/2023/10/trust.png" />
                    <meta property="og:image:width" content="700" />
                    <meta property="og:image:height" content="467" />
                    <meta property="og:image:type" content="image/jpeg" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@PrintwishUk" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="57 minutes" />
               </Head>
               <h2 className='sm:text-4xl text-2xl font-bold font-opensans text-center container mx-auto px-2 my-20 capitalize mb-2'>
                    Shopping Cart
               </h2>
               <section className='container mx-auto px-2 my-20'>
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                         <div className="rounded-lg md:w-2/3">
                              {
                                   cartItems.map((item: any, idx: number) => {
                                        return (
                                             <div key={idx} className='border rounded-lg hover:shadow p-6 mb-2'>
                                                  <div key={idx} className="justify-between mb-4 relative bg-white sm:flex sm:justify-start items-start">
                                                       <Image src={item?.featuredImage?.node?.mediaItemUrl || item?.images[0]?.src} alt={item?.name} width={112} height={200} className="w-full rounded-lg sm:w-28" />
                                                       <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                                            <div className="mt-5 sm:mt-0 pr-4">
                                                                 <h2 className="text-lg font-bold text-gray-900">{item?.name || item?.title}</h2>
                                                                 <p className="text-lg font-bold mt-1">Product Price: £{item?.productPrice.toFixed(2)}</p>
                                                                 <p className="text-lg font-bold mt-1">Printing Price: £{item?.price - item?.productPrice}</p>
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

                              <div className='coupon border-b-[1px] mb-4 pb-2'>
                                   <p>Enter <span className='font-semibold text-red-600'>Winter2023</span> Code in  a box below to get 15% discount.</p>
                                   <input type='text' value={coupon} onChange={onchangeCoupon} className='w-full mt-3' />
                                   {coupon_message && <span className='pt-1 text-red-600 text-sm'>Invalid Coupon</span>}
                                   <button onClick={ApplyCoupon} className='bg-secondary hover:bg-primary rounded-md w-full p-2 my-3 text-white' >Apply Coupon</button>
                              </div>
                              <div className="mb-2 flex justify-between">
                                   <div className="text-gray-700">Subtotal <p className="text-xs text-gray-700">excluding VAT</p></div>
                                   <p className="text-gray-700">£{totalPriceWithoutVAT}</p>
                              </div>
                              <div className="flex justify-between">
                                   <p className="text-gray-700">Shipping</p>
                                   <p className="text-gray-700">Free</p>
                              </div>
                              <div className="flex justify-between mt-2">
                                   <p className="text-gray-700">VAT</p>
                                   <p className="text-gray-700">£{vat}</p>
                              </div>
                              {
                                   couponDiscountPrice && <div className="flex justify-between mt-2">
                                        <p className="text-gray-700">Discount</p>
                                        <p className="text-gray-700">£{couponDiscountPrice.toFixed(2)}</p>
                                   </div>
                              }

                              <hr className="my-4" />
                              <div className="flex justify-between">
                                   <p className="text-lg font-bold">Total</p>
                                   <div className="">
                                        <p className="mb-1 text-lg font-bold text-end">£{priceWithVat.toFixed(2)}</p>
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