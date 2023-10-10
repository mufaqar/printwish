import { NavLinks, NavLinksType } from '@/const/navlinks'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Product_Box from '../product-widgets/product-box'
import Head from 'next/head'
import TopBar from './topBar'
import { apiRequest } from '@/config/requests'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, updateCardSession } from '@/features/AddToCart'
import { useRouter } from 'next/router'
import { CiShoppingBasket } from 'react-icons/ci'
import { BiSearch } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import Image from 'next/image'
import { HiOutlineMenuAlt1, HiX } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'
import CategoriesSubMenu from './categoriesSubMenu'
import LocationSubMenu from './locationSubMenu'

const Header = () => {

  const cartItems = useSelector((state: any) => state.AddToCart.value)
  const dispatch = useDispatch()
  const router = useRouter()

  const [megaMenu, setMegaMenu] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // fetch all product categories
    const fetchData = async () => {
      const dataForProducts = {
        per_page: 3,
      };
      const { products } = await apiRequest('GET', 'get-products-categories')
      const productData = await apiRequest('POST', 'get-products', dataForProducts)
      setCategories(products)
      setProducts(productData.products)
    }
    fetchData().catch(console.error);
  }, [])


  useEffect(() => {
    /* The above code is checking if there is any "products" data stored in the sessionStorage. If
    there is, it parses the data into an array called "products". Then, it checks if the "cartItems"
    array is empty and the "products" array has items. If both conditions are true, it dispatches an
    action called "updateCardSession" with the "products" array as the payload. If there is no
    "products" data in the sessionStorage, it logs a message to the console. */
    const productsJSON = sessionStorage.getItem("products");
    if (productsJSON !== null) {
      const products: any = JSON.parse(productsJSON);
      cartItems.length === 0 && products?.length > 0 && dispatch(updateCardSession(products))
    }
  }, [])

  const HandleSearchQuery = ({ selectedCategory, searchQuery }: any) => {
    const c = selectedCategory.toLowerCase().replace(/ /g, "-");
    router.push(`/search?c=${c}&q=${searchQuery.toLowerCase()}`)
  }

  const [openMobileSearch, setOpenMobileSearch] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const [catSubMenu, setCatSubMenu] = useState(false)
  const [locSubMenu, setLocSubMenu] = useState(false)

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
        <nav className="bg-secondary z-50">
          <div className="grid py-4 px-4 mx-auto container lg:grid-cols-2 md:px-6 gap-4 items-center">
            <div className='flex justify-between lg:order-2 lg:mb-0 items-center'>
              <div className="md:hidden flex items-center gap-2 text-white">
                <button onClick={() => setMobileMenu(!mobileMenu)} className='cursor-pointer'>
                  {
                    mobileMenu ? <HiX size={24} /> : <HiOutlineMenuAlt1 size={24} />
                  }
                </button>
                <Link href="tel:08000510821"><AiOutlinePhone size={24} /></Link>
              </div>

              <div className="flex md:w-[700px]">
                <label htmlFor="search-dropdown"
                  className="mb-2 text-sm font-medium text-accent sr-only ">Your Email</label>
                <button onClick={() => setDropdown(!dropdown)}
                  className={`hidden md:inline-flex flex-shrink-0 z-10 items-center  py-2.5 px-4 text-sm font-medium text-center text-accent bg-gray-100 border border-gray-200 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 `}
                  type="button">{selectedCategory ? selectedCategory : 'All categories'} <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg></button>
                <div id="dropdown"
                  className={`${dropdown ? 'sm:block hidden' : 'hidden'} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow absolute top-[108px] `}>
                  <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdown-button">
                  <li onClick={() => { setSelectedCategory(''); setDropdown(!dropdown) }}>
                            <button type="button" className="inline-flex py-2 px-4 w-full text-left hover:bg-gray-100 font-roboto">All categories</button>
                          </li>
                    {
                      categories?.map(({ name }, idx) => {
                        return (
                          <li key={idx} onClick={() => { setSelectedCategory(name); setDropdown(!dropdown) }}>
                            <button type="button" className="inline-flex py-2 px-4 w-full text-left hover:bg-gray-100 font-roboto">{name}</button>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>


                <Link href="/" className="flex items-center md:hidden">
                <Image src="/images/logo.png" alt="logo" width={140} height={37} />
                </Link>
                <div className={` md:bg-transparent  w-full md:relative ${openMobileSearch ? 'w-full fixed top-0 bg-white p-4 pt-10 inset-0 block' : 'hidden md:block'}`}>
                  <input type="search" id="search-dropdown"
                    className="block p-2.5 w-full text-sm text-accent bg-gray-50 rounded-lg md:rounded-l-none md:border-l-gray-50 border-l-1 md:border-l-6 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search anything..." required
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit"
                    onClick={() => { HandleSearchQuery({ selectedCategory, searchQuery }); setOpenMobileSearch(false) }}
                    className="absolute right-4 top-10 md:top-0 md:right-0 p-2.5 text-sm font-medium text-white bg-primary rounded-r-lg border border-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary "><svg
                      className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg></button>
                  {
                    openMobileSearch && <GrClose size={20} className='fixed top-2 right-2' onClick={() => setOpenMobileSearch(false)} />
                  }

                </div>
              </div>

              <div className='flex items-center gap-2 mr-4 md:ml-12'>
                <button onClick={() => setOpenMobileSearch(true)} className='md:hidden'>
                  <BiSearch size={24} className='text-white' />
                </button>
                <Link href="/cart" className='text-white relative'>
                  <CiShoppingBasket size="24" />
                  <span className='absolute text-xs bg-red-600 p-[2px] flex flex-col justify-center items-center w-5 h-5 rounded-full -right-3 -top-1'>{cartItems.length || 0}</span>
                </Link>
              </div>

            </div>
            <div className={`flex items-center lg:order-1 ${mobileMenu ? 'block' : 'hidden md:block'}`}>
              <ul className={`flex flex-col md:flex-row mt-0 gap-6 md:gap-8 text-sm font-medium `}>
                <li onClick={()=>setMobileMenu(false)}>
                  <Link href="/"
                    className="text-white hover:text-primary"
                    aria-current="page">Home</Link>
                </li>
                <li className='relative' 
                  onClick={()=>{setCatSubMenu(!catSubMenu)}} 
                  onMouseLeave={()=>setCatSubMenu(false)} 
                  onMouseEnter={()=>setCatSubMenu(true)}>
                  <button
                    className="flex justify-between items-center w-full font-medium md:p-0 md:w-auto text-white hover:text-primary">Categories
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path></svg>
                  </button>
                  {catSubMenu && <CategoriesSubMenu setMobileMenu={setMobileMenu} categories={categories}/>}
                </li>
                <li onClick={()=>setMobileMenu(false)}>
                  <Link href="/about"
                    className="text-white hover:text-primary">About Us</Link>
                </li>

                <li onClick={()=>setMobileMenu(false)}>
                  <Link href="/product"
                    className="text-white hover:text-primary md:inline ">Products</Link>
                </li>
                <li onClick={()=>setMobileMenu(false)}>
                  <Link href="/contact-us"
                    className="text-white hover:text-primary md:inline">Contact</Link>
                </li>
                <li className='relative' onClick={()=>{setLocSubMenu(!locSubMenu)}} onMouseLeave={()=>setLocSubMenu(false)} onMouseEnter={()=>setLocSubMenu(true)}>
                  <button
                    className="flex justify-between items-center w-full font-medium md:p-0 md:w-auto text-white hover:text-primary">Locations
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path></svg>
                  </button>
                  {locSubMenu && <LocationSubMenu setMobileMenu={setMobileMenu}/>}
                </li>
              </ul>
            </div>

          </div>
        </nav>
        
      </header>
    </>
  )
}

export default Header