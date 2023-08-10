import { SettingsContext } from "@/context/global-context"
import { useContext } from "react"
import { FaThumbsUp } from "react-icons/fa"
import { toast } from "react-toastify"


const SizeAndInstruction = () => {
     const { specialInstruction, setSpecialInstruction, customisationName, setSelectedCustomizedLayout,
          setcustomisationName, designWidth, setDesignWidth, colorsInLogo, selectedProduct, setSelectArt,
           selectedCustomizedLayout, setSelectedProduct, imageURL, setCustomizationButton,
           setColorsInLogo, setImageURL } = useContext(SettingsContext)

     const addCustomization = () => {
          if (!customisationName || !colorsInLogo || !imageURL || !designWidth) {
               toast.warn("Customization Not Added Please Fill All Fields!")
          } else {
               var artwork = [...selectedProduct.designArtWork]
               var artWorkData = {
                    numberOfColorInLogo: colorsInLogo,
                    imageURL,
                    designWidth,
                    specialInstruction,
                    customisationName,
                    designPosition: selectedCustomizedLayout,
               }
               artwork.push(artWorkData)
               setSelectedProduct({ ...selectedProduct, designArtWork: artwork })
               
               // customization states reset 
               setCustomizationButton(false)
               setSelectedCustomizedLayout()
               setSelectArt('')
               setColorsInLogo()

               // reset fields
               setImageURL('')
               setDesignWidth()
               setSpecialInstruction()
               setcustomisationName()
          }
     }

     return (
          <>
               {/* Choose design width: */}
               <div>
                    <h5 className='text-xl font-semibold text-accent font-roboto mt-6'>Choose design width:</h5>
                    <ul className='flex gap-4 mt-5 flex-wrap items-center'>
                         {
                              designWidthData.map((item: any, idx: number) => {
                                   return (
                                        <li key={idx} onClick={() => setDesignWidth(item.value)} className={` p-2.5 cursor-pointer px-8 text-lg bg-white rounded-full border-[2px] ${designWidth === item.value ? ' border-secondary' : 'border-transparent'}`}>{item?.name}</li>
                                   )
                              })
                         }
                         <span className='text-lg'>Custom width:</span>
                         <li className={`flex items-center p-1.5 cursor-pointer px-8 text-lg bg-white rounded-full border-[2px] ${designWidth === '10' || designWidth === '20' || designWidth === '30' ? 'border-transparent' : "border-secondary"}`}>
                              <input type="number" className='w-20 border-none  focus:ring-0 focus:outline-none' name="number" value={designWidth} onChange={(e) => setDesignWidth(e.target.value)} />
                              <span className='border-l-[1.5px] pl-4 border-gray-200'>cm</span>
                         </li>
                    </ul>
               </div>

               <div>
                    <h5 className='text-xl font-semibold text-accent font-roboto mt-6 mb-5'>Notes or special instructions:</h5>
                    <input type="text" id="large-input" className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md  "
                         name="Notes"
                         value={specialInstruction}
                         placeholder='Please let us know if you have any special requirements'
                         onChange={(e) => setSpecialInstruction(e.target.value)}
                    />
                    <h5 className='text-xl font-semibold text-accent font-roboto mt-6 mb-5'>Customisation name:</h5>
                    <input type="text" id="large-input" className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md  "
                         name="Notes"
                         value={customisationName}
                         placeholder='Enter the name of your customisation here'
                         onChange={(e) => setcustomisationName(e.target.value)}
                    />
               </div>

               <p className='mt-7 text-lg font-roboto text-secondary'>Please note, that if you have uploaded new artwork, we will send you an artwork proof request by email/SMS once your artwork is processed. You <strong>must approve</strong> the proof before your order can progress to production.</p>
               <div onClick={() => addCustomization()} className='inline-flex uppercase font-light items-center text-xl cursor-pointer mt-7 border border-secondary gap-2 py-3 bg-secondary text-white px-8 hover:text-secondary hover:bg-transparent rounded-full'>
                    <FaThumbsUp /> Confirm Customisation
               </div>
          </>
     )
}

export default SizeAndInstruction

const designWidthData = [
     {
          name: "Small (10cm)",
          value: '10'
     },
     {
          name: "Medium (20cm)",
          value: '20'
     },
     {
          name: "Large (30cm)",
          value: '30'
     }
]