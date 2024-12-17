import React from 'react'
import Link from 'next/link'
import Menu from './menu'
import Image from "next/image";
import SearchBar from './SearchBar'
import NavIcons from './NavIcons';
 const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative Nav">
    {/* MOBILE */}
    <div className="h-full flex items-center justify-between md:hidden">
      <Link href="/">
        <div className="text-2xl tracking-wide"><Image src="/logo2.png" alt="" width={80} height={50} /></div>
      </Link>
    <Menu/>     
    </div>
     {/* BIGGER SCREENS */}
     <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo2.png" alt="" width={80} height={50} />
            <div className="text-2xl tracking-wide"></div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
           
            <Link href="/shop">Shop</Link>

            <Link href="/blog">Blogs</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  )
}

export  default Navbar