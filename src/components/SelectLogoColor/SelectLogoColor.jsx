import { SettingsContext } from '@/context/global-context';
import React, { useContext } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

const SelectLogoColor = ({ colorsInLogo, handleSelectedColor }) => {
  const { selectedVariants } = useContext(SettingsContext);

  return (
    <>
      <div className="px-4 py-6 border border-black/60 rounded">
        <h5 className="text-xl font-semibold text-accent pl-2 font-roboto">
          Step 3 - Number of colours per artwork
        </h5>
        <p className="pl-2">How many colors your logo design is?</p>
      </div>
      <section className="bg-gray-50 md:p-6 p-5 border-[1.5px] rounded-lg border-gray-50  mt-4">
        {selectedVariants?.map((v, id) => (
          <div key={id}>
            <h5
              className={`text-xl font-semibold text-accent pl-2 font-roboto ${
                id !== 0 && 'mt-5'
              }`}
            >
              For Position {id + 1}
            </h5>
            <div
              key={id}
              className="items-center justify-center  mt-4 gap-2 p-0 grid md:grid-cols-5 md:w-3/4 "
            >
              {[1, 2, 3, 4, 5].map((item, idx) => (
                <div className="relative" key={idx}>
                  <button
                    onClick={() => handleSelectedColor(v, item)}
                    className={`w-full text-center p-2 cursor-pointer px-8  text-lg bg-white rounded border-[2px] ${
                      colorsInLogo === item
                        ? ' border-secondary'
                        : 'border-gray-100 hover:border-main'
                    }`}
                  >
                    <h2 className='text-[100px] leading-loose '> {item} </h2>
                    <span className="p-1 px-3   ">
                      {item} 
                    </span>
                    {item === 5
                      ? 'Full Colours'
                      : item > 1
                      ? 'Colours'
                      : 'Colour'}
                  </button>
                  {colorsInLogo?.some(
                    (i) => i.variantName === v && i.colorInLogo === item
                  ) && (
                    <FaCircleCheck className="text-secondary absolute right-1 -top-2 bg-white rounded-full text-xl" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default SelectLogoColor;
