import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'

function Contact() {
    const [loading, setLoading] = useState<any>()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = (data:any) => {
        setLoading(true)
        data.page = "contact"
        fetch('/api/email', {
             method: 'POST',
             headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
        }).then((res) => {
             console.log('Response received')
             if (res.status === 200) {
                  console.log('Email send succeeded!')
                  toast.info("Email send successfully!");
                  reset();
                  setLoading(false)
             }
        })

   }


    return (
        <>
        <Head>
        <title>Contact Us | Printwish</title>
        <meta name="description" content="Contact Us | PrintWish T-Shirt Printing" />
        <link rel="canonical" href={`https://www.printwish.co.uk/contact-us`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="contact-us" />
        <meta property="og:description" content="Contact Us | PrintWish T-Shirt Printing" />
        <meta property="og:url" content={`https://printwish.co.uk/contact-us`} />
        <meta property="og:site_name" content="PrintWish T-Shirt Printing" />
        <meta property="article:publisher" content="https://www.facebook.com/printwishuk" />
        <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
        <meta property="og:image" content="https://backend.printwish.co.uk/wp-content/uploads/2023/10/trust.png" />
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="467" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrintwishUk" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="57 minutes" />
      </Head>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex  gap-5">
                                <div className="mt-8">
                                    <p className="py-7">Subject</p>
                                    <p>Email address</p>
                                    <p className="py-5">Message</p>
                                </div>
                                <div className="mt-12">
                                    <select
                                        {...register("Enquiries", { required: true })}
                                        className={`border outline-none  w-full max-w-96 py-2 px-2 ${errors.Enquiries ? 'border-red-400' : 'border-gray-300'}`}
                                        placeholder="Artword Enquiry"
                                    >
                                        <option value="General Enquiries">General Enquiries</option>
                                        <option value="Invoice/Accounts Enquiry">Invoice/Accounts Enquiry</option>
                                        <option value="Price Enquiry">Price Enquiry</option>
                                        <option value="Request a Call">Request a Call</option>
                                    </select>
                                    <br />
                                    <input
                                        type="email"
                                        className={`border outline-none  w-full max-w-96 py-2 px-2 mt-5 ${errors.Email ? 'border-red-400' : 'border-gray-300'}`}
                                        placeholder="Email address"
                                        {...register("Email", { required: true })}
                                    />
                                    <div>
                                        <textarea
                                            id=""
                                            rows={4}
                                            {...register("Message", { required: true })}
                                            className={`border mt-5 w-full max-w-[500px] outline-none py-2 px-2 ${errors.Message ? 'border-red-400' : 'border-gray-300'}`} placeholder="We can we help?"
                                        ></textarea>
                                        <div className="flex gap-2">
                                            <input type="checkbox" id="" {...register("Terms", { required: true })} className="mt-[3px]" />
                                            <p className={errors.Terms ? 'text-red-500' : 'border-gray-800'}>
                                                I agree to the terms and conditions and the privacy policy
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type='submit'
                                            value={ loading ? 'Sending...' : 'Send'}
                                            className="bg-green-500 py-2 px-8 hover:scale-105 rounded-full mt-5 text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact