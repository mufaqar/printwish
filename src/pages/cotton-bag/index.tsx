import PageBanner from '@/components/banner/page-banner'
import Image from 'next/image'
import React from 'react'

export default function Cotton_Bag() {
    return (
        <main>
            <PageBanner title="Cotton Bag" />
            <section className='py-16'>
                <div className='max-w-screen-xl mx-auto px-4 flex md:flex-row flex-col gap-5'>
                    <div className='md:w-1/4 w-full'>
                        <h2 className='text-2xl font-bold'>
                            5oz Natural Cotton Shopper Long Handles
                        </h2>
                        <Image src="/images/cotton.jpg" alt='cotton' width={665} height={665} />
                        <ul>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Lead time:</strong> 3-5 Working Days from proof approval.
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Material:</strong> 100% Premium Cotton
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Product Size:</strong> 380 X 420mm (approx.)
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Print Area:</strong> 280 X 320mm (Spot colour.)
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Carry Shoulder Straps size:</strong> 67cms long
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Weight:</strong> 155gsm
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Capacity:</strong> 15 Litres
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Print Options:</strong> Spot Colours
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-2/4 w-full'>
                        <Image src="/images/stars.png" alt='stars' width={1024} height={315} />
                        <h2 className='font-semibold bg-primary text-white text-2xl text-center py-1.5 px-4'>
                            Printed From £0.55 Each Ex Vat
                        </h2>
                        <p className='text-lg text-gray-600 font-roboto'>
                            Note: We have flexible pricing options that can be customised to suit your order volume and the number of colors in your design. This allows us to offer more affordable and competitive rates to our valued customers. Unfortunately, we cannot disclose prices on our website. To receive the most advantageous and competitive quote, please send us your order inquiry and we will respond promptly with our best pricing offer.
                        </p>
                        <Image src="/images/order.jpg" alt='order' width={1920} height={1007} className='my-5' />
                        <p className='text-lg text-gray-600 font-roboto'>
                            Now that we are all having to pay for plastic bags for our shopping trips it makes sense to have a Print Wish Promo Shoulder Tote Bag on hand, which can be used again and again. Easy to print onto the 100% cotton surface up to a maximum size of 280×320mm. This bag is great to add to your retail collection or for promoting your Company name, brand or service. Printwish made custom bags with some unique features which can easily attract the customers. Printed tote bags are becoming popular and it is a fashionable item for customers. If you want cheap branded tote bags with custom message or image then contact us, we will provide you with cheap rates. Printwish have a great variety of different colors, sizes, and styles of tote bags. Promotional cotton bags are made with outstanding fabric. You can promote your business at cheap rates so, place an order right away.
                        </p>
                    </div>
                    <div className='md:w-1/4 w-full'>
                        <div className='bg-primary p-5'>
                            <h2 className='font-semibold text-white text-2xl text-center'>
                                Qoute Form
                            </h2>
                            <p className='font-medium text-white text-base text-center'>
                                To Ask a Question, Start an Order, or Get a Quote, Please Fill in The Contact Form Below
                            </p>
                        </div>
                        <div className='mt-5'>
                            <form className='grid gap-5'>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-base font-medium text-gray-900">Your name</label>
                                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="Your Name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="name@flowbite.com" required />
                                </div>
                                <div>
                                    <label htmlFor="quantity" className="block mb-2 text-base font-medium text-gray-900">Quantity</label>
                                    <select id="quantity" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-primary focus:border-primary block w-full p-2.5">
                                        <option value="0" selected>50-99</option>
                                        <option value="1">50-99</option>
                                        <option value="2">100-249</option>
                                        <option value="3">250-499</option>
                                        <option value="4">500-999</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="quantity" className="block mb-2 text-base font-medium text-gray-900">Custom Quantity</label>
                                    <input type="number" id="quantity" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="Custom Quantity" />
                                </div>
                                <div>
                                    <label htmlFor="date" className="block mb-2 text-base font-medium text-gray-900">Delivery Date </label>
                                    <input type="date" id="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="Delivery Date" />
                                </div>
                                <div>
                                    <label htmlFor="colors" className="block mb-2 text-base font-medium text-gray-900">PRINT DETAILS</label>
                                    <select id="colors" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-primary focus:border-primary block w-full p-2.5">
                                        <option value="0" selected>1 Color</option>
                                        <option value="1">2 Color</option>
                                        <option value="2">3 Color</option>
                                        <option value="3">4 Color</option>
                                        <option value="4">5 Color</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="sides" className="block mb-2 text-base font-medium text-gray-900">TO ONE OR TWO SIDES </label>
                                    <select id="sides" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-primary focus:border-primary block w-full p-2.5">
                                        <option value="0" selected>1 Side</option>
                                        <option value="1">2 Side</option>
                                    </select>
                                </div>
                                <div>

                                    <label className="block mb-2 text-base font-medium text-gray-900" htmlFor="file_input">Upload file</label>
                                    <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-primary focus:border-primary block w-full" id="file_input" type="file" />
                                </div>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-blue-950 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
