import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const CookiesMessage = ({ setCookies }) => {

     const handleCookies = () => {
          localStorage.setItem('cookies', "true")
          setCookies(false)
     }

     return (
          <section className='fixed bottom-0 w-full bg-primary items-center pt-20 md:pt-0 py-5 px-12 '>
               <div className="flex relative flex-col md:flex-row gap-10 text-white">
                    <div className="flex-1 font-thin text-center md:text-left">
                         We use our own cookies as well as third-party cookies on our websites to enhance your experience, analyze our traffic, and for security and marketing. Select "Accept All" to allow them to be used. Read our <a href="#" target="_blank" className='hover:underline text-secondary'>Privacy Policy</a>.
                    </div>
                    <button className="bg-secondary w-full md:w-auto px-8 whitespace-nowrap hover:scale-105 py-2" onClick={handleCookies}>Accept All</button>
                    <RxCross1 className="text-2xl absolute -top-12 -right-5 md:relative cursor-pointer " onClick={handleCookies} />
               </div>
          </section>
     )
}

export default CookiesMessage