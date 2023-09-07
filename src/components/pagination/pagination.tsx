'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";


const Pagination = ({perPage}:any) => {
     const [pageNumber, setPageNumber] = useState<any>()
     const { query } = useRouter()
     const params = useRouter()
     const [allProductsCount, setAllProductsCount] = useState<any>()
     console.log("🚀 ~ file: pagination.tsx:13 ~ Pagination ~ allProductsCount:", allProductsCount)

     useEffect(() => {
          const f = async () => {
               const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/custom-post-api/v1/post-count`);
               const totalCount = await response.json();
               const c = Math.ceil(totalCount.post_count/perPage)
               const numberArray = Array.from({ length: c }, (_, index) => index + 1);
               numberArray.pop() // remove last Item
               setAllProductsCount(numberArray)
          }
          f()
     }, [])


     useEffect(() => {
          setPageNumber(query?.number)
     }, [pageNumber, params, query])

     const PreviousPage = () => {

          if (pageNumber <= 1) {
               setPageNumber(1);
               return null
          } else {
               params.push(`/product/page/${+pageNumber - 1}`)
               setPageNumber(+pageNumber - 1);
          }
          if(!pageNumber){
               params.push(`/product/page/1`)
          }
          
     }

     const NextPage = () => {
          if(allProductsCount?.length+1 === +pageNumber){
               return null
          }
          params.push(`/product/page/${+pageNumber + 1}`)
          setPageNumber(+pageNumber + 1)
          if(!pageNumber){
               params.push(`/product/page/2`)
          }
     }


     return (
          <>
               <nav aria-label="Page navigation" className='flex justify-center items-center mt-20'>
                    <ul className="list-style-none gap-2 flex">

                         <li
                              onClick={PreviousPage}
                              className="relative block cursor-pointer rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-secondary hover:text-white bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                         >Previous

                         </li>
                         {
                              allProductsCount?.slice(0,4)?.map((p: any, idx: number) => (
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
                              className="relative block rounded-full cursor-pointer bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-secondary hover:text-white bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                         >Next

                         </li>
                    </ul>
               </nav>
          </>
     )
}

export default Pagination