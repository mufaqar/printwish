import { SettingsContext } from "@/context/global-context";
import { useContext, useEffect } from "react";


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


export const calculatePrice = ( selectedProduct: any, totalPrice:number) => {

     var price = totalPrice
     if (selectedProduct?.numberOfColorInLogo > 0){
          price = price * selectedProduct?.numberOfColorInLogo
     }
     return price.toFixed(2)
}

export const uid = function () {
     return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

