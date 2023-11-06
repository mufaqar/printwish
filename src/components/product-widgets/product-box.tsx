import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Product_Box = ({ data, image }: any) => {
  
  const smallPrice = data?.meta_data?.find((item: any) => item.key === "whitesmall")
  const colors_lenght = data?.attributes?.find((cl: any) => (cl.name === 'Color')) || data?.allPaColor?.nodes?.length || "1"
  const simplePrice = data?.price?.replace('£', '')
  const [openRating, setOpenRating] = useState(false)

  const ratingData = {
    rating: data?.meta_data?.find((i: any) => i.key === "product_rating_rating_number"),
    ratingStarUrl: data?.meta_data?.find((i: any) => i.key === "product_rating_star_image"),
    ratingStatsUrl: data?.meta_data?.find((i: any) => i.key === "product_rating_rating_image")
  }


  return (
    <article className="p-1 relative">
      <div className='p-1 border border-gray-200 pb-4'>
        <Link href={`/product/${data?.slug}`} className='border-b-[1px] border-gray-100 p-2 md:h-[300px] cursor-pointer mb-2 flex flex-col justify-center items-center group'>
          <Image src={image} alt={data?.title || data?.name} width={200} height={200} className='object-contain h-[180px] transition-all duration-200 ease-in-out w-full mb-3 group-hover:scale-95 md:h-full' />
        </Link>
        <div className='flex flex-col justify-center items-center'>
          <h5 className="min-h-[40px]">
            <Link href={`/product/${data?.slug}`} className='text-sm font-bold flex font-roboto text-accent hover:text-secondary'>
              <span className='text-center'>{data?.title || data?.name}</span>
            </Link>
          </h5>
          <p className='text-xs text-center text-secondary sm:text-base'>
            <strong>{colors_lenght?.options?.length || colors_lenght}</strong> Colors available
          </p>

          <p className='text-center font-bold font-roboto mb-3 text-primary'>
            From <span className='text-secondary  hover:text-secondary'>£{smallPrice?.value || data?.poductInfo?.whitesmall || simplePrice}</span>
          </p>
          {
            ratingData?.ratingStarUrl?.value.length > 2 && <div onClick={() => setOpenRating(!openRating)} className='flex flex-col -mt-3 justify-center items-center'>
              <div className='items-center'>
                <Image src={ratingData?.ratingStarUrl?.value} alt="rating" width={200} height={200} className="max-w-[120px] sm:w-full cursor-pointer" />
              </div>
              <div className='flex items-center mb-2 gap-1'>
                <span className='font-normal text-sm whitespace-nowrap'>{ratingData?.rating?.value} Reviews</span>
                <button>
                  {
                    openRating ? <IoIosArrowUp className='text-lg cursor-pointer' /> : <IoIosArrowDown className='text-lg cursor-pointer' />
                  }
                </button>
              </div>

              {
                openRating && <Image src={ratingData?.ratingStatsUrl?.value} alt="rating" width={500} height={200} className="absolute -bottom-[72px] right-0 z-10 drop-shadow-xl" />
              }
            </div>
          }

          <Link href={`/product/${data?.slug}`} className='text-xs sm:text-base relative font-semibold flex justify-center text-center font-roboto uppercase bg-primary text-white px-2 md:px-6 py-1 hover:bg-transparent hover:text-primary border-primary border-2 hover:border-primary'
          >
            View Product
          </Link>
        </div>
      </div>
      {
        data?.featured && <div className='absolute bg-green-400 p-1 text-white px-3 top-3 right-3 text-sm '>Best Seller</div>
      }

    </article>
  )
}

export default Product_Box