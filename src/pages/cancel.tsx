import Head from 'next/head'
import React from 'react'
import { TbBasketOff } from 'react-icons/tb'

const Cancel = () => {
  return (
    <>
     <Head>
        <title>Cancle Order | Printwish</title>
        <meta name="description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
        <link rel="canonical" href="https://www.printwish.co.uk/cancle" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="cancle" />
        <meta property="og:description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
        <meta property="og:url" content="https://printwish.co.uk/cancle" />
        <meta property="og:site_name" content="PrintWish T-Shirt Printing" />
        <meta property="article:publisher" content="https://www.facebook.com/printwishuk" />
        <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
        <meta property="og:image" content="https://backend.printwish.co.uk/wp-content/uploads/2023/10/trust.png" />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="467" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrintwishUk" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="57 minutes" />
      </Head>
    <div className='flex flex-col items-center text-center my-20'>
      <TbBasketOff size={80} color="red"/>
      Your Order is Cancelled
    </div>
    </>
  )
}

export default Cancel