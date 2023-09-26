import PageBanner from '@/components/banner/page-banner'
import { client } from '@/config/client'
import { SINGLEBAG } from '@/config/query'
import { GetStaticPaths } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cotton_Bag({ bag }: any) {

    return (
        <div>
            
            <section className='shadow-lg p-3 md:block'>
                <div className='container mx-auto flex flex-nowrap justify-between items-center'>
                    <Image src="/images/freeukdelivery-1.png.webp" alt="image" width={154} height={45} className='w-28 sm:w-[154px]'/>
                    <Image src="/images/nosetup-1.png.webp" alt="image" width={109} height={45} className='w-24 sm:w-[109px]'/>
                    <Image src="/images/pricemat-1.png.webp" alt="image" width={118} height={45} className='w-24 sm:w-[118px]'/>
                </div>
            </section>
            <figure className="flex justify-center my-2 md:hidden"><Image src="/images/stars.png" alt='stars' width={1024} height={315} /></figure>
            <section className='py-4 marker:md:py-16'>
                <div className='max-w-screen-xl mx-auto px-4 flex md:flex-row flex-col gap-5'>
                    <div className='md:w-1/4 w-full'>
                        <h2 className='text-2xl font-bold text-center md:text-left text-blue-500'>
                            {bag?.title}
                        </h2>
                        <Image src="/images/cotton.jpg" alt='cotton' width={665} height={665} />
                        <ul>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Lead time:</strong> {bag?.bagsInfo?.leadTime}
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Material:</strong> {bag?.bagsInfo?.material}
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Product Size:</strong> {bag?.bagsInfo?.productSize}
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Print Area:</strong> {bag?.bagsInfo?.printArea}
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Carry Shoulder Straps size:</strong> {bag?.bagsInfo?.carryShoulderStrapsSize}
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Weight:</strong> {bag?.bagsInfo?.weight}
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Capacity:</strong> {bag?.bagsInfo?.capacity}
                            </li>
                            <li className='capitalize mb-1 text-base text-gray-600 font-roboto'>
                                <strong>Print Options:</strong> {bag?.bagsInfo?.printOptions}
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-2/4 w-full'>
                        <Image src="/images/stars.png" alt='stars' className='hidden md:block' width={1024} height={315} />
                        <h2 className='font-semibold bg-primary text-white text-2xl text-center py-1.5 mb-4 px-4'>
                            Printed From £{bag?.bagsInfo?.price} Each Ex Vat
                        </h2>
                        <p className='text-lg text-gray-600 font-roboto'>
                            <span className='!font-semibold !text-secondary'>Note:</span> We have flexible pricing options that can be customised to suit your order volume and the number of colors in your design. This allows us to offer more affordable and competitive rates to our valued customers. Unfortunately, we cannot disclose prices on our website. To receive the most advantageous and competitive quote, please send us your order inquiry and we will respond promptly with our best pricing offer.
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
            <section className='container mx-auto px-3 mb-20'>

                <div>
                    <h2 className="text-[26px] text-center text-[#208BCB] font-[700] leading-[1.2em]">How To Order?</h2>
                </div>
                <div className="bg-[#D9EDF7] w-full mt-4 text-center py-4 font-[700] leading-[1.2em] text-[#070505] ">
                    <p>Send us a quote to get favorite product at the best price.</p>
                </div>
                <div className="grid lg:grid-cols-4 text-center gap-5 font-[500] grid-cols-2 px-5">
                    <div className="border w-full border-none flex flex-col items-center ">
                        <Image width={166} height={166} src="/images/Group-237469-1.png.webp" alt="" className="" />
                        <p className="text-[13px] md:text-[16px]">Pick your items, select the quantity and sizes.</p>
                    </div>
                    <div className="border w-full border-none flex flex-col items-center">
                        <Image width={166} height={166} src="/images/Group-237468-1.png.webp" alt="" className="" />
                        <p className="text-[13px] md:text-[16px]">Complete the quote form with your details, choose your print positions, attach your logo, and press submit.</p>
                    </div>
                    <div className="border w-full border-none flex flex-col items-center">
                        <Image width={166} height={166} src="/images/PIC-03.png.webp" alt="" className="" />
                        <p className="text-[13px] md:text-[16px]">We'll create a FREE digital proof of your design for your approval.</p>
                    </div>
                    <div className="border w-full border-none flex flex-col items-center">
                        <Image width={166} height={166} src="/images/PIC-01-1.png.webp" alt="" className="" />
                        <p className="text-[13px] md:text-[16px]">We guarantee to deliver your order by your specified date.</p>
                    </div>
                </div>
                <div >
                    <h2 className="mt-10 text-center font-[700] text-[22px] text-[#208BCB]">Ordering Your Promotional Products - The Simple Way</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                        <div className="bg-[#DDDDDD] py-4 px-4 rounded-lg">
                            <h3 className="text-[#800080] text-[18px] font-[700]">Request Your Quote</h3>
                            <p className="text-[18px] font-[600]">We’ll advise costs and delivery lead times to you via email</p>
                        </div>
                        <div className="bg-[#DDDDDD] py-4 px-4 rounded-lg">
                            <h3 className="text-[#800080] text-[18px] font-[700]">Place Your Order</h3>
                            <p className="text-[18px] font-[600]">Your account manager will confirm details and schedule production</p>
                        </div>
                        <div className="bg-[#DDDDDD] py-4 px-4 rounded-lg">
                            <h3 className="text-[#800080] text-[18px] font-[700]">Artwork Approval</h3>
                            <p className="text-[18px] font-[600]">Our graphics team will create PDF artwork for your approval</p>
                        </div>
                        <div className="bg-[#DDDDDD] py-4 px-4 rounded-lg">
                            <h3 className="text-[#800080] text-[18px] font-[700]">Order Production</h3>
                            <p className="text-[18px] font-[600]">We’ll imprint your products, with your logo to the highest of standards</p>
                        </div>
                    </div>
                    <div className="bg-[#DDDDDD] py-4 px-4 text-center w-full mt-5 rounded-lg">
                        <h3 className="text-[#800080] text-[18px] font-[700]">Receive Your Order</h3>
                        <p className="text-[18px] font-[600]">…you’ll receive your products on time, as promised!</p>
                    </div>
                </div>

            </section>
        </div>
    )
}



export async function getStaticProps({ params }: any) {
    const slug = params.slug

    const response = await client.query({
        query: SINGLEBAG,
        variables: {
            id: `/bags/${slug}`,
        },
    });

    const bag = response?.data?.bag;
    return {
        props: {
            bag,
        },
    };
}


export const getStaticPaths: GetStaticPaths = async () => {
    const paths: any = [];
    return {
        paths,
        fallback: 'blocking',
    };
}