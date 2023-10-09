import { SettingsContext } from "@/context/global-context"
import { uid } from "@/utils"
import { useContext } from "react"
import { FaThumbsUp } from "react-icons/fa"
import { toast } from "react-toastify"
import designWidthData from '../../const/designWidth'


const SizeAndInstruction = () => {
     const { specialInstruction, setSpecialInstruction, customisationName, setSelectedCustomizedLayout,
          setcustomisationName, designWidth, setDesignWidth, colorsInLogo, selectedProduct, setSelectArt,
          selectedCustomizedLayout, setSelectedProduct, imageURL, setCustomizationButton, textCreatorLine,
          setColorsInLogo, setImageURL, setCreatorStateLine, designPosition } = useContext(SettingsContext)


     const lineOne: any = {
          name: 'line-1',
          text: textCreatorLine.text1,
          font: textCreatorLine.font1,
          color: textCreatorLine.color1,
          size: textCreatorLine.size1,
     };
     const lineTwo: any = {
          name: 'line-2',
          text: textCreatorLine.text2,
          font: textCreatorLine.font2,
          color: textCreatorLine.color2,
          size: textCreatorLine.size2,
     }
     const lineThree: any = {
          name: 'line-3',
          text: textCreatorLine.text3,
          font: textCreatorLine.font3,
          color: textCreatorLine.color3,
          size: textCreatorLine.size3,
     }

     const addCustomization = () => {

          // here are two option 1- Upload Image and 2nd one is Text creator so 
          // i can saprate with one field with colorsInLogo
          if (imageURL) {
               if (!customisationName || !imageURL || !designWidth) {
                    toast.warn("Customization Not Added Please Fill All Fields!")
               } else {
                    var artwork = [...selectedProduct.designArtWork]
                    var artWorkData = {
                         id: uid(),
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
          } else {

               if (!customisationName || !textCreatorLine.text1 || !designWidth) {
                    toast.warn("Customization Not Added Please Fill All Fields!")
               } else {
                    var textCreator = [...selectedProduct.textCreator]
                    var textCreatorData: any = {
                         id: uid(),
                         designWidth,
                         specialInstruction,
                         customisationName,
                         designPosition: selectedCustomizedLayout,
                         lines: []
                    }

                    if (textCreatorLine.text1.length > 0) {
                         textCreatorData?.lines.push(lineOne)
                    }
                    if (textCreatorLine.text2.length > 0) {
                         textCreatorData?.lines.push(lineTwo)
                    }
                    if (textCreatorLine.text3.length > 0) {
                         textCreatorData?.lines.push(lineThree)
                    }

                    textCreator.push(textCreatorData)
                    setSelectedProduct({ ...selectedProduct, textCreator: textCreator })
                    setCreatorStateLine({
                         text1: '',
                         color1: '',
                         size1: '',
                         font1: '',
                         text2: '',
                         color2: '',
                         size2: '',
                         font2: '',
                         text3: '',
                         color3: '',
                         size3: '',
                         font3: '',
                    })
                    // customization states reset 
                    setCustomizationButton(false)
                    setSelectedCustomizedLayout()
                    setSelectArt('')
                    // reset fields
                    setDesignWidth()
                    setSpecialInstruction()
                    setcustomisationName()
               }
          }

     }

     const designWidthSizes = designWidthData.find(i=>i.type === designPosition)

     return (
          <>
               {/* Choose design width: */}
               <div>
                    <h5 className='text-xl font-semibold text-accent font-roboto mt-6'>Choose design width: *</h5>
                    <ul className='flex gap-4 mt-5 flex-wrap items-center'>
                         {
                              designWidthSizes?.sizes?.map((item: any, idx: number) => {
                                   return (
                                        <li key={idx} onClick={() => setDesignWidth(item.value)} className={` p-2.5 cursor-pointer px-8 text-lg bg-white rounded-full border-[2px] ${designWidth === item.value ? ' border-secondary' : 'border-transparent'}`}>{item?.name}</li>
                                   )
                              })
                         }
                         <span className='text-lg'>Custom width:</span>
                         <li className={`flex items-center p-1.5 cursor-pointer px-8 text-lg bg-white rounded-full ${!designWidth ? 'border-red-500': 'border-transparent'} border-[2px] ${designWidth === '10' || designWidth === '20' || designWidth === '30' ? 'border-transparent' : "border-secondary"}`}>
                              <input type="number" className={`w-20  focus:ring-0 border-none focus:outline-none `} name="number" value={designWidth} onChange={(e) => setDesignWidth(e.target.value)} />
                              <span className='border-l-[1.5px] pl-4 border-gray-200'>cm</span>
                         </li>
                    </ul>
               </div>

               <div>
                    <h5 className='text-xl font-semibold text-accent font-roboto mt-6 mb-5'>Notes or special instructions: *</h5>
                    <input type="text" id="large-input" className={`block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md ${!specialInstruction && 'border-red-500' } `}
                         name="Notes"
                         value={specialInstruction}
                         placeholder='Please let us know if you have any special requirements'
                         onChange={(e) => setSpecialInstruction(e.target.value)}
                    />
                    <h5 className='text-xl font-semibold text-accent font-roboto mt-6 mb-5'>Customisation name: *</h5>
                    <input type="text" id="large-input" className={`block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md ${!customisationName && 'border-red-500' } `}
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



