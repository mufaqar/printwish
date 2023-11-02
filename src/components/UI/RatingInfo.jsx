import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const RatingInfo = ({data}) => {
     const [openRating, setOpenRating] = useState(false)

     return (
          <div className='flex items-center justify-center gap-2 mt-4 relative'>
               <div className='flex items-center gap-2'>
                    <Image src={data?.starImage?.mediaItemUrl} alt="rating" width={250} height={200} className="max-w-[120px] sm:max-w-[250px] sm:w-full cursor-pointer" />
                    <span className='font-semibold sm:text-lg whitespace-nowrap'>{data?.ratingNumber} Reviews</span>
               </div>
               <button onClick={() => setOpenRating(!openRating)}>
                    {
                         openRating ? <IoIosArrowUp className='text-xl sm:text-2xl mt-1 cursor-pointer' /> : <IoIosArrowDown className='text-xl sm:text-2xl mt-1 cursor-pointer' />
                    }
               </button>
               {
                    openRating && <Image src={data?.ratingImage?.mediaItemUrl} alt="rating" width={500} height={200} className="absolute top-8 md:top-10 left-0 z-10 drop-shadow-xl" />
               }
          </div>
     )
}

export default RatingInfo