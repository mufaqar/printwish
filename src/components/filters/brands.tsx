import { Brands, BrandsType, Customisations, CustomisationsType } from '@/const/filters'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const BrandsFilters = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='border-b'>
            <div onClick={() => setOpen(!open)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='text-lg font-semibold font-opensans text-accent mb-3'>
                    Brand
                </h3>
                {
                    open ? (
                        <BsChevronUp size={16} />
                    ) : (
                        <BsChevronDown size={16} />
                    )
                }
            </div>
            <div className={` ${open ? 'block mb-5' : 'hidden'}`}>
                <label htmlFor="brands" className="hidden">Brands</label>
                <select id="brands" className="bg-transparent border border-background text-accent text-base rounded-lg focus:ring-background focus:border-background block w-full p-2.5 ">
                    {Brands?.map((item: BrandsType, idx: number) => {
                        return <option key={idx} value={item?.id} className="text-base font-normal text-accent cursor-pointer w-full flex justify-between">
                            {item?.brand} 93
                        </option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default BrandsFilters