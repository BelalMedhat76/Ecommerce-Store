"use client"
import { useEffect, useState } from 'react';
import { db } from '../../lib/firebase'
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
const Products=()=> {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
      };
      fetchProducts();
    }, []);
  
  return (
    <div className="min-h-screen bg-gray-700 p-8">
    <h1 className="text-2xl font-semibold mb-4">Product Listings</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-slate-800 p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-white-700 mb-4">${product.price / 100}</p>
          <p className="text-white-700 mb-4">${product.description}</p>

          <Link href={`/products/${product.id}`}>
            <span className="text-blue-500 hover:underline">View Details</span>
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Products


