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

// this price is calculate according to the product quantity with customized data
export const calculatePrice = ( customizedMergeData: any, totalPrice:number, totalQuantity:any) => {
     
     var printingPrice = calculatePrintingPrice(customizedMergeData,totalQuantity)

     var price = customizedMergeData?.length > 0 ? totalPrice + printingPrice : totalPrice

     return price?.toFixed(2)
}

export const uid = function () {
     return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const calculatePrintingPrice = (customizedMergeData:any, totalQuantity:any) => {

     var priceWithQuantity = 0

     if(totalQuantity >= 25 && totalQuantity <= 49){
          priceWithQuantity = totalQuantity * (6.88 * customizedMergeData.length)
     }else if(totalQuantity >= 50 && totalQuantity <= 99){
          priceWithQuantity = totalQuantity * ( 4.80  * customizedMergeData.length )
     }else if(totalQuantity >= 100 && totalQuantity <= 249){
          priceWithQuantity = totalQuantity * ( 3.00 * customizedMergeData.length )
     }else if(totalQuantity >= 250 && totalQuantity <= 499){
          priceWithQuantity = totalQuantity * ( 2.80 * customizedMergeData.length )
     }else if(totalQuantity >= 500 && totalQuantity <= 999){
          priceWithQuantity = totalQuantity * ( 2.20 * customizedMergeData.length )
     }else if(totalQuantity >= 1000 && totalQuantity <= 2499){
          priceWithQuantity = totalQuantity * ( 1.98 * customizedMergeData.length )
     }else if(totalQuantity >= 2500){
          priceWithQuantity = totalQuantity * ( 1.85 * customizedMergeData.length )
     }

     return priceWithQuantity
}



// calculate total price with vat and if also have coupon code
export const TotalPriceCalculate = (cartItems: any) => {
     const totalPriceWithoutVAT = cartItems.reduce((sum: any, product: any) => sum + +product.price, 0).toFixed(2);
     const vat = Number(((20 / 100) * totalPriceWithoutVAT).toFixed(2));
     let priceWithVat = Number(totalPriceWithoutVAT) + vat;
   
     let hasValidCoupon = null; // Initialize as null
     var couponDiscountPrice;
     var priceAfterCopuon

     if (typeof window !== 'undefined') {
       // Check if window is defined (client-side)
       hasValidCoupon = window.sessionStorage.getItem('coupon');
     }
   
     if (hasValidCoupon === 'valid') {
          couponDiscountPrice = priceWithVat * 15 / 100;
          priceAfterCopuon = priceWithVat - couponDiscountPrice
          priceWithVat = priceAfterCopuon
     }
   

     return {
       vat,
       priceWithVat,
       totalPriceWithoutVAT,
       couponDiscountPrice, 
     };
   };
   

   export const formatDate = (date:any) => {
     const options:any = { weekday: 'long', day: 'numeric', month: 'long' };
     const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
     const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
     const suffix = getDaySuffix(day);
     return formattedDate.replace(/\d+/, day + suffix);
   };
   
   const getDaySuffix = (day:any) => {
     if (day >= 11 && day <= 13) {
       return 'th';
     }
     switch (day % 10) {
       case 1:
         return 'st';
       case 2:
         return 'nd';
       case 3:
         return 'rd';
       default:
         return 'th';
     }
   };
   
   export const getNextBusinessDay = (startDate:any, daysToAdd:any) => {
     let currentDate = new Date(startDate);
     while (daysToAdd > 0) {
       currentDate.setDate(currentDate.getDate() + 1);
       // Skip Saturday (6) and Sunday (0)
       if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
         daysToAdd--;
       }
     }
     return currentDate;
   };