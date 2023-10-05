import type { NextApiRequest, NextApiResponse } from 'next'

const SKey = "sk_test_51KZccKBYpJVF6ADtJIF54auA6RHJEEiEBasxyMMN8hvwOC2czH4rSBdt0tRCwCMw9gYUxynchdG5yjxCjYp44JyF00tvx0T4gJ"
const BaseURL = process.env.NEXT_PUBLIC_SITE_URL

const stripe = require('stripe')(SKey)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const {orderdata}  = JSON.parse(req.body)
  const price = orderdata.totalprice * 100
  
  const objString = new URLSearchParams(orderdata.orderdata).toString();


  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'gbp',
        product_data: {
          name: "Printwish",
       //   images: ['https://i.imgur.com/EHyR2nP.png'],
        },
        unit_amount: price,
      },
      quantity: 1,
    },],
    mode: 'payment',
    success_url: `${BaseURL}/success?session_id={CHECKOUT_SESSION_ID}&${objString}`,
    cancel_url: `${BaseURL}/cancel`,
  });

  if(session){
    console.log('session exist')
  }else{
    console.log('not exist')
  }
  res.status(200).json({ session })
}