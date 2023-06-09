import './App.css';
import Metadata from './component/layout/Metadata';
import Home from './component/Home/Home';

import {Routes,Route} from 'react-router-dom'
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import NewProduct from './component/admin/NewProduct';
// import { Dashboard } from '@material-ui/icons';
function App() {
  return  (
     <>

   <Routes>
      <Route path='/' element={ <Home/>}/>
     
  <Route path='/products/:keyword' element={<Products/>}/>
  <Route path='product/:id' element={<ProductDetails/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/newproduct' element={<NewProduct/>}/>
   </Routes>

    </>
  );
}
export default App;
