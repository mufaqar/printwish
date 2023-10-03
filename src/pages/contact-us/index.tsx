import Image from 'next/image'
import React from 'react'

function Contact() {
    return (
        <>
            <div className="container mx-auto px-4 my-20">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">CONTACT US</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-5 w-full">
                    <div className="mt-5 md:w-96">
                        <div className="py-3">
                            <h3 className="font-bold">Printwish</h3>
                            <div className="border border-b-0 mt-5"></div>
                        </div>
                        <div className="py-4 flex items-center gap-3">
                            <i className="fa-solid fa-phone-flip text-3xl"></i>
                            <div>
                                <p>
                                    <span className="font-bold">Sales Enquiries Tel:</span> 0800 051 0821
                                </p>
                                <p><span className="font-bold">Accounts Tel:</span> 0800 051 0821 </p>
                            </div>
                        </div>
                        <div className="border border-b-0 mt-5"></div>

                        <div className="py-4 flex items-center gap-3">
                            <i className="fa-regular fa-envelope text-3xl"></i>
                            <div>
                                <p>
                                    <span className="font-bold">Sales:</span>sales@printwish.co.uk
                                </p>
                                <p>
                                    <span className="font-bold">Enquiries:</span>enquiries@printwish.co.uk
                                </p>
                            </div>
                        </div>
                        <div className="border border-b-0 mt-5"></div>

                        <div className="py-4">
                            <p><span className="font-bold">Mon-Friday:</span> 09:00am - 05:30pm</p>
                            <p><span className="font-bold">Sat/Sun:</span>Closed</p>
                            <p><span className="font-bold">Bank Holidays:</span>Closed</p>

                            <p className="py-5">
                                Feel free to send us a message via the from on this page and we`ll
                                get back to you as soon as possible.
                            </p>
                            <p>
                                Alternatively, you can always call us during hours on
                                <span className="text-green-500">0800 051 0821</span>
                            </p>
                        </div>
                        <div className="border border-b-0 mt-5"></div>

                        <div className="py-4">
                            <h3 className="font-bold">Drop Shipping</h3>
                            <p className="py-4">
                                Looking for help or info related to drop shipping
                            </p>
                            <button className="bg-green-700 px-10 py-3 rounded-full text-white">
                                DROP SHIPPING HELP
                            </button>
                        </div>
                    </div>

                    <div className="border-l-0 border"></div>
                    <div className="px-4 mt-8 w-full">
                        <div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                                Contact us
                            </h3>
                        </div>

                        <div className="flex  gap-4">
                            <div className="mt-8">
                                <p className="py-6">Subject</p>
                                <p>Email address</p>
                                <p className="py-5">Message</p>
                            </div>
                            <div className="mt-12">
                                <input
                                    type="text"
                                    className="border outline-none border-gray-300 w-full max-w-96 py-2 px-2"
                                    placeholder="Artword Enquiry"
                                />
                                <br />
                                <input
                                    type="text"
                                    className="border outline-none w-full max-w-96  border-gray-300 py-2 px-2 mt-5"
                                    placeholder="Artword Enquiry"
                                />
                                <div>
                                    <textarea
                                        name=""
                                        id=""
                                        rows={4}
                                        className="border mt-5 w-full max-w-[500px] outline-none border-gray-300 py-2 px-2" placeholder="We can we help?"
                                    ></textarea>
                                    <div className="flex gap-2">
                                        <input type="checkbox" name="" id="" className="mt-[3px]"/>
                                        <p>
                                            I agree to the terms and conditions and the privacy policy
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="bg-green-500 py-2 px-8 hover:scale-105 rounded-full mt-5 text-white"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact