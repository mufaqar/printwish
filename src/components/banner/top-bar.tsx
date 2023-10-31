import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuShirt } from 'react-icons/lu'
import { TbTruckDelivery } from 'react-icons/tb'
import { TiTick } from 'react-icons/ti'

const TopBar = () => {
  return (
     <section className='shadow-lg p-3 hidden md:block'>
     <div className='container mx-auto px-4 flex flex-wrap justify-center items-center gap-5'>
       <Link href="#" className='flex border-r-[2px] border-accent px-6 item-center hover:text-secondary gap-2 text-base uppercase text-accent'>
         <LuShirt className="text-2xl text-secondary" />
         <p>25 MINIMUM ORDER VALUE</p>
       </Link>
       <Link href="#" className='flex border-r-[2px] border-accent px-6 item-center hover:text-secondary gap-2 text-base uppercase text-accent'>
         <TiTick className="text-2xl text-secondary" />
         <p>PRICE MATCH PROMISE</p>
       </Link>
       <Link href="#" className='flex border-r-[2px] border-accent px-6 item-center hover:text-secondary gap-2 text-base uppercase text-accent'>
         <TbTruckDelivery className="text-2xl text-secondary" />
         <p>FREE UK DELIVERY.</p>
       </Link>
       <Link href="#" className='flex px-6 item-center hover:text-secondary gap-2 text-base uppercase text-accent'>
         <Image src="/images/review-badge.svg" alt="rating" width={335} height={60} className="w-56" />
       </Link>
     </div>
   </section>
  )
}

export default TopBar