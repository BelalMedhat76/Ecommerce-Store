
"use client";
import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { use } from "react";

const ProductDetail = ({ params }) => {
  // Unwrap params to get the `id`
  const { id } = use(params); // Unwrap `params` to get `id`
  const [product, setProduct] = useState(null);

  // Function to add the product to the cart
  const addToCart = () => {
    // Check if product is loaded
    if (!product) return;

    // Get the cart from localStorage, or initialize it as an empty array
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProduct = storedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product exists, increase its quantity
      const updatedCart = storedCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 } // Increment quantity of existing product
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If the product is new, add it to the cart
      const updatedCart = [
        ...storedCart,
        { id: product.id, name: product.name, price: product.price, quantity: 1 }, // Add new product
      ];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // Notify the user that the product has been added
    alert("Product added to cart!");
  };

  // Fetch product details from Firestore
  useEffect(() => {
    if (!id) return; // Ensure id exists

    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Include the `id` from `params` to ensure it's correctly passed with product data
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
  if (!product) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-700 p-6 flex justify-center items-center">
      <div className="bg-slate-800 p-6 rounded-lg shadow-md w-96">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-semibold text-white mb-4">{product.name}</h1>
        <p className="text-gray-300 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-white mb-6">
          ${(product.price / 100).toFixed(2)}
        </p>
        <button
          onClick={addToCart} // Ensure the addToCart function is called here
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
