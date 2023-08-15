import React from 'react'
import HashLoader from "react-spinners/HashLoader";

const Loader = ({isLoading}) => {
     return (
          <div className='fixed inset-0 flex flex-col justify-center items-center bg-black/70 z-50'>
               <HashLoader
                    color={`#36d7b7`}
                    loading={isLoading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
               />
          </div>
     )
}

export default Loader