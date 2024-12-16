
import Link from 'next/link';
import Products from '../../app/products/page'
import Cart from '../component/cart'
import Slider from '../component/Slider';
import ProductCards from '../component/HeadCards'
const HomePage=()=> {
  return (
    <div className="min-h-screen  ">


     
 <Slider/>
  <ProductCards/>
      <Products/>

    </div>
  );
}

export default HomePage