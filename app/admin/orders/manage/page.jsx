// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../../../../lib/firebase";
// import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"; // Add deleteDoc here

// const ManageOrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [status, setStatus] = useState("");
//   // Fetch orders from Firestore
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const ordersSnapshot = await getDocs(collection(db, "orders"));
//         const ordersList = ordersSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setOrders(ordersList);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // // Function to update order status
//   // const handleStatusChange = async (orderId, newStatus) => {
//   //   try {
//   //     const orderRef = doc(db, "orders", orderId);
//   //     await updateDoc(orderRef, { status: newStatus });

//   //     // Update the order list in state
//   //     setOrders(orders.map((order) => 
//   //       order.id === orderId ? { ...order, status: newStatus } : order
//   //     ));

//   //     alert(`Order status updated to ${newStatus}`);
//   //   } catch (error) {
//   //     console.error("Error updating order status:", error);
//   //     alert("Failed to update order status.");
//   //   }
//   // };

//   // Function to delete an order
//   const handleDeleteOrder = async (orderId) => {
//     try {
//       const orderRef = doc(db, "orders", orderId);
//       await deleteDoc(orderRef); // Use deleteDoc here
//       setOrders(orders.filter((order) => order.id !== orderId));
//       alert("Order deleted!");
//     } catch (error) {
//       console.error("Error deleting order:", error);
//       alert("Failed to delete order.");
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   const handleStatusChange = () => {
//     onUpdateStatus(orderId, status);
//   };
//   const onUpdateStatus = async (orderId, status) => {
//     try {
//       const orderRef = doc(db, 'orders', orderId);  // Reference to the order document in Firestore
//       await updateDoc(orderRef, {
//         status: status,  // Update the status field in Firestore
//       });
//       console.log('Order status updated to:', status);
//     } catch (error) {
//       console.error('Error updating order status:', error);
//     }
//   };
  
//   return (
//     <div className="min-h-screen bg-gray-200 p-6">
//       <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Manage Orders</h1>
      
//       {/* Orders Table */}
//       <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
//         <table className="min-w-full table-auto">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="py-3 px-6 text-left">Order ID</th>
//               <th className="py-3 px-6 text-left">Customer Name</th>
//               <th className="py-3 px-6 text-left">Total Price</th>
//               <th className="py-3 px-6 text-left">Status</th>
//               <th className="py-3 px-6 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">No orders yet</td>
//               </tr>
//             ) : (
//               orders.map((order) => (
//                 <tr key={order.id} className="border-t text-gray-950">
//                   <td className="py-3 px-6">{order.id}</td>
//                   <td className="py-3 px-6">{order.customerName}</td>
//                   <td className="py-3 px-6">${(order.totalPrice / 100).toFixed(2)}</td>
//                   <td className="py-3 px-6">
//                     <select
//                       value={order.status}
//                       onChange={(e) => handleStatusChange(order.id, e.target.value)}
//                       className="border p-2 rounded-md bg-gray-100"
//                     >
//                       <option value="Pending">Pending</option>
//                       <option value="Shipped">Shipped</option>
//                       <option value="Delivered">Delivered</option>
//                     </select>
//                   </td>
//                   <td className="py-3 px-6">
//                     <button
//                       onClick={() => handleDeleteOrder(order.id)}
//                       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
//                     >
//                       Delete
//                     </button>
                

                 
                   
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageOrdersPage;

//=====correct

// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../../../../lib/firebase";
// import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

// const ManageOrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch orders from Firestore
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const ordersSnapshot = await getDocs(collection(db, "orders"));
//         const ordersList = ordersSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setOrders(ordersList);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // Function to update order status
//   const onUpdateStatus = async (orderId, newStatus) => {
//     try {
//       const orderRef = doc(db, "orders", orderId);
//       await updateDoc(orderRef, { status: newStatus });

//       // Update the order list in state to reflect the new status
//       setOrders(orders.map((order) => 
//         order.id === orderId ? { ...order, status: newStatus } : order
//       ));
//       alert(`Order status updated to ${newStatus}`);
//     } catch (error) {
//       console.error("Error updating order status:", error);
//       alert("Failed to update order status.");
//     }
//   };

//   // Function to delete an order
//   const handleDeleteOrder = async (orderId) => {
//     try {
//       const orderRef = doc(db, "orders", orderId);
//       await deleteDoc(orderRef);
//       setOrders(orders.filter((order) => order.id !== orderId));
//       alert("Order deleted!");
//     } catch (error) {
//       console.error("Error deleting order:", error);
//       alert("Failed to delete order.");
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-200 p-6">
//       <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Manage Orders</h1>
      
//       {/* Orders Table */}
//       <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
//         <table className="min-w-full table-auto">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="py-3 px-6 text-left">Order ID</th>
//               <th className="py-3 px-6 text-left">Customer Name</th>
//               <th className="py-3 px-6 text-left">Total Price</th>
//               <th className="py-3 px-6 text-left">Status</th>
//               <th className="py-3 px-6 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-4">No orders yet</td>
//               </tr>
//             ) : (
//               orders.map((order) => (
//                 <tr key={order.id} className="border-t text-gray-950">
//                   <td className="py-3 px-6">{order.id}</td>
//                   <td className="py-3 px-6">{order.customerName}</td>
//                   <td className="py-3 px-6">${order.totalPrice}</td>
//                   <td className="py-3 px-6">
//                     <select
//                       value={order.status}
//                       onChange={(e) => onUpdateStatus(order.id, e.target.value)}
//                       className="border p-2 rounded-md bg-gray-100"
//                     >
//                       <option value="Pending">Pending</option>
//                       <option value="Shipped">Shipped</option>
//                       <option value="Delivered">Delivered</option>
//                     </select>
//                   </td>
//                   <td className="py-3 px-6">
//                     <button
//                       onClick={() => handleDeleteOrder(order.id)}
//                       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageOrdersPage;

//==corresct
"use client";
import { useEffect, useState } from "react";
import { db } from "../../../../lib/firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from "firebase/firestore";

const ManageOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form fields for adding new order
  const [newOrder, setNewOrder] = useState({
    customerName: "",
    totalPrice: "",
    status: "Pending",
    items: [],
  });

  // Fetch orders from Firestore
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersSnapshot = await getDocs(collection(db, "orders"));
        const ordersList = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Function to update order status
  const onUpdateStatus = async (orderId, newStatus) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { status: newStatus });

      // Update the order list in state to reflect the new status
      setOrders(orders.map((order) => 
        order.id === orderId ? { ...order, status: newStatus } : order
      ));
      alert(`Order status updated to ${newStatus}`);
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update order status.");
    }
  };

  // Function to update order details
  const onUpdateOrderDetails = async (orderId, updatedData) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, updatedData);

      // Update the order list in state
      setOrders(orders.map((order) => 
        order.id === orderId ? { ...order, ...updatedData } : order
      ));
      alert("Order details updated!");
    } catch (error) {
      console.error("Error updating order details:", error);
      alert("Failed to update order details.");
    }
  };

  // Function to delete an order
  const handleDeleteOrder = async (orderId) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await deleteDoc(orderRef);
      setOrders(orders.filter((order) => order.id !== orderId));
      alert("Order deleted!");
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Failed to delete order.");
    }
  };

  // Function to add a new order
  const handleAddOrder = async (e) => {
    e.preventDefault();
    try {
      // Add new order to Firestore
      const newOrderRef = await addDoc(collection(db, "orders"), {
        customerName: newOrder.customerName,
        totalPrice: parseFloat(newOrder.totalPrice) * 100, // Convert to cents
        status: newOrder.status,
        items: newOrder.items,
      });

      // Update state with the new order
      setOrders([...orders, { id: newOrderRef.id, ...newOrder }]);
      setNewOrder({
        customerName: "",
        totalPrice: "",
        status: "Pending",
        items: [],
      });
      alert("New order added!");
    } catch (error) {
      console.error("Error adding new order:", error);
      alert("Failed to add new order.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Manage Orders</h1>

      {/* Form for adding a new order */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Order</h2>
        <form onSubmit={handleAddOrder}>
          <div className="mb-4">
            <label className="block text-gray-700">Customer Name</label>
            <input
              type="text"
              value={newOrder.customerName}
              onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Total Price</label>
            <input
              type="number"
              value={newOrder.totalPrice}
              onChange={(e) => setNewOrder({ ...newOrder, totalPrice: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Order Status</label>
            <select
              value={newOrder.status}
              onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
              className="w-full p-2 border rounded-md"
            >
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Items (comma-separated)</label>
            <input
              type="text"
              value={newOrder.items}
              onChange={(e) => setNewOrder({ ...newOrder, items: e.target.value.split(",") })}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Add Order
          </button>
        </form>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Total Price</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">No orders yet</td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id} className="border-t text-gray-950">
                  <td className="py-3 px-6">{order.id}</td>
                  <td className="py-3 px-6">{order.customerName}</td>
                  <td className="py-3 px-6">${(order.totalPrice / 100).toFixed(2)}</td>
                  <td className="py-3 px-6">
                    <select
                      value={order.status}
                      onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                      className="border p-2 rounded-md bg-gray-100"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrdersPage;











































// "use client";
// import { useState, useEffect } from 'react';
// import { db } from '../../../../lib/firebase';
// import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import { use } from 'react';  // Import use() from React to unwrap params

// const ManageOrderPage = ({ params }) => {
//   const { id } = use(params);  // Unwrap the params Promise

//   if (!id) {
//     return <p>Order ID is not provided</p>;
//   }

//   const [order, setOrder] = useState(null);
//   const [status, setStatus] = useState('');  // Ensure status is initialized
//   const [customerName, setCustomerName] = useState('');  // Ensure customerName is initialized
//   const [address, setAddress] = useState('');  // Ensure address is initialized
//   const [items, setItems] = useState([]);  // Ensure items is initialized as an empty array
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         const orderRef = doc(db, 'orders', id); // Ensure db and id are correct
//         const docSnap = await getDoc(orderRef);

//         if (docSnap.exists()) {
//           const orderData = docSnap.data();
//           setOrder(orderData);
//           setStatus(orderData.status || '');  // Default to empty string if undefined
//           setCustomerName(orderData.customerName || '');  // Default to empty string if undefined
//           setAddress(orderData.address || '');  // Default to empty string if undefined
//           setItems(orderData.items || []);  // Ensure items is always an array
//         } else {
//           console.log('No such order!');
//         }
//       } catch (error) {
//         console.error('Error fetching order:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrder();
//   }, [id]);

//   const handleUpdateOrder = async () => {
//     try {
//       const orderRef = doc(db, 'orders', id);
//       const updatedOrder = {
//         status,
//         customerName,
//         address,
//         items,
//       };

//       await updateDoc(orderRef, updatedOrder);
//       alert('Order updated successfully!');
//     } catch (error) {
//       console.error('Error updating order:', error);
//       alert('Failed to update order.');
//     }
//   };

//   if (loading) return <p>Loading order...</p>;

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-semibold mb-6">Manage Order #{id}</h2>
//       <div className="border p-6 rounded-lg shadow-md">
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className="w-full px-3 py-2 border rounded-lg"
//           >
//             <option value="pending">Pending</option>
//             <option value="shipped">Shipped</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
//           <input
//             type="text"
//             value={customerName}
//             onChange={(e) => setCustomerName(e.target.value)}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Items</label>
//           {items && items.length > 0 ? (
//             items.map((item, index) => (
//               <div key={index} className="flex items-center justify-between mb-2">
//                 <div>{item.name}</div>
//                 <div>
//                   Quantity: {item.quantity}
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     onChange={(e) => {
//                       const updatedItems = [...items];
//                       updatedItems[index].quantity = parseInt(e.target.value, 10);
//                       setItems(updatedItems);
//                     }}
//                     className="ml-2 w-12 px-2 py-1 border rounded"
//                   />
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items available</p>
//           )}
//         </div>

//         <div className="flex justify-end">
//           <button
//             onClick={handleUpdateOrder}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//           >
//             Update Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageOrderPage;
