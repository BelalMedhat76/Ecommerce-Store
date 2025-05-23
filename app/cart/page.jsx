// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);

//     const total = storedCart.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     setTotalAmount(total);
//   }, []);

//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const updateQuantity = (id, quantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === id ? { ...item, quantity } : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex justify-center">
//       <div className="w-full max-w-4xl bg-white p-4 sm:p-8 rounded-lg shadow-lg">
//         <h1 className="text-2xl sm:text-4xl font-semibold text-center mb-6 sm:mb-8">Your Shopping Cart</h1>

//         {cart.length === 0 ? (
//           <div className="text-center text-lg sm:text-xl text-gray-600">Your cart is empty!</div>
//         ) : (
//           <div>
//             <ul className="space-y-4 sm:space-y-6">
//               {cart.map((item) => (
//                 <li
//                   key={item.id}
//                   className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6 transition-all transform hover:scale-105 hover:shadow-xl"
//                 >
//                   <div className="flex items-center sm:gap-6 flex-col sm:flex-row">
//                     <img
//                       src={item.imageUrl || "https://images.pexels.com/photos/29768568/pexels-photo-29768568/free-photo-of-santa-claus-relaxing-outside-a-cozy-home.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
//                       alt={item.name}
//                       className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-md"
//                     />
//                     <div className="text-center sm:text-left">
//                       <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">{item.name}</h3>
//                       <p className="text-gray-600 text-sm sm:text-lg">${(item.price / 100).toFixed(2)}</p>
//                       <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
//                         <label className="text-sm text-gray-700">Quantity:</label>
//                         <input
//                           type="number"
//                           value={item.quantity}
//                           onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
//                           className="w-12 sm:w-16 p-2 border rounded text-center"
//                           min="1"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 font-semibold hover:text-red-700 transition duration-300"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
//               <div className="text-xl sm:text-2xl font-semibold text-gray-800">
//                 Total: ${(totalAmount / 100).toFixed(2)}
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link href="/checkout" className="bg-blue-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-center">
//                   Proceed to Checkout
//                 </Link>
//                 <Link href="/" className="bg-gray-300 text-gray-700 py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-gray-400 transition duration-300 text-center">
//                   Continue Shopping
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;


"use client";
import { useEffect, useState } from "react";
import AuthGuard from "../component/AuthGuard";
import { useRouter } from "next/navigation";  // Correct usage of the hook

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    const total = storedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
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
    router.push("/checkout");
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex justify-center">
        <div className="w-full max-w-4xl bg-white p-4 sm:p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-4xl font-semibold text-center mb-6 sm:mb-8">Your Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="text-center text-lg sm:text-xl text-gray-600">Your cart is empty!</div>
          ) : (
            <div>
              <ul className="space-y-4 sm:space-y-6">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6 transition-all transform hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center sm:gap-6 flex-col sm:flex-row">
                      <img
                        src={item.imageUrl || "https://images.pexels.com/photos/29768568/pexels-photo-29768568/free-photo-of-santa-claus-relaxing-outside-a-cozy-home.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-md"
                      />
                      <div className="text-center sm:text-left">
                        <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm sm:text-lg">${(item.price / 100).toFixed(2)}</p>
                        <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                          <label className="text-sm text-gray-700">Quantity:</label>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            className="w-12 sm:w-16 p-2 border rounded text-center"
                            min="1"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 font-semibold hover:text-red-700 transition duration-300"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-xl sm:text-2xl font-semibold text-gray-800">
                  Total: ${(totalAmount / 100).toFixed(2)}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={goToCheckout}
                    className="bg-blue-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-center"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => router.push("/")}
                    className="bg-gray-300 text-gray-700 py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-gray-400 transition duration-300 text-center"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AuthGuard>
  );
};

export default Cart;



// "use client";
// import { useEffect, useState } from "react";
// import AuthGuard from "../component/AuthGuard";
// import { useRouter } from "next/navigation";  // Correct usage of the hook

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const router = useRouter(); // Make sure to define router here

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const updateQuantity = (id, quantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === id ? { ...item, quantity } : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const goToCheckout = () => {
//     router.push("/checkout");  // Now it's inside the component body
//   };

//   if (cart.length === 0) {
//     return <p className="text-center text-white mt-6">Your cart is empty.</p>;
//   }

//   return (
//     <AuthGuard>
//       <div className="min-h-screen bg-gray-700 p-6">
//         <h1 className="text-3xl text-white mb-6">Your Cart</h1>
//         <ul>
//           {cart.map((item, index) => {
//             // Fallback to index if item.id is not unique or missing
//             const itemKey = item.id || `fallback-key-${index}`;

//             return (
//               <li key={itemKey} className="bg-slate-900 p-4 mb-4 rounded-lg shadow-md flex justify-between items-center">
//                 <div>
//                   <h3 className="text-xl font-semibold">{item.name}</h3>
//                   <p className="text-white-700">${(item.price / 100).toFixed(2)}</p>
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
//                     className="mt-2 w-16 p-2 border bg-slate-600  text-black rounded"
//                     min="1"
//                   />
//                 </div>
//                 <button 
//                   onClick={() => removeFromCart(item.id)} 
//                   className="text-white-500 px-4 py-2 rounded-3xl bg-blue-700 "
//                 >
//                   Remove
//                 </button>
//               </li>
//             );
//           })}
//         </ul>

//         {/* Proceed to Checkout Button */}
//         <button
//           onClick={goToCheckout}
//           className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </AuthGuard>
//   );
// };

// export default Cart;