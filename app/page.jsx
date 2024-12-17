"use client"
import HomePage from '../app/pages/index'
import '../app/styles/style.css'
import AdminLayout from './admin/layout';

export default function Home() {
  return (
    <div >
      <HomePage/>
      
      {/* <AdminLayout/> */}
      <div
        className="fixed bottom-6 right-6 bg-blue-900 text-white w-12 h-12
        flex items-center justify-center rounded-full shadow-lg cursor-pointer
        hover:bg-blue-500 transition duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
     <p className='text-3xl'>   ↑</p>
      </div>
    </div>
  );
}
