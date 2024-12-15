"use client";
import { useSearchParams } from "next/navigation";

const ConfirmationPage = () => {
  const params = useSearchParams();
  const orderId = params.get("order_id");

  return (
    <div className="confirmation-page">
      <h1 className="text-2xl font-semibold mb-4">Order Confirmation</h1>
      <p>Your order has been placed successfully!</p>
      <p className="mt-2">Order ID: {orderId}</p>
    </div>
  );
};

export default ConfirmationPage;
