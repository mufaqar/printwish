import Head from 'next/head';

const SeoMeta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title} | Printwish</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://printwish.co.uk/${url}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://printwish.co.uk/${url}`} />
      <meta property="og:site_name" content="PrintWish T-Shirt Printing" />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/printwishuk"
      />
      <meta
        property="article:modified_time"
        content="2023-07-06T22:58:46+00:00"
      />
      <meta
        property="og:image"
        content="https://printwish.co.uk/images/logo.png"
      />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@PrintwishUk" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="12 minutes" />
    </Head>
  );
};

export default SeoMeta;
