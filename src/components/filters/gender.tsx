import { Genders, GendersType } from '@/const/filters'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const Gender = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='border-b'>
      <div onClick={() => setOpen(!open)} className='flex justify-between items-center cursor-pointer'>
        <h3 className='text-lg font-semibold font-opensans text-accent mb-3'>
          Gender
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
          {Genders?.map((item: GendersType, idx: number) => {
            return <li key={idx}>
              <input id={item?.id} className="hidden" type="checkbox" name="gender" />
              <label htmlFor={item?.id} className="text-base font-medium text-accent border-2 border-background px-3 py-1 rounded-sm cursor-pointer">
                {item?.gender} 93
              </label>
            </li>
          })}

        </ul>
      </div>
    </div>
  )
}

export default Gender