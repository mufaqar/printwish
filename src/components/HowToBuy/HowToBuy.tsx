import React, { useState } from 'react'

const HowToBuy = () => {
     const [videoToggle, setVideoToggle] = useState(false)
     return (
          <section className='mb-7'>
               <div className='flex justify-end'>
                    <button onClick={() => setVideoToggle(!videoToggle)} className={`sm:text-lg font-normal bg-primary text-white px-6 py-2 rounded-full`}>Watch Video - How to place an Order!</button>
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