// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../../../lib/firebase";
// import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const querySnapshot = await getDocs(collection(db, "orders"));
//       const ordersList = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setOrders(ordersList);
//     };

//     fetchOrders();
//   }, []);

//   // Function to update order status
//   const handleUpdateOrderStatus = async (orderId, newStatus) => {
//     try {
//       const orderRef = doc(db, "orders", orderId);
//       await updateDoc(orderRef, { status: newStatus });
//       setOrders(
//         orders.map((order) =>
//           order.id === orderId ? { ...order, status: newStatus } : order
//         )
//       );
//       alert("Order status updated!");
//     } catch (error) {
//       console.error("Error updating order status:", error);
//       alert("Failed to update order status.");
//     }
//   };

//   if (!orders.length) return <p>Loading orders...</p>;

//   return (
//     <div className="bg-gray-100 py-3 px-2">
//       <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">Manage Orders</h1>

//       <div className="space-y-6">
//         {orders.map((order) => (
//           <div key={order.id} className="bg-white p-6 rounded-lg shadow-lg mb-6">
//             <h3 className="text-2xl font-semibold text-gray-800">Order #{order.id}</h3>
//             <p className="text-gray-600 mb-2">Customer: {order.customerName}</p>
//             <p className="text-gray-600 mb-2">Total: ${(order.totalPrice / 100).toFixed(2)}</p>
//             <p className="text-gray-600 mb-4">Date: {new Date(order.createdAt.seconds * 1000).toLocaleDateString()}</p>
            
//             {/* Ordered Items */}
//             <h4 className="text-xl font-semibold text-gray-700 mb-2">Items:</h4>
//             <ul className="list-disc ml-6 mb-4">
//               {order.items.map((item, index) => (
//                 <li key={index} className="text-gray-600">
//                   {item.name} - {item.quantity} x ${(item.price / 100).toFixed(2)}
//                 </li>
//               ))}
//             </ul>

//             {/* Order Status and Update */}
//             <div className="flex space-x-4">
//               <p className="font-semibold text-gray-700">Status: {order.status}</p>
//               <button
//                 onClick={() => handleUpdateOrderStatus(order.id, "Shipped")}
//                 className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
//               >
//                 Mark as Shipped
//               </button>
//               <button
//                 onClick={() => handleUpdateOrderStatus(order.id, "Delivered")}
//                 className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
//               >
//                 Mark as Delivered
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminOrdersPage;

// pages/admin/orders.js




// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../../../lib/firebase";
// import { collection, getDocs } from "firebase/firestore";

// const ManageOrdersPage = () => {
//   const [orders, setOrders] = useState([]);

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
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

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
//                 <td colSpan="5" className="text-center text-zinc-900 py-4">No orders yet</td>
//               </tr>
//             ) : (
//               orders.map((order) => (
//                 <tr key={order.id} className="border-t text-slate-950 "> 
//                   <td className="py-3 px-6">{order.id}</td>
//                   <td className="py-3 px-6">{order.customerName}</td>
//                   <td className="py-3 px-6">${(order.totalPrice / 100).toFixed(2)}</td>
//                   <td className="py-3 px-6">{order.status}</td>
//                   <td className="py-3 px-6">
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//                       View
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




// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../../../lib/firebase";
// import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"; // Add deleteDoc here

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
//   const handleStatusChange = async (orderId, newStatus) => {
//     try {
//       const orderRef = doc(db, "orders", orderId);
//       await updateDoc(orderRef, { status: newStatus });

//       // Update the order list in state
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
//                 <tr key={order.id} className="border-t text-zinc-900">
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

// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../../../lib/firebase"; // adjust path if needed
// import { collection, getDocs } from "firebase/firestore";
// import Link from "next/link";
// import OrderList from "../../../components/OrderList";
// const OrdersPage = () => {
//   const [orders, setOrders] = useState([]);

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
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // Check for loading or empty state
//   if (!orders) return <p>Loading orders...</p>;
//   if (orders.length === 0) return <p>No orders found.</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">
//         Manage Orders
//       </h1>

//       {/* Orders list */}
//       <div className="space-y-6">
//         {orders.map((order) => (
//           <div key={order.id} className="p-4 bg-white shadow-md rounded-lg">
//             <h3 className="text-xl font-semibold">{order.customerName}</h3>
//             <p>Status: {order.status}</p>
//             <p>Total: ${(order.totalAmount / 100).toFixed(2)}</p>
//             <Link href={`/admin/orders/${order.id}`}>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
//                 View Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrdersPage;

// "use client";

// import { useEffect, useState } from "react";
// import { db } from "../../../lib/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import OrderList from "../../component/OrderList";

// const OrdersPage = () => {
//   const [orders, setOrders] = useState([]);

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
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Orders</h1>
//       <OrderList orders={orders} />
//     </div>
//   );
// };

// export default OrdersPage;




"use client";
import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import Link from "next/link"; // Correct Link import

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      const ordersSnapshot = await getDocs(collection(db, "orders"));
      const ordersList = ordersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersList);
    };

    fetchOrders();
  }, []);

  // Update order status
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      // Reference to the specific order in Firestore
      const orderRef = doc(db, "orders", orderId);
      // Update the status field in Firestore
      await updateDoc(orderRef, { status: newStatus });
      // Update the local state
      setOrders(
        orders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Orders Management</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
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
                <tr key={order.id} className="border-t text-gray-100">
                  <td className="py-3 px-6">{order.id}</td>
                  <td className="py-3 px-6">{order.customerName}</td>
                  <td className="py-3 px-6">
                    ${(order.totalPrice / 100).toFixed(2)}
                  </td>
                  <td className="py-3 px-6">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className="border p-2 rounded-md bg-gray-500"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="py-3 px-6 space-x-4">
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                      View
                    </Link>
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

export default OrdersPage;
