import React, { useState } from 'react'

const HowToBuy = () => {
     const [videoToggle, setVideoToggle] = useState(false)
     return (
          <section className='mt-4'>
               <div className='flex justify-end'>
                    <button onClick={() => setVideoToggle(!videoToggle)} className={`text-lg font-normal hover:bg-gray-100 px-6 py-1 ${videoToggle && 'bg-gray-100'} rounded-md`}>Watch Video - How to place an Order!</button>
               </div>
               {
                    videoToggle && <div className='mt-4'>
                         <video className="w-full" controls>
                              <source src="/videos/how-to-order-printwish.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                         </video>
                    </div>
               }

          </section>
     )
}

export default HowToBuy