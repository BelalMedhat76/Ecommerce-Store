
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const NavIcons = () => {
  // const [isProfileOpen, setIsProfileOpen] = useState(true);
  // const [isCartOpen, setIsCartOpen] = useState(false);
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
      {/* {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )} */}
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
      {/* {isCartOpen && <CartModal />} */}
    </div>
  );
};

export default NavIcons;
