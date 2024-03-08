import Image from "next/image";
import { useContext, useState } from "react";
import { SettingsContext } from "@/context/global-context";
import useImageUpload from '@/hooks/useImageUpload'

const UploadImage = () => {
  const { selectedVariants, uploadedImages, imageName } = useContext(SettingsContext);
  const { loading, handleImageChange } = useImageUpload();

  return (
    <>

      <div className="px-4 py-6 border border-black/60 rounded">
        <h5 className="text-xl font-semibold text-accent pl-2 font-roboto">
          Step 4- Upload your artwork (Optional)
        </h5>

      </div>
      <section className="grid lg:grid-cols-2 gap-6 ">
        {selectedVariants?.map((item: any, idx: number) => (
          <div key={idx}>
            <h5 className={`text-xl font-semibold text-accent pl-2 mb-2 font-roboto`}>{item} Artwork</h5>
            <div className=' bg-white p-4 rounded-xl'>

              <div className="flex flex-col md:flex-row w-full min-h-[120px] border-2 border-gray-300 border-dashed rounded-lg">
                {
                  uploadedImages.find((image: any) => image.item === item)?.link && <>
                  <div className="flex items-start justify-start px-3 py-4 gap-4">
                  <Image
                    src={uploadedImages.find((image: any) => image.item === item)?.link || '/images/capture.png'}
                    alt="Selected Preview"
                    width={140}
                    height={100}
                    className='rounded-lg'
                  />
                  <p className="md:hidden">{imageName}</p>
                  </div>
                  </>
                }
                
                <label className="flex flex-col min-h-[120px] items-center justify-center w-full h-auto rounded-xl  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  {loading ? ( // Show loading indicator when uploading
                    <p>Loading...</p>
                  ) : (
                    <div className="flex items-center justify-center pt-5 pb-6 gap-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Drag and drop or</p>
                      <button className="bg-secondary text-white p-2 rounded-lg px-4" onClick={(e) => handleImageChange(e, item)}>Select File</button>
                    </div>
                  )}
                  <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleImageChange(e, item)} />
                </label>
              </div>

            </div>
          </div>
        ))}
      </section>
      <p className="text-gray-600 text-sm mt-3">Accepted file types: jpg, png, pdf, eps, ai, jpeg, Max. file size: 16 MB.</p>
      <p className="text-gray-600 text-sm">Artwork must be vectored PDF set to print size or extra artwork charges may apply</p>
    </>
  )
}

export default UploadImage;
