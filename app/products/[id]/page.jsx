

// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../../../lib/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { use } from "react";

// const ProductDetail = ({ params }) => {
//   // Unwrap params to get the `id`
//   const { id } = use(params); // Unwrap `params` to get `id`
//   const [product, setProduct] = useState(null);
//   const [showAlert, setShowAlert] = useState(false);

//   // Function to add the product to the cart
//   const addToCart = () => {
//     if (!product) return;

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

//     setShowAlert(true);
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   // Fetch product details from Firestore
//   useEffect(() => {
//     if (!id) return;

//     const fetchProduct = async () => {
//       try {
//         const docRef = doc(db, "products", id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setProduct({ id, ...docSnap.data() });
//         } else {
//           console.log("No such product!");
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   // Handle loading state if product data isn't available yet
//   if (!product) return <div className="loader">Loading...</div>; // You can replace this with a spinner

//   return (
//     <div className="min-h-screen bg-gray-700 p-6 flex justify-center items-center">
//       {/* Product Card */}
//       <div className="bg-slate-800 p-6 rounded-lg shadow-md w-96 transform transition-all duration-300 hover:scale-105">
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           className="w-full h-48 object-cover rounded-lg mb-6"
//         />
//         <h1 className="text-3xl font-semibold text-white mb-4">{product.name}</h1>
//         <p className="text-gray-300 mb-4">{product.description}</p>
//         <p className="text-xl font-semibold text-white mb-6">
//           ${(product.price / 100).toFixed(2)}
//         </p>
//         <button
//           onClick={addToCart}
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transform transition-all duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>

//       {/* Animated Cart Alert */}
//       {showAlert && (
//         <div className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg transform transition-all duration-500 opacity-100 animate-slide-in">
//           <p className="font-semibold">Product added to cart!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;






"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import reviewsData from "../../../public/reviews.json"; // Import reviews from the JSON file

const ProductDetail = ({ params }) => {
  const { id } = React.use(params); // Unwrap `params` using `React.use()`
  const [product, setProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [quantity, setQuantity] = useState(1); // Add quantity state

  // Function to add the product to the cart
  const addToCart = () => {
    if (!product) return;

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = storedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = storedCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [
        ...storedCart,
        { 
          id: product.id, 
          name: product.name, 
          price: product.price, 
          quantity, 
          imageUrl: product.imageUrl // Store the product image URL here
        }
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
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Product Details Section */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-12">
        {/* Product Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Information Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            
                   <span className="text-2xl font-semibold text-blue-600 mb-6">
            Title : {"   "}
        </span>
             
            
            {product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">
          Price : {"  "}
          ${(product.price / 100).toFixed(2)}
         </p>


          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="text-2xl bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="text-2xl bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Features Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Features</h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          {product.features?.map((feature, index) => (
            <li key={index} className="mb-2">{feature}</li>
          ))}
        </ul>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
      <div className="text-3xl font-semibold text-gray-800 mb-4 flex justify-center align-center">         <span className="text-2xl font-semibold  text-blue-600 mb-6">           Customer Reviews           </span>          </div>
        {reviewsData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={review.userImage || "/default-avatar.jpg"}
                    alt={review.user}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{review.user}</h3>
                    <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet.</p>
        )}
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


// "use client";
// import React, { useEffect, useState } from "react";
// import { db } from "../../../lib/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import reviewsData from "../../../public/reviews.json"; // Import reviews from the JSON file

// const ProductDetail = ({ params }) => {
//   const { id } = React.use(params); // Unwrap `params` using `React.use()`
//   const [product, setProduct] = useState(null);
//   const [showAlert, setShowAlert] = useState(false);
//   const [quantity, setQuantity] = useState(1); // Add quantity state

//   // Function to add the product to the cart
//   const addToCart = () => {
//     if (!product) return;

//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

//     const existingProduct = storedCart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       const updatedCart = storedCart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + quantity }
//           : item
//       );
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     } else {
//       const updatedCart = [
//         ...storedCart,
//         { id: product.id, name: product.name, price: product.price, quantity },
//       ];
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }

//     setShowAlert(true);
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   // Fetch product details from Firestore
//   useEffect(() => {
//     if (!id) return;

//     const fetchProduct = async () => {
//       try {
//         const docRef = doc(db, "products", id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setProduct({ id, ...docSnap.data() });
//         } else {
//           console.log("No such product!");
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   // Handle loading state if product data isn't available yet
//   if (!product) return <div className="loader">Loading...</div>; // You can replace this with a spinner

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* Product Details Section */}
//       <div className="container mx-auto flex flex-col lg:flex-row gap-12">
//         {/* Product Image Section */}
//         <div className="w-full lg:w-1/2">
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             className="w-full h-80 object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Product Information Section */}
//         <div className="w-full lg:w-1/2">
//           <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            
//           <span className="text-2xl font-semibold text-blue-600 mb-6">
//              Title : {"   "}
//              </span>
             
//              {product.name}</h1>
//           <p className="text-lg text-gray-600 mb-4">{product.description}</p>
//           <p className="text-2xl font-semibold text-blue-600 mb-6">
//             Price : {"  "}
//             ${(product.price / 100).toFixed(2)}
//           </p>

//           {/* Quantity Selector */}
//           <div className="flex items-center gap-4 mb-6">
//             <button
//               onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
//               className="text-2xl bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"
//             >
//               -
//             </button>
//             <span className="text-xl">{quantity}</span>
//             <button
//               onClick={() => setQuantity((prev) => prev + 1)}
//               className="text-2xl bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"
//             >
//               +
//             </button>
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={addToCart}
//             className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Product Features Section */}
//       <div className="mt-12">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-4"></h2>
//         <ul className="list-disc list-inside text-lg text-gray-600">
//           {product.features?.map((feature, index) => (
//             <li key={index} className="mb-2">{feature}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Reviews Section */}
//       <div className="" style={{paddingTop:"60px"}}>
//         <div className="text-3xl font-semibold text-gray-800 mb-4 flex justify-center align-center">
//         <span className="text-2xl font-semibold  text-blue-600 mb-6">
//           Customer Reviews
//           </span>
//           </div>
//         {reviewsData.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {reviewsData.map((review) => (
//               <div
//                 key={review.id}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={review.userImage || "/default-avatar.jpg"}
//                     alt={review.user}
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                   <div>
//                     <h3 className="font-semibold">{review.user}</h3>
//                     <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mt-4">{review.comment}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No reviews yet.</p>
//         )}
//       </div>

//       {/* Animated Cart Alert */}
//       {showAlert && (
//         <div className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg transform transition-all duration-500 opacity-100 animate-slide-in">
//           <p className="font-semibold">Product added to cart!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;
