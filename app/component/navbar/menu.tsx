// "use client"
// import React from 'react'
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// const Menu = () => {
//     const[open, setOpen] = useState(false)
//     const [cartCount, setCartCount] = useState(0); // State to hold the cart count

//     const router = useRouter();
  
//     const handleProfile = () => {
//       router.push("/login");
//     };
  
//     const handleCart = () => {
//       router.push("/cart");
//     };
//     useEffect(() => {
//       const updateCartCount = () => {
//         const cartData = localStorage.getItem("cart");
//         const storedCart = cartData ? JSON.parse(cartData) : []; // Add a null check
//         setCartCount(storedCart.length);
//       };
  
//       // Update cart count on mount
//       updateCartCount();
  
//       // Listen for storage changes from other components or tabs
//       const handleStorageChange = () => {
//         updateCartCount();
//       };
  
//       window.addEventListener("storage", handleStorageChange);
  
//       return () => {
//         window.removeEventListener("storage", handleStorageChange);
//       };
//     }, []);
//     const handleSignUP = () => {
//       router.push("/signup");
//     };
  
//   return (
//     <div className=" z-30">
//     <Image
//       src="/menu.png"
//       alt=""
//       width={28}
//       height={28}
//       className="cursor-pointer"
//       onClick={() => setOpen((prev) => !prev)}
//     />
//     {open && (
//       <div className="absolute bg-slate-400 z-100  text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
//    <Link href="/">Homepage</Link>
           
//            <Link href="/shop">Shop</Link>

//            <Link href="/blog">Blogs</Link>
//            <Link href="/about">About</Link>
//            <Link href="/contact">Contact</Link>
//         <p onClick={handleSignUP} className=' cursor-pointer'>Logout</p>
//         <Link href="/cart">   <div className="relative cursor-pointer">
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
//         </Link>
//       </div>
//     )}
//   </div>
//   )
// }

// export default Menu


"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // State to hold the cart count

  const router = useRouter();

  const handleProfile = () => {
    router.push("/login");
    setOpen(false); // Close menu after navigation
  };

  const handleCart = () => {
    router.push("/cart");
    setOpen(false); // Close menu after navigation
  };

  useEffect(() => {
    const updateCartCount = () => {
      const cartData = localStorage.getItem("cart");
      const storedCart = cartData ? JSON.parse(cartData) : []; // Add a null check
      setCartCount(storedCart.length);
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

  const handleSignUP = () => {
    router.push("/signup");
    setOpen(false); // Close menu after navigation
  };

  // Function to handle link clicks and close the menu
  const handleLinkClick = (href) => {
    router.push(href);
    setOpen(false); // Close menu after navigation
  };

  return (
    <div className="z-30">
      <Image
        src="/menu.png"
        alt="Menu Icon"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-slate-400 z-100 text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl">
          <p onClick={() => handleLinkClick("/")} className="cursor-pointer">
            Homepage
          </p>
          <p onClick={() => handleLinkClick("/shop")} className="cursor-pointer">
            Shop
          </p>
          <p onClick={() => handleLinkClick("/blog")} className="cursor-pointer">
            Blogs
          </p>
          <p onClick={() => handleLinkClick("/about")} className="cursor-pointer">
            About
          </p>
          <p onClick={() => handleLinkClick("/contact")} className="cursor-pointer">
            Contact
          </p>
          <p onClick={handleSignUP} className="cursor-pointer">
            Logout
          </p>
          <div className="relative cursor-pointer" onClick={handleCart}>
            <Image src="/cart.png" alt="Cart Icon" width={22} height={22} />
            {cartCount > 0 && (
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-800 rounded-full text-white text-sm flex items-center justify-center">
                {cartCount}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
