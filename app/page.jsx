
import HomePage from '../app/pages/index'
import '../app/styles/style.css'
import AdminLayout from './admin/layout';

export default function Home() {
  return (
    <div >
      <HomePage/>
      
      <AdminLayout/>
    </div>
  );
}
