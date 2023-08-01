import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { useSelector } from 'react-redux'

const TopBar = () => {
     const cartItems = useSelector((state:any) => state.AddToCart.value)
  return (
     <nav className="bg-accent">
     <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
       <Link href="/" className="flex items-center">
         <Image src="/images/logo.png" alt="logo" width={100} height={200} />
       </Link>
       <p className='text-xl font-medium uppercase text-white text-center'>
         The UK's leading personalised clothing company
       </p>
       <div className="flex items-center justify-between">
         <ul className='flex gap-2 items-center'>
           <li>
             <Link href="tel:08000510821" className='text-sm font-medium text-white hover:text-secondary hover:underline'>
               0800 051 0821
             </Link>
           </li>
           <li>
             <button className='text-white relative'>
               <CiShoppingBasket size="24" />
               <span className='absolute text-sm bg-red-600 p-1 flex flex-col justify-center items-center w-6 h-6 rounded-full -right-4 -top-1'>{cartItems.length || 0}</span>
             </button>
           </li>
         </ul>
       </div>
     </div>
   </nav>
  )
}

export default TopBar