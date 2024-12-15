
"use client";

import { useState, useEffect } from "react";
import { db } from "../../../lib/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
  });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsSnapshot = await getDocs(collection(db, "products"));
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    if (!newProduct.name.trim() || !newProduct.imageUrl.trim()) {
      alert("Please provide valid product details.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "products"), newProduct);
      setProducts([...products, { id: docRef.id, ...newProduct }]);
      setNewProduct({ name: "", price: 0, description: "", imageUrl: "" });
      alert("Product added!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts(products.filter((product) => product.id !== id));
      alert("Product deleted!");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  const handleEditProduct = async () => {
    if (!editProduct.name.trim() || !editProduct.imageUrl.trim()) {
      alert("Please provide valid product details.");
      return;
    }

    try {
      const productRef = doc(db, "products", editProduct.id);
      await updateDoc(productRef, editProduct);
      setProducts(products.map((p) => (p.id === editProduct.id ? editProduct : p)));
      setEditProduct(null);
      alert("Product updated!");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product.");
    }
  };

  const handlePriceChange = (e) => {
    const priceValue = e.target.value;
    const validPrice = priceValue ? parseInt(priceValue) : 0;
    setNewProduct({ ...newProduct, price: validPrice });
  };

  return (
    <div className="bg-gray-100 py-6 px-4 lg:px-12">
      <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">
        Manage Products
      </h1>

      {/* Add Product Form */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8 p-6 bg-white shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-3 rounded-md flex-1"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price || 0}
          onChange={handlePriceChange}
          className="border p-3 rounded-md w-1/3"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.imageUrl}
          onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
          className="border p-3 rounded-md flex-1"
        />
        <textarea
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="border p-3 rounded-md flex-1"
        />
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add Product
        </button>
      </div>

      {/* Edit Product Form */}
      {editProduct && (
        <div className="flex flex-col lg:flex-row gap-6 mb-8 p-6 bg-white shadow-lg rounded-lg">
          <input
            type="text"
            placeholder="Product Name"
            value={editProduct.name}
            onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
            className="border p-3 rounded-md flex-1"
          />
          <input
            type="number"
            placeholder="Price"
            value={editProduct.price}
            onChange={(e) => setEditProduct({ ...editProduct, price: parseInt(e.target.value) })}
            className="border p-3 rounded-md w-1/3"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={editProduct.imageUrl}
            onChange={(e) => setEditProduct({ ...editProduct, imageUrl: e.target.value })}
            className="border p-3 rounded-md flex-1"
          />
          <textarea
            placeholder="Description"
            value={editProduct.description}
            onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
            className="border p-3 rounded-md flex-1"
          />
          <div className="flex space-x-4">
            <button
              onClick={handleEditProduct}
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Update Product
            </button>
            <button
              onClick={() => setEditProduct(null)}
              className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={product.imageUrl || "/default-placeholder.png"}
              alt={product.name}
              onError={(e) => (e.target.src = "/default-placeholder.png")}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">${(product.price / 100).toFixed(2)}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between">
              <button
                onClick={() => setEditProduct(product)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProductsPage;
