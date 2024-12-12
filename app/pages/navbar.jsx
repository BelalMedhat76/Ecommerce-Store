import React from 'react'

import Link from 'next/link';
const Nav = () => {
  return (
    <div>
     <header className="bg-gray-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl  font-semibold">My E-Commerce Store</h1>
          <nav>
            <Link href="/products">
              <span className="text-lg">Products</span>
            </Link>
            <Link href="/cart">
              <span className="ml-4 text-lg">Cart</span>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Nav
