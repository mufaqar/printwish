import { Colours, ColoursType } from '@/const/filters'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const ColorsFilter = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='border-b'>
            <div onClick={() => setOpen(!open)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='text-lg font-semibold font-opensans text-accent mb-3'>
                    Colours
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
                    {Colours?.map((item: ColoursType, idx: number) => {
                        return <li key={idx} >
                            <input id={item?.id} className="hidden" type="checkbox" name="colours" />
                            <label htmlFor={item?.id} className={`rounded-full shadow-md cursor-pointer`}>
                               <Image src={item?.img} alt='img' height={30} width={30} className='rounded-full shadow-md' />
                            </label>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ColorsFilter