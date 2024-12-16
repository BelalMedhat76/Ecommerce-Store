// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import CartModal from "./CartModal";
// import '../../../tailwind.config'

// const NavIcons = () => {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const router = useRouter();
//   const pathName = usePathname();

//   // const wixClient = useWixClient();
//   const isLoggedIn = false

//   // TEMPORARY
//   // const isLoggedIn = false;

//   const handleProfile = () => {

//       router.push("/login");
  
//   };
//   const handleCart= () => {
  
//       router.push("/cart");
    
    
//   };


//   return (
//     <div className="flex items-center gap-4 xl:gap-6 relative">
//       <Image
//         src="/profile.png"
//         alt=""
//         width={22}
//         height={22}
//         className="cursor-pointer"
//         // onClick={login}
//         onClick={handleProfile}
//       />
//       {isProfileOpen && (
//         <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
//           <Link href="/profile">Profile</Link>
//           <div className="mt-2 cursor-pointer" >
//             {isLoading ? "Logging out" : "Logout"}
//           </div>
//         </div>
//       )}
//       <Image
//         src="/notification.png"
//         alt=""
//         width={22}
//         height={22}
//         className="cursor-pointer"
//        />
//       <div
//         className="relative cursor-pointer"
     
//       >
//         <Image src="/cart.png" alt="" width={22} height={22}    onClick={handleCart} />
//         <div    onClick={ handleCart } className="absolute -top-4 -right-4 w-6 h-6 bg-blue-800 rounded-full text-white text-sm flex items-center justify-center">
//        2
//         </div>
//       </div>
//       {isCartOpen && <CartModal />}
//     </div>
//   );
// };

// export default NavIcons;


"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // State to hold the cart count

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
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
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
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image src="/cart.png" alt="" width={22} height={22} onClick={handleCart} />
        {cartCount > 0 && (
          <div
            onClick={handleCart}
            className="absolute -top-4 -right-4 w-6 h-6 bg-blue-800 rounded-full text-white text-sm flex items-center justify-center"
          >
            {cartCount}
          </div>
        )}
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
