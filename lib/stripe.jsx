// lib/stripe.js
import Stripe from 'stripe';

// Initialize Stripe with the secret key from your Stripe dashboard
const stripe = new Stripe('pk_live_51QVARBJrfFLYSBUAKzJrlbIQTVAKdH1uPVbEjQULrWPDylScp9t3NvCxNl3M9kacR7AzVUQJ3Ui7IvmWWyh8SzxJ00hRFjxfH3', {
  apiVersion: '2020-08-27',
});

export default stripe;
