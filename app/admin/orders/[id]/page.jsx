

"use client";

import { useEffect, useState ,use} from "react";
import { db } from "../../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const OrderDetailsPage = ({ params }) => {
  const { id } = use(params); 
  const [order, setOrder] = useState(null);

  // Fetch order details from Firestore
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderRef = doc(db, "orders", id);
        const orderSnap = await getDoc(orderRef);

        if (orderSnap.exists()) {
          setOrder({ id: orderSnap.id, ...orderSnap.data() });
        } else {
          console.error("Order not found");
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrder();
  }, [id]);

  if (!order) {
    return <p>Loading order details...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-2xl text-gray-900 font-bold mb-4">Order Details</h1>
        <p className="text-gray-700 mb-2">Order ID: {order.id}</p>
        <p className="text-gray-700 mb-2">Customer: {order.customerName || "Unknown"}</p>
        <p className="text-gray-700 mb-4">
          Total Amount: ${order.totalPrice}
        </p>
        <p className="text-gray-700 mb-4">
          Total Amount: {order.status}
        </p>

       
      </div>
    </div>
  );
};

export default OrderDetailsPage;



