import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { TotalPriceCalculate } from '@/utils';
import SeoMeta from '@/components/seo/Seo';
import useOrderHandler from '@/hooks/useOrderHandler';
import SelectedProduct from '@/components/SelectedProduct';

const Checkout = () => {
  const cartItems = useSelector((state) => state.AddToCart.value);

  const { priceWithVat, vat, couponDiscountPrice } =
    TotalPriceCalculate(cartItems);
  const { OrderSubmit } = useOrderHandler();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    var seesion_orderData = sessionStorage.getItem('orderData');
    const getAQouteData = JSON.parse(seesion_orderData);
    WooOrderHandler(getAQouteData, data);
  };

  const WooOrderHandler = (getAQouteData, data) => {
    OrderSubmit(getAQouteData, data);
    // sessionStorage.removeItem('orderData');
  };

  return (
    <>
      <SeoMeta
        title="Checkout | Printwish"
        description="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.9"
        url="checkout"
      />

      <div className="relative mx-auto w-full bg-white">
        <div className="grid min-h-screen grid-cols-2">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-1 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <div className="mb-5 md:hidden block">
                <h1 className="relative text-2xl text-black mb-8 sm:text-3xl">
                  Your Quote Details
                  <span className="mt-2 block h-[3px] w-10 bg-gray-200 sm:w-20"></span>
                </h1>
                <SelectedProduct />
              </div>

              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Contact Information
                <span className="mt-2 block h-1 w-10 bg-primary sm:w-20"></span>
              </h1>

              <>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-10 flex flex-col space-y-4"
                >
                  <div>
                    <label className="text-xs font-semibold text-gray-500">
                      Name
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: true })}
                      id="card-name"
                      name="name"
                      placeholder="name"
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    />
                    {errors.name && (
                      <span className="text-red-400 m-1">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { required: true })}
                      name="email"
                      placeholder="john.capler@fang.com"
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    />
                    {errors.email && (
                      <span className="text-red-400 m-1">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500">
                      Mobile Number (Optional)
                    </label>
                    <input
                      type="text"
                      id="card-name"
                      {...register('mobile')}
                      name="mobile"
                      placeholder="mobile number"
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    />
                    {errors.mobile && (
                      <span className="text-red-400 m-1">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500">
                      Delivery Date
                    </label>
                    <input
                      type="date"
                      placeholder="Delivery Date"
                      {...register('address')}
                     
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                   />
                  </div>

                  <input
                    type="submit"
                    className="mt-4 cursor-pointer inline-flex w-full items-center justify-center rounded bg-primary py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-primary sm:text-lg"
                    value="Proceed to Submit your Quote"
                  />
                </form>
              </>
              <div className="mt-5 border p-6">
                <h3 className="font-semibold text-lg">What happens next?</h3>
                <ul className="md:text-sm text-xs list-disc pl-4 mt-2 flex flex-col gap-2">
                  <li>
                    SUBMIT YOUR QUOTE - and we will be in touch in 15-30
                    minutes.
                  </li>
                  <li>
                    We will provide free visuals proofs before the payment.
                  </li>
                  <li>
                    Once you approve the visual proof, we can then send you the
                    invoice and a secure payment link.
                  </li>
                  <li>100% money back guarantee.</li>
                  <li>Huge discounts available on bulk orders.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative col-span-full  flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-1 lg:py-24">
            <h2 className="sr-only">Order summary</h2>
            <div>
              <div className="absolute inset-0 h-full w-full bg-[#1f375d] opacity-95"></div>
            </div>
            <div className="relative">
              {/* <ul className="space-y-5">
                {cartItems?.map((item, idx) => {
                  return (
                    <li className="flex justify-between" key={idx}>
                      <div className="inline-flex">
                        <div className="ml-3">
                          <p className="text-base font-semibold text-white">
                            {item?.name}
                          </p>
                          <p className="font-medium text-white text-opacity-80">
                            Price
                          </p>
                          <p className="text-xs font-medium text-gray-400">
                            Exclude Vat
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        £ {item?.price}
                      </p>
                    </li>
                  );
                })}
              </ul> */}
              <div className="md:block hidden">
                <h1 className="relative text-2xl text-gray-200 mb-8 sm:text-3xl">
                  Your Quote Details
                  <span className="mt-2 block h-[3px] w-10 bg-gray-200 sm:w-20"></span>
                </h1>
                <SelectedProduct />
              </div>
            </div>
            <div className="relative mt-10 text-white">
              <h3 className="mb-5 text-lg font-bold">Support</h3>
              <p className="text-sm font-semibold">0800 051 0821</p>
              <p className="mt-1 text-sm font-semibold">
                <Link href="mailto:enquiries@printwish.co.uk">
                  enquiries@printwish.co.uk{' '}
                </Link>
                <span className="font-light">(Email)</span>
              </p>
              <p className="mt-1 text-sm font-semibold">
                <Link href="mailto:sales@printwish.co.uk">
                  sales@printwish.co.uk
                </Link>
                <span className="font-light">(Email)</span>
              </p>
            </div>

            <div className="relative mt-10 flex">
              <p className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  Money Back Guarantee
                </span>
                <span className="text-xs font-medium text-white">
                  within 30 days of purchase
                </span>
              </p>
            </div>

            <div className="relative mt-10">
              <div className="my-5 h-0.5 w-full !bg-white/30" />
              <h3 className="font-semibold text-lg text-white">
                Request For Quote
              </h3>
              <p className="text-gray-200 mt-4">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              {/* <p className="mt-10 text-sm font-semibold text-gray-200">
                    By placing this order you agree to the
                    <Link
                      href="/terms-and-conditions"
                      className="whitespace-nowrap text-secondary underline hover:text-primary"
                    >
                      Terms and Conditions
                    </Link>
                  </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
