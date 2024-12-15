import React from "react";
import Link from "next/link";

const OrderList = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <p className="text-gray-600">No orders available.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold mb-2">Order ID: {order.id}</h2>
          <p className="text-gray-600 mb-2">
            Customer: {order.customerName || "Unknown"}
          </p>
          <p className="text-gray-600 mb-4">
            Total: ${(order.totalAmount / 100).toFixed(2)}
          </p>
          <Link
            href={`/admin/orders/${order.id}`}
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
