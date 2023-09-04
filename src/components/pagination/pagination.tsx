'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const Pagination = () => {
     const [pageNumber, setPageNumber] = useState<any>()
     const router = useRouter()
     console.log("🚀 ~ file: pagination.tsx:11 ~ Pagination ~ router:", router)

     useEffect(()=>{

     },[pageNumber])
     return (
          <>
               <nav aria-label="Page navigation" className='flex justify-center items-center mt-10'>
                    <ul className="list-style-none gap-2 flex">
                         <li 
                         className="pointer-events-none relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
                              >Previous
                         </li>
                              {
                                   [1,2,3,4,5,6].map((p:any,idx:number)=>(
                                        <li>
                                             <Link 
                                                  className="relative block rounded-full bg-primary px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-secondary  "
                                                  href={`/product/page/${p+1}`}
                                             >{p+1}</Link>
                                        </li>
                                        ))
                              }
                         <li>
                              <a
                                   className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                   href="#!"
                              >Next</a
                              >
                         </li>
                    </ul>
               </nav>
          </>
     )
}

export default Pagination