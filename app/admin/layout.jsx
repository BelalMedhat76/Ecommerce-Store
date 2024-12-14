// const AdminLayout=({ children })=> {
  
//         return (
//           <div className="admin-layout flex h-screen  bg-gray-100 " >
//             {/* Sidebar */}
//             <aside className="admin-sidebar w-64 bg-gray-800 text-white flex flex-col">
//               <div className="sidebar-header p-4 text-center font-bold text-lg border-b border-gray-700">
//                 Admin Panel
//               </div>
//               <ul className="sidebar-menu mt-4 space-y-2">
//                 <li>
//                   <a
//                     href="/admin/products"
//                     className="block py-2 px-4 hover:bg-gray-700 rounded transition"
//                   >
//                     Manage Products
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/admin/orders"
//                     className="block py-2 px-4 hover:bg-gray-700 rounded transition"
//                   >
//                     View Orders
//                   </a>
//                 </li>
//               </ul>
//             </aside>
      
//             {/* Main Content */}
//             <main className="admin-main flex-grow p-6 bg-white overflow-scroll shadow-md">{children}</main>
//           </div>
//         );
//       }
      
//   export default AdminLayout


"use client";

import { useState } from "react";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } admin-sidebar bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out lg:w-64`}
      >
        <div className="sidebar-header p-4 text-center font-bold text-lg border-b border-gray-700">
          Admin Panel
        </div>
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-white absolute top-5 right-2 bg-gray-700 rounded-md"
        >
          {sidebarOpen ? "Close" : "Open"}
        </button>
        <ul className="sidebar-menu mt-8 space-y-2">
          <li>
            <a
              href="/admin/products"
              className="block py-2 px-4 hover:bg-gray-700 rounded transition"
            >
              Manage Products
            </a>
          </li>
          <li>
            <a
              href="/admin/orders"
              className="block py-2 px-4 hover:bg-gray-700 rounded transition"
            >
              View Orders
            </a>
            <a
              href="/admin/orders/manage"
              className="block py-2 px-4 hover:bg-gray-700 rounded transition"
            >
              Manage Orders
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-main flex-grow p-6 bg-white overflow-scroll shadow-md">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
