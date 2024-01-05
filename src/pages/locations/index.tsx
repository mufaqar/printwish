import SeoMeta from '@/components/seo/Seo'
import { SettingsContext } from '@/context/global-context'
import Head from 'next/head'
import Link from 'next/link'
import React, { useContext } from 'react'

const Locations = () => {
     const { locations } = useContext(SettingsContext)
     return (
          <>

               <SeoMeta title="Locations | Printwish"
                    description="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.9"
                    url="locations"
               />


               <section className='container mx-auto px-4 my-16'>
                    <h4 className='text-secondary text-2xl md:text-3xl'>Locations</h4>
                    <ul className='grid mt-8 grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                         {
                              locations?.map((item: any, idx: number) => (
                                   <li key={idx}>
                                        <span className='text-gray-500 mr-1'>{idx + 1}.</span>
                                        <Link href={item?.slug} className="cursor-pointer tracking-wider font-light hover:underline text-secondary capitalize">
                                             T-Shirt Printing {item?.title}
                                        </Link>
                                   </li>
                              ))
                         }
                    </ul>
               </section>
          </>
     )
}

export default Locations