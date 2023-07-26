import React from 'react'

const FontsAndColor = () => {
     return (
          <section className='mt-4 bg-background p-8 rounded-lg'>
               <h6 className='text-xl font-light text-accent'>CUSTOMISATION:</h6>
               <div className='mt-5 flex gap-4'>
                    <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option selected>Select Font</option>
                         <option value="US">Black One</option>
                         <option value="CA">Black Two</option>
                         <option value="FR">Civic</option>
                    </select>
                    <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option selected>Select Color</option>
                         <option value="US">Black</option>
                         <option value="CA">Green</option>
                         <option value="FR">Pink</option>
                         <option value="FR">Red</option>
                         <option value="FR">Orange</option>
                         <option value="FR">Blue</option>
                    </select>
               </div>
          </section>
     )
}

export default FontsAndColor