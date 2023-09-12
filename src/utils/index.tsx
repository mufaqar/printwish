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


export const calculatePrice = ( customizedMergeData: any, totalPrice:number, totalQuantity:any) => {

     var priceWithQuantity = 0
     
     if(totalQuantity >= 25 && totalQuantity <= 49){
          priceWithQuantity = totalQuantity * (5.88 * customizedMergeData.length)
     }else if(totalQuantity >= 50 && totalQuantity <= 99){
          priceWithQuantity = totalQuantity * ( 3.80  * customizedMergeData.length )
     }else if(totalQuantity >= 100 && totalQuantity <= 249){
          priceWithQuantity = totalQuantity * ( 2.00 * customizedMergeData.length )
     }else if(totalQuantity >= 250 && totalQuantity <= 499){
          priceWithQuantity = totalQuantity * ( 1.80 * customizedMergeData.length )
     }else if(totalQuantity >= 500 && totalQuantity <= 999){
          priceWithQuantity = totalQuantity * ( 1.20 * customizedMergeData.length )
     }else if(totalQuantity >= 1000 && totalQuantity <= 2499){
          priceWithQuantity = totalQuantity * ( 0.98 * customizedMergeData.length )
     }else if(totalQuantity >= 2500){
          priceWithQuantity = totalQuantity * ( 0.85 * customizedMergeData.length )
     }

     var price = customizedMergeData?.length > 0 ? totalPrice + priceWithQuantity : totalPrice

     return price.toFixed(2)
}

export const uid = function () {
     return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

