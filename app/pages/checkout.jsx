"use client"
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../component/CheckoutForm';

const stripePromise = loadStripe('pk_live_51QVARBJrfFLYSBUAKzJrlbIQTVAKdH1uPVbEjQULrWPDylScp9t3NvCxNl3M9kacR7AzVUQJ3Ui7IvmWWyh8SzxJ00hRFjxfH3');  // Replace with your publishable key from Stripe

const Checkout=()=> {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 10000 }), // Amount in cents ($100.00)
      });

      const data = await res.json();
      setClientSecret(data.clientSecret);
    };

    fetchPaymentIntent();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      <div className="bg-teal-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
}

export default Checkout