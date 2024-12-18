

// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../../lib/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const querySnapshot = await getDocs(collection(db, "products"));
//       const productsList = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productsList);
//     };
//     fetchProducts();
//   }, []);

//   const getFirst10Words = (description) => {
//     const words = description.split(" ");
//     return words.slice(0, 8).join(" ") + (words.length > 8 ? "..." : "");
//   };

//   const addToCart = (product) => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingProduct = storedCart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       const updatedCart = storedCart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     } else {
//       const updatedCart = [
//         ...storedCart,
//         { id: product.id, name: product.name, price: product.price, quantity: 1 },
//       ];
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }

//     // Show alert with animation
//     setAlertMessage(`${product.name} has been added to your cart.`);
//     setShowAlert(true);

//     // Hide alert after 3 seconds
//     setTimeout(() => setShowAlert(false), 3000);
//   };

//   return (
//     <div className="min-h-screen p-8 bg-gray-100">
   
// <div className="productHread">
// <h1 className="text-2xl font-semibold mb-4 uppercase"> new arrivals </h1>
// <p className="text-sm">Claritas est etiam processus dynamicus, qui sequitur. </p>
// </div>
//       {/* Animated Alert */}
//       {showAlert && (
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -50 }}
//           className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg z-50"
//         >
//           {alertMessage}
//         </motion.div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//              <Link   key={product.id}  href={`/products/${product.id}`}>
//           <div
          
//             className="relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 CardProductContainer"
//           >
         
//               {product.imageUrl ? (
//                 <img
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="w-full h-48 object-cover rounded-lg mb-4"
//                 />
//               ) : (
//                 <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
//               )}
          
//             <div className="productPriceTitle">
//               <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-700 mb-4">${(product.price / 100).toFixed(2)}</p>
//             </div>
//             <p className="text-gray-600 mb-4">{getFirst10Words(product.description)}</p>

//             <button
//               onClick={() => addToCart(product)}
//               className="flex items-center justify-center w-10 h-10 bg-sky-700 text-white rounded-full hover:bg-slate-100 absolute bottom-3 left-3"
//             >
//               <Image src="/cart.png" alt="Add to cart" width={24} height={24} />
//             </button>
//           </div>
//           </Link>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Products;

// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../../lib/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [displayedProducts, setDisplayedProducts] = useState([]);
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(8); // Start with showing 8 products initially

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const querySnapshot = await getDocs(collection(db, "products"));
//       const productsList = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productsList);
//       setDisplayedProducts(productsList.slice(0, 8)); // Show first 8 products initially
//     };

//     fetchProducts();
//   }, []);

//   const getFirst10Words = (description) => {
//     const words = description.split(" ");
//     return words.slice(0, 8).join(" ") + (words.length > 8 ? "..." : "");
//   };

//   const addToCart = (product) => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingProduct = storedCart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       const updatedCart = storedCart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     } else {
//       const updatedCart = [
//         ...storedCart,
//         { id: product.id, name: product.name, price: product.price, quantity: 1 },
//       ];
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }

//     // Show alert with animation
//     setAlertMessage(`${product.name} has been added to your cart.`);
//     setShowAlert(true);

//     // Hide alert after 3 seconds
//     setTimeout(() => setShowAlert(false), 3000);
//   };

//   const loadMoreProducts = () => {
//     const nextIndex = currentIndex + 4; // Load 4 more products
//     setCurrentIndex(nextIndex);
//     setDisplayedProducts(products.slice(0, nextIndex)); // Load next batch of products
//   };

//   return (
//     <div className="min-h-screen p-8 bg-gray-100">
//       <div className="productHread">
//         <h1 className="text-2xl font-semibold mb-4 uppercase">New Arrivals</h1>
//         <p className="text-sm">Claritas est etiam processus dynamicus, qui sequitur.</p>
//       </div>

//       {/* Animated Alert */}
//       {showAlert && (
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -50 }}
//           className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg z-50"
//         >
//           {alertMessage}
//         </motion.div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {displayedProducts.map((product) => (
   
//             <div  key={product.id} className="relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 CardProductContainer">
//                    <Link href={`/products/${product.id}`}>
//               {product.imageUrl ? (
//                 <img
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="w-full h-48 object-cover rounded-lg mb-4"
//                 />
//               ) : (
//                 <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
//               )}

//               <div className="productPriceTitle">
//                 <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//                 <p className="text-gray-700 mb-4">${(product.price / 100).toFixed(2)}</p>
//               </div>
//               <p className="text-gray-600 mb-4">{getFirst10Words(product.description)}</p>
// </Link>
//               <button
//                 onClick={() => addToCart(product)}
//                 className="flex items-center justify-center w-10 h-10 bg-sky-700 text-white rounded-full hover:bg-slate-100 absolute bottom-3 left-3"
//               >
//                 <Image src="/cart.png" alt="Add to cart" width={24} height={24} />
//               </button>
//             </div>
     
//         ))}
//       </div>

//       {/* Load More Button */}
//       {displayedProducts.length < products.length && (
//         <div className="mt-8 text-center">
//           <button
//             onClick={loadMoreProducts}
//             className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Load More Products
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;

"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // Import heart icons

const Products = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(8); // Start with showing 8 products initially
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
      setDisplayedProducts(productsList.slice(0, 8)); // Show first 8 products initially
    };

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);

    fetchProducts();
  }, []);

  const toggleFavorite = (product) => {
    let updatedFavorites;

    if (favorites.some((fav) => fav.id === product.id)) {
      // Remove from favorites
      updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, product];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const getFirst10Words = (description) => {
    const words = description.split(" ");
    return words.slice(0, 8).join(" ") + (words.length > 8 ? "..." : "");
  };

  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = storedCart.find((item) => item.id === product.id);

    let updatedCart;
    if (existingProduct) {
      updatedCart = storedCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...storedCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          imageUrl: product.imageUrl, // Include product image
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Trigger a custom storage event
    window.dispatchEvent(new Event("cartUpdated"));

    // Show alert with animation
    setAlertMessage(`${product.name} Added To Cart!`);
    setShowAlert(true);

    // Hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  const loadMoreProducts = () => {
    const nextIndex = currentIndex + 4; // Load 4 more products
    setCurrentIndex(nextIndex);
    setDisplayedProducts(products.slice(0, nextIndex)); // Load next batch of products
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="productHread">
        <h1 className="text-2xl font-semibold mb-4 uppercase">New Arrivals</h1>
        <p className="text-sm">Claritas est etiam processus dynamicus, qui sequitur.</p>
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
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            style={{ height: "400px" }}
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

              <div className="productPriceTitle">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">
                  ${(product.price / 100).toFixed(2)}
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                {getFirst10Words(product.description)}
              </p>
            </Link>

            <div className="productButtons">
              {/* Favorite Icon */}
              <div
                className="absolute bottom-4 right-4 cursor-pointer"
                onClick={() => toggleFavorite(product)}
              >
                {favorites.some((fav) => fav.id === product.id) ? (
                  <AiFillHeart size={24} className="text-red-500 " />
                ) : (
                  <AiOutlineHeart size={24} className="text-gray-500" />
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className="flex items-center justify-center text-white rounded-full hover:bg-slate-100 absolute bottom-4 left-4"
              >
                <Image src="/cart.png" alt="Add to cart" width={24} height={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {displayedProducts.length < products.length && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMoreProducts}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;

