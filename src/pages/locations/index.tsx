import { SettingsContext } from '@/context/global-context'
import Head from 'next/head'
import Link from 'next/link'
import React, { useContext } from 'react'

const Locations = () => {
     const { locations } = useContext(SettingsContext)
     return (
          <>
          <Head>
        <title>Locations | Printwish</title>
        <meta name="description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
        <link rel="canonical" href="https://printwish.co.uk/locations" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Locations" />
        <meta property="og:description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
        <meta property="og:url" content="https://printwish.co.uk/locations" />
        <meta property="og:site_name" content="PrintWish T-Shirt Printing" />
        <meta property="article:publisher" content="https://www.facebook.com/printwishuk" />
        <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
        <meta property="og:image" content="https://printwish.co.uk/wp-content/uploads/2020/03/DTG-Printing-Image.-.jpg" />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="467" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrintwishUk" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="57 minutes" />
      </Head>
          
          <section className='container mx-auto px-4 my-16'>
               <h4 className='text-secondary text-2xl md:text-3xl'>Locations</h4>
               <ul className='grid mt-8 grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {
                         locations?.map((item: any, idx: number) => (
                              <li key={idx}>
                                   <span className='text-gray-500 mr-1'>{idx+1}.</span>
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