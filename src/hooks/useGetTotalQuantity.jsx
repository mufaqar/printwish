import React, { useEffect, useState } from 'react'

const useGetTotalQuantity = (selectedProduct) => {
     const [totalQuantity, setTotalQuantity] = useState(0);
     useEffect(() => {
       if (selectedProduct) {
         let newTotalQuantity = 0;
         selectedProduct.colors?.forEach((color) => {
           color.selectedSize?.forEach((size) => {
             const quantity = parseInt(size.quantity);
             if (quantity >= 1) {
               newTotalQuantity += quantity;
             }
           });
         });
   
         setTotalQuantity(newTotalQuantity);
       }
     }, [selectedProduct]);

     return totalQuantity
}

export default useGetTotalQuantity