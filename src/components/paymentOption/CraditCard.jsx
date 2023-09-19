import { clearAll } from '@/features/AddToCart';
import React, { useEffect, useState } from 'react'
import { BsEmojiHeartEyes } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

const CraditCard = ({totalPrice}) => {
     const [resp, setResp] = useState()
     const [status, setStatus] = useState(false)
     const dispatch = useDispatch()

     useEffect(()=>{
          if(resp?.status === "COMPLETED"){
               setStatus(true)
               dispatch(clearAll())
          }
     },[resp])

     return (
          <>
          <section className='mt-16'>
               <PaymentForm
                    applicationId="sandbox-sq0idb-7JNy_rfoZZNevgwzrObecg"
                    cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
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
                    }}
                    createPaymentRequest={() => ({
                         countryCode: "US",
                         currencyCode: "USD",
                         total: {
                              amount: `${totalPrice}.00`,
                              label: "Total",
                         },
                    })}
                    locationId='LBEQWG43ZP71Z'
               >

                    <CreditCard />
               </PaymentForm>
          </section>
          {
               status && <p className='mt-4 text-lg flex justify-center items-center gap-2'><BsEmojiHeartEyes className="text-2xl text-orange-400"/>Order Completed</p>
          }
          </>
     )
}

export default CraditCard