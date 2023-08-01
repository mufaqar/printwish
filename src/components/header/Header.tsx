import { NavLinks, NavLinksType } from '@/const/navlinks'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Product_Box from '../product-widgets/product-box'
import { CiShoppingBasket } from 'react-icons/ci'
import Head from 'next/head'
import { Categories, CategoryType } from '@/const/categories'
import { Products, ProductsType } from '@/const/products'
import TopBar from './topBar'

const Header = () => {
  const [megaMenu, setMegaMenu] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
      <Head>
        <title>Cheap Bulk Custom T-Shirt Printing in London, UK - Wholesale Tshirt Printing</title>
        <meta name="description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
        <link rel="canonical" href="https://printwish.co.uk/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
        <meta property="og:url" content="https://printwish.co.uk/" />
        <meta property="og:site_name" content="PrintWish T-Shirt Printing" />
        <meta property="article:publisher" content="https://www.facebook.com/printwishuk" />
        <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
        <meta property="og:image" content="https://printwish.co.uk/wp-content/uploads/2020/03/DTG-Printing-Image.-.jpg" />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="467" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrintwishUk" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="57 minutes" />
      </Head>
      <header className="shadow-md">
        <TopBar />
        <nav className="bg-secondary">
          <div className="grid py-4 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 md:px-6">
            <div className='flex gap-2 justify-between mb-4 lg:order-2 lg:mb-0 items-center'>
              <form className="flex md:w-[700px]">
                <label htmlFor="search-dropdown"
                  className="mb-2 text-sm font-medium text-accent sr-only ">Your Email</label>
                <button onClick={() => setDropdown(!dropdown)}
                  className={`hidden md:inline-flex flex-shrink-0 z-10 items-center py-2.5 px-4 text-sm font-medium text-center text-accent bg-gray-100 border border-gray-200 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 `}
                  type="button">All categories <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg></button>
                <div id="dropdown"
                  className={`${dropdown ? 'sm:block hidden' : 'hidden'} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow absolute top-[108px] `}>
                  <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdown-button">
                    <li>
                      <button type="button"
                        className="inline-flex py-2 px-4 w-full hover:bg-gray-100 font-roboto">Mockups</button>
                    </li>
                    <li>
                      <button type="button"
                        className="inline-flex py-2 px-4 w-full hover:bg-gray-100 font-roboto">Templates</button>
                    </li>
                    <li>
                      <button type="button"
                        className="inline-flex py-2 px-4 w-full hover:bg-gray-100 font-roboto">Design</button>
                    </li>
                    <li>
                      <button type="button"
                        className="inline-flex py-2 px-4 w-full hover:bg-gray-100 font-roboto">Logos</button>
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
              <div className="">
                <ul className='flex sm:gap-2 gap-1 items-center'>
                  <li>
                    <Link href="#"
                      className="inline-flex items-center p-2 text-sm font-medium text-white hover:text-secondary rounded-lg hover:bg-background">
                      <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#"
                      className="inline-flex items-center p-2 text-sm font-medium text-white hover:text-secondary rounded-lg hover:bg-background">
                      <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#"
                      className="inline-flex items-center p-2 text-sm font-medium text-white hover:text-secondary rounded-lg hover:bg-background">
                      <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#"
                      className="inline-flex items-center p-2 text-sm font-medium text-white hover:text-secondary rounded-lg hover:bg-background">
                      <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                          d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center lg:order-1">
              <ul className="flex flex-row mt-0 sm:space-x-8 space-x-2 text-sm font-medium">
                <li>
                  <Link href="/"
                    className="text-white hover:text-primary"
                    aria-current="page">Home</Link>
                </li>
                <li>
                  <button onClick={() => setMegaMenu(!megaMenu)}
                    className="flex justify-between items-center w-full font-medium md:p-0 md:w-auto text-white hover:text-primary">Products
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg></button>
                </li>
                <li>
                  <Link href="/about"
                    className="text-white hover:text-primary">About Us</Link>
                </li>

                <li>

                  <Link href="/product"
                    className="text-white hover:text-primary md:inline ">Products</Link>
                </li>
                <li>
                  <Link href="/contact-us"
                    className="text-white hover:text-primary md:inline">Contact</Link>

                </li>
              </ul>
            </div>

          </div>
        </nav>
        {/* mega menu  */}
        <nav id="megamenu" className={`bg-white border-b border-gray-200 absolute sm:top-[120px] top-[230px] left-0 right-0 ${megaMenu ? 'block' : 'hidden'}`}>
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
    </>
  )
}

export default Header