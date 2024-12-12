// pages/api/create-payment-intent.js
import stripe from '../../lib/stripe';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount } = req.body;

      // Create PaymentIntent with the amount
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        // Optionally, you can also add more configurations here.
      });

      res.status(200).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
