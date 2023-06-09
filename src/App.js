import './App.css';
import Metadata from './Component/layout/Metadata';
import Home from './Component/Home/Home';
import Header from './Component/layout/Header';
import {Routes,Route} from 'react-router-dom'
import ProductDetails from './Component/Product/ProductDetails';
import Products from './Component/Product/Products';
import Dashboard from './Component/admin/Dashboard';
import OrderList from './Component/admin/OrderList';
// import { Dashboard } from '@material-ui/icons';
function App() {
  return  (
     <>

   <Routes>
      <Route path='/' element={ <Home/>}/>
     
  {/* <Route path='/products/:keyword' element={<Products/>}/> */}
  {/* <Route path='product/:id' element={<ProductDetails/>}/> */}
  {/* <Route path='/products' element={<Products/>}/> */}
  {/* <Route path='/admin/dashboard' element={<Dashboard/>}/> */}
  <Route path='/admin/productlist' element={<OrderList/>}/>
   </Routes>

    </>
  );
}

export default App;
