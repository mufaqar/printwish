import PageBanner from '@/components/banner/page-banner'
import Product_Box from '@/components/product-widgets/product-box'
import { apiRequest } from '@/config/requests'
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Location from '../location'
import { client } from '@/config/client'
import { GetProductByTag, LOCATION_PAGE, PRODUCT_CATEGORY_INFO } from '@/config/query'
import Pagination from '@/components/pagination/pagination'
import Faqs from '@/components/faqs/faqs'
import Head from 'next/head'
import Reviews from '@/components/reviews/reviews'

const CategorySlug = ({ products, slug, pages, productsForLocationPage, category, categoryInfo }: any) => {


     const { query } = useRouter()
     const page = query?.page?.[0] ?? null;
     console.log("🚀 ~ file: index.tsx:19 ~ CategorySlug ~ page:", page)
     const pageTitle = page?.replace(/-/g, " ");
     function capitalizeWords(input: any) {
          return input.replace(/(^|\s)\S/g, function (match: any) {
               return match.toUpperCase();
          });
     }
     const capitalizedPageTitle = capitalizeWords(pageTitle);

     return (
          <>
               <Head>
                    <title>{capitalizedPageTitle} | Printwish</title>
                    <meta name="description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
                    <link rel="canonical" href={`https://www.printwish.co.uk/${page}`} />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={capitalizedPageTitle} />
                    <meta property="og:description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
                    <meta property="og:url" content={`https://printwish.co.uk/${page}`} />
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
               {
                    slug?.includes("t-shirt-printing") && slug !== "custom-t-shirt-printing-cheap-t-shirt-printing" ? <Location pages={pages} products={productsForLocationPage} /> : <>
                         {/* CATEGORY PAGE DATA ↓ */}
                         <PageBanner title={category.name} category={category} />
                         {
                              page === 't-shirts' && <section className='container mx-auto px-3 mt-2 md:mt-6'>
                                   <div className='font-bold text-xl md:text-2xl bg-primary text-white text-center mt-4 p-2'>BRANDED T-SHIRTS</div>
                              </section>
                         }
                          <Reviews />

                         {
                              products.length > 0 ? <div className='container mx-auto px-3 my-10 w-full'>
                                   <div className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-1 sm:gap-2 md:gap-4'>
                                        {products?.map((item: any, idx: number) => {
                                             const img = item?.images[0]?.src
                                             return <Product_Box key={idx} data={item} image={img} />
                                        })}
                                   </div>
                                   <div className='category_pages mt-10'>
                                        <div
                                             dangerouslySetInnerHTML={{ __html: categoryInfo?.content }}
                                        />
                                   </div>
                                   {
                                        categoryInfo?.faqs?.length > 0 && <div>
                                             <h2 className='text-gray-400 text-xl font-light md:text-3xl'> Frequently Asked Questions </h2>
                                             <Faqs data={categoryInfo?.faqs} />
                                        </div>
                                   }

                              </div> : <p className='container mx-auto px-3 my-20 w-full text-center'>Result Not Found!</p>
                         }

                    </>
               }
               {/* {
                    products?.length > 12 && <Pagination perPage="3" endpoint={`woocommerce-category-api/v1/product-count/${slug}`}/>
               } */}

               <div className='mb-16' />
          </>

     )
}

export default CategorySlug


export async function getServerSideProps({ params }: any) {
     const p = params.page
     const slug = p[0]

     if (slug.includes("t-shirt-printing") && slug !== "custom-t-shirt-printing-cheap-t-shirt-printing") {
          const response = await client.query({
               query: LOCATION_PAGE,
               variables: {
                    slug: `/locations/${slug}/`,
               },
          });
          const pages = response?.data?.locationBy;

          const { data } = await client.query({
               query: GetProductByTag,
               variables: {
                    tag: slug.replace('t-shirt-printing-', ''),
               },
          });

          const products = data.productTag?.products.nodes;

          /* The code `if(!pages) { return { notFound: true } }` is checking if the `pages` variable is
          falsy. If it is, it means that the requested location page does not exist or could not be
          found. In this case, the function returns `{ notFound: true }`, which tells Next.js to
          return a 404 page for this specific route. */
          if (!pages) {
               return {
                    notFound: true
               }
          }
          return {
               props: {
                    productsForLocationPage: products,
                    slug,
                    pages,
               },
          };
     }

     const response = await client.query({
          query: PRODUCT_CATEGORY_INFO,
          variables: {
               category: slug,
          },
     });

     const dataForCategory = {
          per_page: 100,
     };

     const caterogies = await apiRequest('POST', 'get-products-categories', dataForCategory)
     const getID = caterogies.products.find((item: any) => item.slug === slug)

     const dataForProducts = {
          per_page: 100,
          orderby: "menu_order",
          category: `${getID?.id}`,
     }
     const { products } = await apiRequest('POST', 'get-products', dataForProducts)

     if (!products) {
          return {
               notFound: true
          }
     }
     return {
          props: {
               products: products,
               slug,
               category: getID,
               categoryInfo: response?.data?.productCategory?.categoryInfo
          },
     };

}

// export const getStaticPaths: GetStaticPaths = async () => {
//      const paths: any = [];
//      return {
//           paths,
//           fallback: 'blocking',
//      };

// }
