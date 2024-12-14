// 



"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correctly import the useRouter hook
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore"; // Add addDoc

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false); // Add state to track client-side render
  const [showAlert, setShowAlert] = useState(false);  // State for showing alert
  const router = useRouter();  // Call useRouter directly at the top level

  // UseEffect to set isClient to true once it's on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch cart items from localStorage or state
  useEffect(() => {
    const fetchCartItems = async () => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(cartData);
    };

    fetchCartItems();
  }, []);

  // Function to save order to Firestore
  const saveOrderToFirestore = async (orderData) => {
    try {
      const ordersCollection = collection(db, "orders");
      await addDoc(ordersCollection, orderData);
    } catch (error) {
      console.error("Error saving order to Firestore:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      customerName: name,
      address,
      paymentMethod,
      items: cart,
      totalPrice: cart.reduce((total, item) => total + (item.price * item.quantity) / 100, 0),
      status: "Pending", // Default status for new orders
      createdAt: new Date(),
    };

    // Save order data to Firestore
    await saveOrderToFirestore(orderData);

    // After processing, clear cart
    localStorage.removeItem("cart");
    setCart([]);

    setLoading(false);

    // Show alert message and then redirect
    setShowAlert(true);

    // Hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
      router.push("/products"); // Redirect to cart page
    }, 3000);
  };

  // Don't render page until the client-side is ready
  if (!isClient) {
    return null; // Return nothing until the client-side has mounted
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Checkout</h1>

      {/* Alert Message */}
      {showAlert && (
        <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-green-500 text-white text-center text-lg rounded-lg shadow-lg animate__animated animate__fadeIn animate__fast">
          Order Confirmed! Thank you for your purchase. You will be redirected shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 mb-2">Shipping Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="payment" className="block text-gray-700 mb-2">Payment Method</label>
          <select
            id="payment"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>

        <div className="mb-4 text-slate-950">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <ul>
            {cart.map((item) => (
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
              {cart.reduce((total, item) => total + (item.price * item.quantity) / 100, 0).toFixed(2)}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
          disabled={loading}
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
