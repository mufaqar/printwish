import { NavLinks, NavLinksType } from '@/const/navlinks'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Product_Box from '../product-widgets/product-box'
import { Products, ProductsType } from '@/const/products'
import { BsBagCheck } from 'react-icons/bs'
import { Categories, CategoryType } from '@/const/categories'

const Header = () => {
  const [mega, setMega] = useState(false)
  return (
    <>
      <header className="shadow-md">
        <nav className="bg-accent">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="logo" width={100} height={200} />
            </Link>
            <p className='text-xl font-medium uppercase text-white text-center'>
              The UK's leading personalised clothing company
            </p>
            <div className="flex items-center justify-between">
              <ul className='flex gap-2 items-center'>
                <li>
                  <Link href="telto:08000510821" className='text-sm font-medium text-white hover:text-secondary hover:underline'>
                    0800 051 0821
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm font-medium text-white hover:text-secondary hover:underline">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="bg-secondary">
          <div className="grid py-4 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 md:px-6">
            <div className='flex gap-3 items-center mb-4 lg:order-2 lg:mb-0'>
              <form className="flex w-full">
                <label htmlFor="search-dropdown"
                  className="mb-2 text-sm font-medium text-accent sr-only ">Your Email</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown"
                  className="hidden md:inline-flex flex-shrink-0 z-10 items-center py-2.5 px-4 text-sm font-medium text-center text-accent bg-gray-100 border border-gray-200 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
                  type="button">All categories <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg></button>
                <div id="dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow "
                  data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
                  style={{ position: "absolute", inset: "auto auto 0px 0px", margin: "0px,", transform: "translate3d(897px, 5637px, 0px)" }}>
                  <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdown-button">
                    <li>
                      <button type="button"
                        className="inline-flex py-2 px-4 w-full hover:bg-gray-100 ">Mockups</button>
                    </li>
                    <li>
                      <button type="button"
                        className="inline-flex py-2 px-4 w-full hover:bg-gray-100 ">Templates</button>
                    </li>
                    <li>
                      <button type="button"
                        className="inline-flex py-2 px-4 w-full hover:bg-gray-100 ">Design</button>
                    </li>
                    <li>
                      <button type="button"
                        className="inline-flex py-2 px-4 w-full hover:bg-gray-100 ">Logos</button>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input type="search" id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-accent bg-gray-50 rounded-lg md:rounded-l-none md:border-l-gray-50 border-l-1 md:border-l-6 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search anything..." required />
                  <button type="submit"
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primary rounded-r-lg border border-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary "><svg
                      className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg></button>
                </div>
              </form>
              <div className="w-fit">
                <ul className='flex sm:gap-2 gap-1 items-center'>
                  <li>
                    <Link href="#"
                      className="inline-flex items-center p-2 text-xl font-medium text-white hover:text-secondary rounded-lg bg-primary hover:bg-background">
                      <BsBagCheck />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center lg:order-1">
              <ul className="flex flex-row mt-0 sm:space-x-8 space-x-2 text-sm font-medium">
                <li>
                  <Link href="#"
                    className="text-white hover:text-primary">Home</Link>
                </li>
                <li>
                  <button onClick={() => { setMega(!mega) }}
                    className="flex justify-between items-center w-full font-medium md:p-0 md:w-auto text-white hover:text-primary">Products
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg></button>
                </li>
                <li>
                  <Link href="#"
                    className="text-white hover:text-primary">About Us</Link>
                </li>
                <li>
                  <Link href="#"
                    className="text-white hover:text-primary md:inline ">Contact Us</Link>
                </li>
                <li>
                  <Link href="#"
                    className="text-white hover:text-primary md:inline">Locations</Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>
        <nav id="megamenu" className={`bg-background border-b border-gray-200 absolute sm:top-[120px] top-[230px] left-0 right-0 ${mega === true ? "block" : "hidden"}`}>
          <div
            className="grid py-4 px-4 mx-auto max-w-screen-xl text-accent md:grid-cols-2 lg:grid-cols-5 md:px-6">
            <div className="col-span-2 md:col-span-1 md:border-r border-dashed md:mr-5">
              {NavLinks.slice(4, 5).map((item: NavLinksType, idx: number) => {
                return (
                  <div key={idx}>
                    <h6 className='text-lg font-semibold text-accent uppercase mb-5'>
                      {item?.name}
                    </h6>
                    <ul className='grid gap-2'>
                      {item.sub_menu?.map((sub_item: any, _idx: any) => {
                        return <li key={_idx} className="">
                          <Link href={`${sub_item.link}`} className="text-xs font-semibold text-accent uppercase">
                            {sub_item?.name}
                          </Link>
                        </li>
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="col-span-2 md:col-span-1 md:border-r border-dashed md:mr-5">
              <h6 className='text-lg font-semibold text-accent uppercase mb-5'>
                Categories
              </h6>
              <ul className='grid gap-2'>
                {Categories.slice(1, 5).map((item: CategoryType, idx: number) => {
                  return <li key={idx} className="">
                    <Link href={`/${item.link}`} className="text-xs font-semibold text-accent uppercase">
                      {item.name}
                    </Link>
                  </li>
                })}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-3 md:block hidden">
              <h6 className='text-lg font-semibold text-accent uppercase mb-5'>
                Featured Products
              </h6>
              <div className='grid grid-cols-3 gap-5'>
                {Products?.slice(0, 3).map((item: ProductsType, idx: number) => {
                  return <Product_Box key={idx} data={item} />
                })}
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script> */}
    </>
  )
}

export default Header