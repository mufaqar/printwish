import { SettingsContext } from '@/context/global-context'
import React, { useContext } from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import SizeAndInstruction from '../sizeAndInstruction/SizeAndInstruction'

const TextCreator = () => {
     const { textCreatorLine, handleChangeTextCreatorLine } = useContext(SettingsContext)


     return (
          <section className='mt-4 bg-background p-8 rounded-lg'>
               <div className="text-xl">LINE 1</div>
               <div className="mb-6 mt-4">
                    <input type="text" id="large-input" className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md  "
                         name="text1"
                         value={textCreatorLine.text1}
                         onChange={handleChangeTextCreatorLine}
                    />
                    <div className='mt-5 flex gap-4'>
                         <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              name="size1"
                              value={textCreatorLine.size1}
                              onChange={handleChangeTextCreatorLine}
                         >
                              <option selected>Select Size</option>
                              <option value="Small">Small</option>
                              <option value="Medium">Medium</option>
                              <option value="Large">Large</option>
                              <option value="X-Large">X-Large</option>
                         </select>
                         <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              name="font1"
                              value={textCreatorLine.font1}
                              onChange={handleChangeTextCreatorLine}>
                              <option selected>Select Font</option>
                              <option value="Black One">Black One</option>
                              <option value="Black Two">Black Two</option>
                              <option value="Civic">Civic</option>
                         </select>
                         <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              name="color1"
                              value={textCreatorLine.color1}
                              onChange={handleChangeTextCreatorLine}>
                              <option selected>Select Color</option>
                              <option value="Black">Black</option>
                              <option value="Green">Green</option>
                              <option value="Pink">Pink</option>
                              <option value="Red">Red</option>
                              <option value="Orange">Orange</option>
                              <option value="Blue">Blue</option>
                         </select>
                    </div>
               </div>

               <div className="text-xl">LINE 2 (Optional)</div>
               <div className="mb-6 mt-4">
                    <input type="text" id="large-input" name="text2"
                         value={textCreatorLine.text2}
                         onChange={handleChangeTextCreatorLine} className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md  " />
                    <div className='mt-5 flex gap-4'>
                         <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              name="size2"
                              value={textCreatorLine.size2}
                              onChange={handleChangeTextCreatorLine}>
                              <option selected>Select Size</option>
                              <option value="Small">Small</option>
                              <option value="Medium">Medium</option>
                              <option value="Large">Large</option>
                              <option value="X-Large">X-Large</option>
                         </select>
                         <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              name="font2"
                              value={textCreatorLine.font2}
                              onChange={handleChangeTextCreatorLine}>
                              <option selected>Select Font</option>
                              <option value="Black One">Black One</option>
                              <option value="Black Two">Black Two</option>
                              <option value="Civic">Civic</option>
                         </select>
                         <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              name="color2"
                              value={textCreatorLine.color2}
                              onChange={handleChangeTextCreatorLine}>
                              <option selected>Select Color</option>
                              <option value="Black">Black</option>
                              <option value="Green">Green</option>
                              <option value="Pink">Pink</option>
                              <option value="Red">Red</option>
                              <option value="Orange">Orange</option>
                              <option value="Blue">Blue</option>
                         </select>
                    </div>
               </div>

               <div className="text-xl">LINE 3 (Optional)</div>
               <div className="mb-6 mt-4">
                    <input type="text" id="large-input" name="text3"
                         value={textCreatorLine.text3}
                         onChange={handleChangeTextCreatorLine} className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md  " />
                    <div className='mt-5 flex gap-4'>
                         <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              name="size3"
                              value={textCreatorLine.size3}
                              onChange={handleChangeTextCreatorLine}>
                              <option selected>Select Size</option>
                              <option value="Small">Small</option>
                              <option value="Medium">Medium</option>
                              <option value="Large">Large</option>
                              <option value="X-Large">X-Large</option>
                         </select>
                         <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              name="font3"
                              value={textCreatorLine.font3}
                              onChange={handleChangeTextCreatorLine}>
                              <option selected>Select Font</option>
                              <option value="Black One">Black One</option>
                              <option value="Black Two">Black Two</option>
                              <option value="Civic">Civic</option>
                         </select>
                         <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              name="color3"
                              value={textCreatorLine.color3}
                              onChange={handleChangeTextCreatorLine}>
                              <option selected>Select Color</option>
                              <option value="US">Black</option>
                              <option value="CA">Green</option>
                              <option value="FR">Pink</option>
                              <option value="FR">Red</option>
                              <option value="FR">Orange</option>
                              <option value="FR">
                                   <span className=''>Blue</span>
                              </option>
                         </select>
                    </div>
               </div>
               {/* Text preview: */}
               <div>
                    <h5 className='text-xl font-semibold text-accent font-roboto'>Text preview:</h5>
                    <div className='text-center p-10 bg-white mt-5 rounded-lg'>
                         <h6 className={`text-2xl font-medium`}>{textCreatorLine.text1}</h6>
                         <p className='text-xl'>{textCreatorLine.text2}</p>
                         <p className='text-xl'>{textCreatorLine.text3}</p>
                    </div>
               </div>

               <SizeAndInstruction />


          </section>
     )
}

export default TextCreator


