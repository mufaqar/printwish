
const SKey = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(SKey);

export default async function webhookHandler(req, res) {
  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      req.headers['stripe-signature'],
      "we_1NxrzsBYpJVF6ADt9IU0SviG"
    );

    // Handle the specific event (e.g., payment success event)
    if (event.type === 'checkout.session.completed') {
      // Update your database or perform other necessary actions
      console.log('Payment succeeded:', event.data.object);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({ error: 'Webhook request failed.' });
  }
}
