import {Container} from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';
import AdminUserslist from './screens/AdminUserslist'
import AdminProductslist from './screens/AdminProductslist'
import AdminAddProduct from './screens/AdminAddProduct'
import AdminOrderslist from './screens/AdminOrderslist'
import Editproduct from './screens/Editproduct';





function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <main className='py-3'>
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/cart/:id' element={<CartScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/orders' element={<OrderScreen />}/>
          <Route path='/admin' element={<AdminScreen />}/>
          <Route path='/admin/userslist' element={<AdminUserslist />}/>
                 <Route path='/admin/productslist' element={<AdminProductslist />}/>
                 <Route path='/admin/addproduct' element={<AdminAddProduct />}/>
                 <Route path='/admin/orderslist' element={<AdminOrderslist />}/>
                 <Route path='/admin/editproduct/:productid' element={<Editproduct />}/>

        </Routes>
     
       </Container>
       </main>
       <Footer />
    </BrowserRouter>
  
    </div>
  );
}

export default App;
