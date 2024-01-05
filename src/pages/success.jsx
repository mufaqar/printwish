import { clearAll } from '@/features/AddToCart';
import useOrderHandler from '@/hooks/useOrderHandler';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { orderData } from '../../public/data';
import Link from 'next/link';
import Head from 'next/head';
import SeoMeta from '@/components/seo/Seo';

const Success = () => {
  const dispatch = useDispatch();
  const { OrderSubmit } = useOrderHandler();

  const {
    query: { session_id },
  } = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && session_id) {
      // Access sessionStorage only on the client-side
      var formdata = JSON.parse(sessionStorage.getItem('Formdata'));

      // remove coupon from sessionStorage if user order success
      sessionStorage.removeItem('coupon');

      const billing = orderData['billing'];
      billing.email = formdata.email;
      billing.first_name = formdata.name;
      billing.phone = formdata.mobile;
      billing.address_1 = formdata.address;

      const shipping = orderData['shipping'];
      shipping.first_name = formdata.name;
      shipping.address_1 = formdata.address;

      var cartItems = JSON.parse(sessionStorage.getItem('cartItems'));

      OrderSubmit(cartItems);
      dispatch(clearAll());
      sessionStorage.removeItem('cartItems');
      sessionStorage.removeItem('Formdata');
    }
  }, [session_id]);

  return (
    <React.StrictMode>
      <SeoMeta
        title="Order Successfully Submitted | Printwish"
        description="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90"
        url="success"
      />

      <div class="h-[calc(100vh-130px)]  flex flex-col justify-center items-center">
        <div class="bg-white p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            class="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              You've successfully placed the order!
            </h3>
            <p class="text-gray-600 my-2">
              Thank you for completing your secure online payment. We will
              contact you soon
            </p>
            <p> Have a great day! </p>
            <div class="py-10 text-center">
              <Link
                href="/"
                class="px-12 capitalize bg-secondary hover:bg-primary text-white font-semibold py-3"
              >
                back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Success;
