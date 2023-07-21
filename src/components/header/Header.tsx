import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className="shadow-md">
        <nav className="bg-accent">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <Link href="https://flowbite.com" className="flex items-center">
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
            <div className='flex justify-between mb-4 lg:order-2 lg:mb-0'>
              <form className="flex md:w-[700px]">
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
                  <Link href="#"
                    className="text-white hover:text-primary"
                    aria-current="page">Home</Link>
                </li>
                <li>
                  <button id="dropdown-button-megamenu" data-collapse-toggle="megamenu"
                    className="flex justify-between items-center w-full font-medium md:p-0 md:w-auto text-white hover:text-primary">Company
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg></button>
                </li>
                <li>
                  <Link href="#"
                    className="text-white hover:text-primary">Marketplace</Link>
                </li>
                <li>
                  <Link href="#"
                    className="text-white hover:text-primary md:inline ">Resources</Link>
                </li>
                <li>
                  <Link href="#"
                    className="text-white hover:text-primary md:inline">Contact</Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>
        <nav id="megamenu" className="bg-white border-b border-gray-200">
          <div
            className="grid py-4 px-4 mx-auto max-w-screen-xl text-accent md:grid-cols-2 lg:grid-cols-4 md:px-6">
            <ul className="col-span-2 md:col-span-1">
              <li>
                <Link href="#" className="flex p-3 rounded-lg hover:bg-gray-50 ">
                  <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Online Stores</div>
                    <span className="text-sm font-light text-gray-500">Connect with
                      third-party tools that you're already using.</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex p-3 rounded-lg hover:bg-gray-50 ">
                  <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Segmentation</div>
                    <span className="text-sm font-light text-gray-500">Connect with
                      third-party tools that you're already using.</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex p-3 rounded-lg hover:bg-gray-50">
                  <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Marketing CRM</div>
                    <span className="text-sm font-light text-gray-500">Connect with
                      third-party tools that you're already using.</span>
                  </div>
                </Link>
              </li>
            </ul>
            <ul className="col-span-2 md:col-span-1">
              <li>
                <Link href="#" className="flex p-3 rounded-lg hover:bg-gray-50">
                  <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Audience Management</div>
                    <span className="text-sm font-light text-gray-500">Connect with
                      third-party tools that you're already using.</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex p-3 rounded-lg hover:bg-gray-50 ">
                  <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Creative Tools</div>
                    <span className="text-sm font-light text-gray-500">Connect with
                      third-party tools that you're already using.</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex p-3 rounded-lg hover:bg-gray-50 ">
                  <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Marketing Automation</div>
                    <span className="text-sm font-light text-gray-500">Connect with
                      third-party tools that you're already using.</span>
                  </div>
                </Link>
              </li>
            </ul>
            <ul className="hidden lg:block">
              <li>
                <Link href="#" className="flex p-3 rounded-lg hover:bg-gray-50 ">
                  <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Dynamic Content</div>
                    <span className="text-sm font-light text-gray-500">Connect with
                      third-party tools that you're already using.</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex p-3 rounded-lg hover:bg-gray-50 ">
                  <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Integrations</div>
                    <span className="text-sm font-light text-gray-500">Connect with
                      third-party tools that you're already using.</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex p-3 rounded-lg hover:bg-gray-50">
                  <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Careers</div>
                    <span className="text-sm font-light text-gray-500">Connect with
                      third-party tools that you're already using.</span>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="col-span-2 p-4 lg:col-span-1">
              <h2 className="mb-2 font-semibold text-accent">Our brands</h2>
              <p className="mb-2 font-light text-gray-500">At JBS Foods, we pride ourselves on a
                portfolio of brands that cater to a variety of preferences.</p>
              <Link href="#"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-600">
                Explore our brands <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
    </>
  )
}

export default Header