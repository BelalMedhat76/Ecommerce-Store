"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Cart=()=> {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);

    const total = storedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-slate-800 p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="bg-white p-4 mb-4 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-700">${item.price / 100}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="mt-2 w-16 p-2 border rounded"
                    min="1"
                  />
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-semibold">Total: ${totalAmount / 100}</h2>
            <Link href="/checkout">
              <a className="bg-blue-500 text-white py-2 px-4 rounded">Proceed to Checkout</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart