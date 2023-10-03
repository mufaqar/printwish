import { SettingsContext } from '@/context/global-context';
import { clearAll } from '@/features/AddToCart';
import useOrderHandler from '@/hooks/useOrderHandler';
import React, { useContext, useEffect, useState } from 'react'
import { BsEmojiHeartEyes } from 'react-icons/bs';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

const CraditCard = ({ totalPrice }) => {
     const [resp, setResp] = useState()
     const [status, setStatus] = useState(null)
     const dispatch = useDispatch()
     const { allCartItems } = useContext(SettingsContext)
     const { OrderSubmit } = useOrderHandler()
     useEffect(() => {
          if (resp?.status === "COMPLETED") {
               setStatus("COMPLETED")
               OrderSubmit(allCartItems)
               dispatch(clearAll())
          }
     }, [resp])

     return (
          <>
               <section className='mt-16'>
                    <PaymentForm
                         //sq0idp-AqR_N1SYztjgjFKQjWbT9g
                         //L0EHQKCH6RFS5
                         applicationId="sq0idp-AqR_N1SYztjgjFKQjWbT9g"
                         cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                              try {
                                   setStatus("PROCESSING")
                                   const response = await fetch("/api/pay", {
                                        method: "POST",
                                        headers: {
                                             "Content-type": "application/json",
                                        },
                                        body: JSON.stringify({
                                             sourceId: token.token,
                                             totalPrice
                                        }),
                                   });
                                   const { payment } = await response.json()
                                   setResp(payment)
                              } catch (error) {
                                   setStatus("FAIL")
                              }

                         }}
                         createPaymentRequest={() => ({
                              countryCode: "UK",
                              currencyCode: "GBP",
                              total: {
                                   amount: `${totalPrice}.00`,
                                   label: "Total",
                              },
                         })}
                         locationId='L0EHQKCH6RFS5'
                    >
                         <CreditCard />
                    </PaymentForm>
               </section>
               {
                    status === "COMPLETED" && <p className='mt-4 text-lg flex justify-center items-center gap-2'><BsEmojiHeartEyes className="text-2xl text-orange-400" />Order Completed</p>
               }
               {
                    status === "FAIL" && <p className='mt-4 text-lg flex justify-center items-center gap-2'><HiOutlineEmojiSad className="text-2xl text-orange-400" />Fail</p>
               }
               {
                    status === "PROCESSING" && <div className='mt-4 text-lg flex justify-center items-center gap-2'> <div className="loadingspinner" /></div>
               }
          </>
     )
}

export default CraditCard