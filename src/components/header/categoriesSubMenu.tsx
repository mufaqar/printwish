import React from 'react'
import { NavLinks, NavLinksType } from '@/const/navlinks'
import Link from 'next/link';
import { Categories } from '@/const/categories';

const CategoriesSubMenu = ({categories, setMobileMenu}:any) => {
  return (
    <div className="md:absolute md:mr-5 z-50 !bg-secondary !w-44 pt-4 md:pt-7">
      {NavLinks.slice(4, 5).map((item: NavLinksType, idx: number) => {
        return (
          <div key={idx}>
            <ul className='md:pb-2'>
              {Categories?.map((sub_item: any, _idx: any) => {
                return <li key={_idx} className="px-5 py-1.5 relative cursor-pointer group" onClick={()=>setMobileMenu(false)}>
                  <Link href={`${sub_item.link}`} className="text-xs  cursor-pointer w-full hover:!text-gray-700 !text-white font-semibold text-accent uppercase">
                    {sub_item?.name}
                  </Link>
                  <span className="absolute h-full p-[2px] bg-gray-700 top-0 left-0 hidden group-hover:block"/>
                </li>
              })}
            </ul>
          </div>
        );
      })}
    </div>
  )
}

export default CategoriesSubMenu