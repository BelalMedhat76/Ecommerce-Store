
// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { AiFillHeart } from "react-icons/ai";
// const NavIcons = () => {
//   // const [isProfileOpen, setIsProfileOpen] = useState(true);
//   // const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartCount, setCartCount] = useState(0); // State to hold the cart count
//   const [favoritesCount, setFavoritesCount] = useState(0);
//   const router = useRouter();

//   const handleProfile = () => {
//     router.push("/login");
//   };
//   const handelFav = ()=>{
//     router.push("/favorites");
//   }
//   const handleCart = () => {
//     router.push("/cart");
//   };

//   // Update cart count dynamically
//   useEffect(() => {
//     const updateCartCount = () => {
//       const cartData = localStorage.getItem("cart");
//       const storedCart = cartData ? JSON.parse(cartData) : []; // Add a null check
//       setCartCount(storedCart.length);
//       const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//       setFavoritesCount(storedFavorites.length);
//     };
  
//     // Update cart count on mount
//     updateCartCount();

//     // Listen for storage changes from other components or tabs
//     const handleStorageChange = () => {
//       updateCartCount();
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);
 






//   return (
//     <div className="flex items-center gap-4 xl:gap-6 relative">
//       <Image
//         src="/profile.png"
//         alt=""
//         width={22}
//         height={22}
//         className="cursor-pointer"
//         onClick={handleProfile}
//       />
//       {/* {isProfileOpen && (
//         <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
//           <Link href="/profile">Profile</Link>
//           <div className="mt-2 cursor-pointer">Logout</div>
//         </div>
//       )} */}
//         <div className="relative">
//           <Link href="/favorites">
//             <AiFillHeart size={32} className="text-red-500 cursor-pointer" />
//           </Link>
//           {favoritesCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
//               {favoritesCount}
//             </span>
//           )}
//         </div>
//       <div className="relative cursor-pointer">
//         <Image src="/cart.png" alt="" width={22} height={22} onClick={handleCart} />
//         {cartCount > 0 && (
//           <div
//             onClick={handleCart}
//             className="absolute -top-4 -right-4 w-6 h-6 bg-blue-800 rounded-full text-white text-sm flex items-center justify-center"
//           >
//             {cartCount}
//           </div>
//         )}
//       </div>
//       {/* {isCartOpen && <CartModal />} */}
//     </div>
//   );
// };

// export default NavIcons;


"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const NavIcons = () => {
  const [cartCount, setCartCount] = useState(0); // State to hold the cart count
  const [favoritesCount, setFavoritesCount] = useState(0);
  const router = useRouter();

  const handleProfile = () => {
    router.push("/login");
  };



  const handleCart = () => {
    router.push("/cart");
  };

  // Update cart count dynamically
  useEffect(() => {
    const updateCartCount = () => {
      const cartData = localStorage.getItem("cart");
      const storedCart = cartData ? JSON.parse(cartData) : []; // Add a null check
      setCartCount(storedCart.length);

      // Check for null before parsing favorites
      const favoritesData = localStorage.getItem("favorites");
      const storedFavorites = favoritesData ? JSON.parse(favoritesData) : [];
      setFavoritesCount(storedFavorites.length);
    };

    // Update cart count on mount
    updateCartCount();

    // Listen for storage changes from other components or tabs
    const handleStorageChange = () => {
      updateCartCount();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      <div className="relative">
        <Link href="/favorites">
          <AiFillHeart size={30} className="text-red-600 cursor-pointer" />
       
        {favoritesCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-800 text-white text-xs font-bold px-2 py-1 rounded-full">
            {favoritesCount}
          </span>
          
        )}
         </Link>
      </div>
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          onClick={handleCart}
        />
        {cartCount > 0 && (
          <div
            onClick={handleCart}
            className="absolute -top-4 -right-4 w-6 h-6 bg-blue-800 rounded-full text-white text-sm flex items-center justify-center"
          >
            {cartCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavIcons;
