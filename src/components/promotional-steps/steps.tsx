import React from 'react'

const Steps = () => {
    return (
        <section className="py-16 bg-[url('/images/step-background.jpg')] bg-repeat">
            <div className='max-w-screen-xl mx-auto px-4'>
                <h2 className='sm:text-4xl text-2xl font-semibold font-opensans text-accent uppercase text-center mb-5 text-white '>
                    Straightforward Steps To Perfect Promotional Products
                </h2>
                <p className='text-lg font-normal text-center text-accent font-roboto text-white'>
                    Ensuring You Get Exactly What You Need When You Need It
                </p>
                <div className='grid md:grid-cols-5 grid-cols-1 md:gap-5 gap-10 mt-20'>
                    <div className='bg-white  shadow relative px-3 py-5 rounded-lg'>
                        <h3 className='w-fit absolute -top-5 mx-auto inset-x-0 text-accent text-2xl leading-none font-opensans bg-primary px-3 py-1.5 rounded-full text-white'>
                            1
                        </h3>
                        <p className='text-lg font-medium text-accent font-opensans text-center my-4'>
                            WE QUOTE IT
                        </p>
                        <p className='text-base font-normal text-accent font-roboto text-center'>
                            We provide you every detail relating to cost involved so that you get the exact idea
                        </p>
                    </div>
                    <div className='bg-white  shadow relative px-3 py-5 rounded-lg'>
                        <h3 className='w-fit absolute -top-5 mx-auto inset-x-0 text-accent text-2xl leading-none font-opensans bg-primary px-3 py-1.5 rounded-full text-white'>
                            2
                        </h3>
                        <p className='text-lg font-medium text-accent font-opensans text-center my-4'>
                            YOU ORDER IT
                        </p>
                        <p className='text-base font-normal text-accent font-roboto text-center'>
                            We contact your personal advisors for details, scheduling production and delivery time
                        </p>
                    </div>
                    <div className='bg-white  shadow relative px-3 py-5 rounded-lg'>
                        <h3 className='w-fit absolute -top-5 mx-auto inset-x-0 text-accent text-2xl leading-none font-opensans bg-primary px-3 py-1.5 rounded-full text-white'>
                            3
                        </h3>
                        <p className='text-lg font-medium text-accent font-opensans text-center my-4'>
                            YOU APPROVE IT
                        </p>
                        <p className='text-base font-normal text-accent font-roboto text-center'>
                            Our artwork studio will render their services to make visuals as per your requirements
                        </p>
                    </div>
                    <div className='bg-white  shadow relative px-3 py-5 rounded-lg'>
                        <h3 className='w-fit absolute -top-5 mx-auto inset-x-0 text-accent text-2xl leading-none font-opensans bg-primary px-3 py-1.5 rounded-full text-white'>
                            4
                        </h3>
                        <p className='text-lg font-medium text-accent font-opensans text-center my-4'>
                            WE PRINT IT
                        </p>
                        <p className='text-base font-normal text-accent font-roboto text-center'>
                            We ensure that you stay updated on the progress of your orders till delivery
                        </p>
                    </div>
                    <div className='bg-white  shadow relative px-3 py-5 rounded-lg'>
                        <h3 className='w-fit absolute -top-5 mx-auto inset-x-0 text-accent text-2xl leading-none font-opensans bg-primary px-3 py-1.5 rounded-full text-white'>
                            5
                        </h3>
                        <p className='text-lg font-medium text-accent font-opensans text-center my-4'>
                            YOU RECEIVE IT
                        </p>
                        <p className='text-base font-normal text-accent font-roboto text-center'>
                            We ensure that you get the job done on time, no delay with 100% satisfaction!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps