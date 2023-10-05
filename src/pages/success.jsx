
import { clearAll } from '@/features/AddToCart';
import useOrderHandler from '@/hooks/useOrderHandler';
import { useRouter } from 'next/router';
import React, {useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Success = () => {
  const dispatch = useDispatch();
  const { OrderSubmit } = useOrderHandler();

  const {
    query: { session_id },
  } = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && session_id) {
      // Access sessionStorage only on the client-side
      var cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
      OrderSubmit(cartItems)
      dispatch(clearAll())
      sessionStorage.removeItem('cartItems')
    }
  }, [session_id]);


  return (
    <React.StrictMode>
      <div>Success</div>      
    </React.StrictMode>
  );
};

export default Success;
