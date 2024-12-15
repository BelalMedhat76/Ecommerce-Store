


"use client";
import { useEffect, useState } from "react";
import AuthGuard from "../component/AuthGuard";
import { useRouter } from "next/navigation";  // Correct usage of the hook

const Cart = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter(); // Make sure to define router here

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const goToCheckout = () => {
    router.push("/checkout");  // Now it's inside the component body
  };

  if (cart.length === 0) {
    return <p className="text-center text-white mt-6">Your cart is empty.</p>;
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-700 p-6">
        <h1 className="text-3xl text-white mb-6">Your Cart</h1>
        <ul>
          {cart.map((item, index) => {
            // Fallback to index if item.id is not unique or missing
            const itemKey = item.id || `fallback-key-${index}`;

            return (
              <li key={itemKey} className="bg-slate-900 p-4 mb-4 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-white-700">${(item.price / 100).toFixed(2)}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="mt-2 w-16 p-2 border bg-slate-600  text-black rounded"
                    min="1"
                  />
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-white-500 px-4 py-2 rounded-3xl bg-blue-700 "
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>

        {/* Proceed to Checkout Button */}
        <button
          onClick={goToCheckout}
          className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Proceed to Checkout
        </button>
      </div>
    </AuthGuard>
  );
};

export default Cart;
