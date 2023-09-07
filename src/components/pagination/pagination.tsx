'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";


const Pagination = () => {
     const [pageNumber, setPageNumber] = useState<any>()
     const { query } = useRouter()
     const params = useRouter()

     useEffect(() => {
          setPageNumber(query?.number)
     }, [pageNumber, params, query])

     const PreviousPage = () => {
          if (pageNumber <= 1) {
               params.push(`/product/page/1`)
               setPageNumber(1);
          } else {
               params.push(`/product/page/${+pageNumber - 1}`)
               setPageNumber(+pageNumber - 1);
          }
     }

     const NextPage = () => {
          params.push(`/product/page/${+pageNumber + 1}`)
          setPageNumber(+pageNumber + 1)
     }
     
     return (
          <>
               <nav aria-label="Page navigation" className='flex justify-center items-center mt-20'>
                    <ul className="list-style-none gap-2 flex">

                         <li
                              onClick={PreviousPage}
                              className="relative block cursor-pointer rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                         >Previous

                         </li>
                         {
                              [1, 2, 3, 4].map((p: any, idx: number) => (
                                   <li key={idx}>
                                        <Link
                                             className={`relative block rounded-full  px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-secondary  ${pageNumber === p ? '!bg-primary' : 'bg-primary'} `}
                                             href={`/product/page/${p + 1}`}
                                        >{p + 1}</Link>
                                   </li>
                              ))
                         }
                         <li
                              onClick={NextPage}
                              className="relative block rounded-full cursor-pointer bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                         >Next

                         </li>
                    </ul>
               </nav>
          </>
     )
}

export default Pagination