
import Link from 'next/link';
import Products from '../../app/products/page'
import Cart from '../component/cart'
const HomePage=()=> {
  return (
    <div className="min-h-screen bg-slate-700 ">


      <main className="max-w-6xl mx-auto p-4">
  
  {/* <Checkout/> */}
     {/* <SignIn/> */}
      {/* <SignUp/> */}
      </main>
      <Products/>

    </div>
  );
}

export default HomePage