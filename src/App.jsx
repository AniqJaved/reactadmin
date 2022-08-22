import './App.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/home/Home';
import UserList from './components/pages/userList/UserList';
import NewUser from './components/pages/newUser/NewUser';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { User } from './components/pages/user/User';
import ProductList from './components/pages/productList/ProductList';
import Product from './components/pages/product/Product'
import NewProduct from './components/pages/newProduct/NewProduct';
function App() {
  return (
    <>
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route exact path='/users' element={<UserList/>}/>
          <Route exact path='/user/:userId' element={<User/>}/>
          <Route exact path='/newUser' element={<NewUser/>}/>
          <Route exact path='/products' element={<ProductList/>}/>
          <Route exact path='/product/:productId' element={<Product/>}/>
          <Route exact path='/newProduct' element={<NewProduct/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
