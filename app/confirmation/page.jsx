"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const OrderConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const router = useRouter();

  // Fetch the order details from localStorage or state after successful submission
  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("orderDetails"));
    if (!orderData) {
      // If there's no order data, redirect the user back to the checkout page
      router.push("/checkout");
    } else {
      setOrderDetails(orderData);
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Order Confirmation</h1>

      {orderDetails ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <p className="mb-4">Thank you for your purchase, {orderDetails.customerName}!</p>
          <p className="mb-4">Your order has been successfully placed. Here are your order details:</p>
          
          <div className="mb-4">
            <h3 className="font-semibold">Shipping Address:</h3>
            <p>{orderDetails.address}</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold">Payment Method:</h3>
            <p>{orderDetails.paymentMethod}</p>
          </div>
          
          <h3 className="font-semibold mb-2">Items:</h3>
          <ul>
            {orderDetails.items.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <span>{item.name}</span>
                <span>${(item.price / 100).toFixed(2)} x {item.quantity}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between">
            <span className="font-semibold">Total:</span>
            <span>
              $
              {orderDetails.items.reduce((total, item) => total + (item.price * item.quantity) / 100, 0).toFixed(2)}
            </span>
          </div>

          <div className="mt-6">
            <button
              onClick={() => router.push("/")}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Go to Home
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
