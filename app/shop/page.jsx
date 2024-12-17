"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Products from "../products/page";
import WhyShopWithUs from '../component/WhyShopUs'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(8);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
      setDisplayedProducts(productsList.slice(0, 8)); // Display first 8 products initially
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

    setAlertMessage(`${product.name} has been added to your cart.`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const loadMoreProducts = () => {
    const nextIndex = currentIndex + 4;
    setCurrentIndex(nextIndex);
    setDisplayedProducts(products.slice(0, nextIndex));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section with Background Image and Dark Overlay */}
      <header className="relative bg-cover bg-center h-96 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/shopback.jpg")' }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40 "></div>
        
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Shop Our Collection</h1>
          <p className="text-xl mb-6">Discover your new favorites</p>
          <Link href="/shop">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Explore the Shop
            </button>
          </Link>
        </motion.div>
      </header>

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

      {/* Product Grid Section */}
      <Products />

      {/* Why Shop With Us Section */}
      <WhyShopWithUs />
    </div>
  );
};

export default Shop;
