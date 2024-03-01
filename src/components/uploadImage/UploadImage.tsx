import Image from "next/image";
import { useContext, useState } from "react";
import { SettingsContext } from "@/context/global-context";
import useImageUpload from '@/hooks/useImageUpload'

const UploadImage = () => {
  const { selectedVariants, uploadedImages } = useContext(SettingsContext);
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
            <div className='grid gap-6 grid-cols-4 bg-white p-4 rounded-xl'>
            <div className="flex items-center justify-start ">
                <Image
                  src={uploadedImages.find((image: any) => image.item === item)?.link || '/images/capture.png'}
                  alt="Selected Preview"
                  width={200}
                  height={100}
                  className='rounded-lg w-full'
                />
              </div>
              <div className="flex items-center justify-center w-full md:min-h-[120px] md:col-span-3">
                <label className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  {loading ? ( // Show loading indicator when uploading
                    <p>Loading...</p>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
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
