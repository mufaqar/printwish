import { useEffect } from "react";


// hide scrolling 
export const HideScrollOnModelOpen = (modalIsOpen: any) => {
     // Use useEffect to apply CSS styles when state changes
     useEffect(() => {
          const bodyElement = document.body;
          if (modalIsOpen) {
               // Hide the scrollbars when state is true
               bodyElement.style.overflow = 'hidden';
          } else {
               // Show the scrollbars when state is false
               bodyElement.style.overflow = 'visible';
          }

          // Clean up the effect when the component unmounts
          return () => {
               bodyElement.style.overflow = 'visible'; // Reset the scroll state when component unmounts
          };
     }, [modalIsOpen]);
}


export const calculatePrice =(productPrice:any, totalQuantity:any, numberOfColorInLogo:any) => {
     productPrice = +productPrice.replace('£', '')
     var price = productPrice
     price = totalQuantity > 0 ? productPrice * totalQuantity : productPrice
     if (numberOfColorInLogo > 0){
          price = price * numberOfColorInLogo
     }
     return price
}