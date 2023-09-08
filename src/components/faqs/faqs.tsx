import React, { useState } from 'react'

const Faqs = ({data}:any) => {
     console.log("🚀 ~ file: faqs.tsx:4 ~ Faqs ~ data:", data)
     const [openFaq,setOpenFaq] = useState<any>()
     const handleFaqs = (id:number) => {
          if(openFaq === id){
               return setOpenFaq(null)
          }
          setOpenFaq(id)
     }

     return (
          <div className='mt-5 flex flex-col gap-2'>
               {
                    data?.map((item: any, idx: number) => {
                         return (
                              <div onClick={()=>handleFaqs(idx)} key={idx} className='bg-white p-3 px-5 border border-gray-200 font-opensans cursor-pointer'>
                                   <h4 className='hover:text-secondary'>{item?.question}</h4>
                                   <p className={openFaq === idx ? 'block mt-4 text-gray-500' : 'hidden'}>{item?.answer}</p>
                              </div>
                         )
                    })
               }
          </div>
     )
}

export default Faqs