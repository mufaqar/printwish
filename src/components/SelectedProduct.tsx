import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const SelectedProduct = () => {

     const [items, setItems] = useState<any>()
  
     useEffect(() => {
          const item: any = sessionStorage.getItem('orderData')
          setItems(JSON.parse(item))
     }, [])
     return (
          <div className='flex items-start gap-2 border p-2'>
               <Image src={items?.productImage?.node?.mediaItemUrl} alt={items?.title} width={100} height={60} />
               <div className='ml-4 border-l-[1px] pl-4'>
                    <h5 className="md:text-white   font-medium">{items?.title}</h5>
                    <h5 className="md:text-white font-medium">SKU: <span className='font-extralight'>{items?.sku}</span></h5>
                    <div className="md:text-white font-medium">Color: <div className='font-extralight'>
                              {
                                   items?.colosWithSize?.map((i:any,idx:any)=>(
                                        <div key={idx}>{i?.name}:
                                        {
                                             i?.selectedSize?.map((n:any,idxx:any)=>(
                                                  <span key={idxx}>
                                                       {n?.name} ({n?.quantity}), </span>
                                             ))
                                        }
                                        </div>
                                   ))
                              }
                         </div>
                    </div>

               </div>
          </div>
     )
}

export default SelectedProduct