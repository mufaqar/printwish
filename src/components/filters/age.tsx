import { AgeData, AgeDataType } from '@/const/filters'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const AgeFilters = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='border-b'>
            <div onClick={() => setOpen(!open)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='text-lg font-semibold font-opensans text-accent mb-3'>
                    Age
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
                <ul className='flex flex-wrap gap-x-3 gap-y-5'>
                    {AgeData?.map((item: AgeDataType, idx: number) => {
                        return <li key={idx} className='w-full flex items-center'>
                            <input id={item?.id} className="mr-2" type="checkbox" name="age" />
                            <label htmlFor={item?.id} className="text-base font-medium text-accent cursor-pointer w-full flex justify-between">
                                {item?.age} (93)
                            </label>
                        </li>
                    })}

                </ul>
            </div>
        </div>
    )
}

export default AgeFilters