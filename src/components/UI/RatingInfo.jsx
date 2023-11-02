import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const RatingInfo = () => {
     const [openRating, setOpenRating] = useState(false)

     return (
          <div className='flex items-center justify-center gap-4 mt-4 relative'>
               <Image src="/images/rating-star.png" alt="rating" width={250} height={200} className="max-w-[300px] sm:w-full cursor-pointer" />
               <button onClick={() => setOpenRating(!openRating)}>
                    {
                         openRating ? <IoIosArrowUp className='text-3xl mt-2 cursor-pointer' /> : <IoIosArrowDown className='text-2xl mt-1 cursor-pointer' />
                    }
               </button>
               {
                    openRating && <Image src="/images/rating-bar.png" alt="rating" width={500} height={200} className="absolute top-8 left-0 z-10 drop-shadow-xl" />
               }
               
          </div>
     )
}

export default RatingInfo