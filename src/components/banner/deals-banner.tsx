import React from 'react'
import img from '../../../public/images/dbanner.jpeg'
import { TiTick } from 'react-icons/ti'

const DealsBanner = ({title}:any) => {
  return (
    <main className='pb-12 md:pb-0 md:h-[500px] w-full bg-no-repeat bg-center border-b-[8px] border-secondary bg-cover' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img.src})` }}>
          <div className='container mx-auto px-3 md:grid md:grid-cols-2 text-white h-full'>
               <div className='pt-16 flex md:justify-center'>
                    <h2 className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>{title}</h2>
               </div>
               <div className='mt-6 md:pt-16 flex md:justify-center'>
                   <ul>
                   {
                         points.map((item,idx)=>(
                              <li className='flex items-center my-2' key={idx}>
                                   <TiTick className="text-secondary text-2xl"/>
                                   <span>{item}</span>
                              </li>
                         ))
                    }
                   </ul>
               </div>
          </div>
    </main>
  )
}

export default DealsBanner


export const points = [
     "Super Fast Turnarounds",
     "Money Back Guaranteed.",
     "Secure payment System Via Stripe",
     "Fast and Free Delivery Via DPD.",
     "Over 2000+ Customer reviews"
]