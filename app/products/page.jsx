

"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };
    fetchProducts();
  }, []);

  const getFirst10Words = (description) => {
    const words = description.split(" ");
    return words.slice(0, 8).join(" ") + (words.length > 8 ? "..." : "");
  };

  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = storedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = storedCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [
        ...storedCart,
        { id: product.id, name: product.name, price: product.price, quantity: 1 },
      ];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // Show alert with animation
    setAlertMessage(`${product.name} has been added to your cart.`);
    setShowAlert(true);

    // Hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
   
<div className="productHread">
<h1 className="text-2xl font-semibold mb-4 uppercase"> new arrivals </h1>
<p className="text-sm">Claritas est etiam processus dynamicus, qui sequitur. </p>
</div>
      {/* Animated Alert */}
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg z-50"
        >
          {alertMessage}
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 CardProductContainer"
          >
            <Link href={`/products/${product.id}`}>
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
              )}
            </Link>
            <div className="productPriceTitle">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">${(product.price / 100).toFixed(2)}</p>
            </div>
            <p className="text-gray-600 mb-4">{getFirst10Words(product.description)}</p>

            <button
              onClick={() => addToCart(product)}
              className="flex items-center justify-center w-10 h-10 bg-sky-700 text-white rounded-full hover:bg-slate-100 absolute bottom-3 left-3"
            >
              <Image src="/cart.png" alt="Add to cart" width={24} height={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
