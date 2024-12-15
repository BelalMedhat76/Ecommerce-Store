

"use client";
import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { use } from "react";

const ProductDetail = ({ params }) => {
  // Unwrap params to get the `id`
  const { id } = use(params); // Unwrap `params` to get `id`
  const [product, setProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  // Function to add the product to the cart
  const addToCart = () => {
    if (!product) return;

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

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  // Fetch product details from Firestore
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id, ...docSnap.data() });
        } else {
          console.log("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle loading state if product data isn't available yet
  if (!product) return <div className="loader">Loading...</div>; // You can replace this with a spinner

  return (
    <div className="min-h-screen bg-gray-700 p-6 flex justify-center items-center">
      {/* Product Card */}
      <div className="bg-slate-800 p-6 rounded-lg shadow-md w-96 transform transition-all duration-300 hover:scale-105">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-semibold text-white mb-4">{product.name}</h1>
        <p className="text-gray-300 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-white mb-6">
          ${(product.price / 100).toFixed(2)}
        </p>
        <button
          onClick={addToCart}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transform transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>

      {/* Animated Cart Alert */}
      {showAlert && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg transform transition-all duration-500 opacity-100 animate-slide-in">
          <p className="font-semibold">Product added to cart!</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
