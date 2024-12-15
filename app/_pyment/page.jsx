"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../../components/PaymentForm";

const stripePromise = loadStripe("your-publishable-key-here");

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <h1 className="text-2xl font-semibold mb-6">Payment</h1>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default PaymentPage;
