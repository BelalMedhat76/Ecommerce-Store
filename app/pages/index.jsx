
import Link from 'next/link';
import Products from '../../app/products/page'
import Cart from '../component/cart'
import Slider from '../component/Slider';
import ProductCards from '../component/HeadCards'
import PromotionSection from '../component/PromotionSection'
const HomePage=()=> {
  return (
    <div className="min-h-screen  ">


     
 <Slider/>
 <ProductCards/>
 <Products/>

  <PromotionSection/>
 

    </div>
  );
}

export default HomePage