import './app.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Register from './Pages/Forms/Register';
import Login from './Pages/Forms/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Profile from './Pages/Profile/Profile';
import CheckOut from './Pages/Products/CheckOut';
import CartProduct from './Pages/Products/CartProduct';
import Orders from './Pages/Orders/Orders';
import CreateProduct from './Pages/Products/CreateProduct';
import ProductDetails from './Pages/Products/ProductDetails';
import TotalProducts from './Pages/Products/TotalProducts';
import CreateCompany from './Pages/Company/CreateCompany';
import Companies from './Pages/Company/Companies';
import Categories from './Pages/Categories/Categories';
import CreateCategories from './Pages/Categories/CreateCategories';
import CompanyDetails from './Pages/Company/CompanyDetails';
import AddressBook from './Pages/Profile/AddressBook';
import CreateAddress from './Pages/Profile/CreateAddress';
import CategoriesProduct from './Pages/Categories/CategoriesProduct';
import AllOrder from './Pages/Dashboard/AllOrder';
import AdminRoute from './Pages/PrivateRoute/AdminRoute';


function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }


  return (
    <>
    <ScrollToTop />
      <div className="m-auto text-center ">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<PrivateRoute><Profile></Profile></PrivateRoute>}></Route>
          <Route path='/products' element={<TotalProducts></TotalProducts>}></Route>
          <Route path="/create-product/:shopSlug" element={<CreateProduct></CreateProduct>}></Route>
          <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/cart' element={<PrivateRoute><CartProduct></CartProduct></PrivateRoute>}></Route>
          <Route path='/checkout/:propArray' element={<PrivateRoute><CheckOut></CheckOut></PrivateRoute>}></Route>
          <Route path='/orders' element={<PrivateRoute><Orders></Orders></PrivateRoute>}></Route>
          <Route path="/create-company" element={<CreateCompany></CreateCompany>}></Route>
          <Route path="/companies" element={<Companies></Companies>}></Route>
          <Route path="/categories" element={<Categories></Categories>}></Route>
          <Route path="/create-categories" element={<PrivateRoute><CreateCategories></CreateCategories></PrivateRoute>}></Route>
          <Route path='/shop/:slug' element={<CompanyDetails></CompanyDetails>}></Route>
          <Route path='/address-book' element={<><PrivateRoute><AddressBook></AddressBook></PrivateRoute></>}></Route>
          <Route path='/create-address' element={<><PrivateRoute><CreateAddress></CreateAddress></PrivateRoute></>}></Route>
          <Route path='/categories/:category' element={<><CategoriesProduct></CategoriesProduct></>}></Route>
          <Route path='/all-order' element={<AdminRoute><AllOrder></AllOrder></AdminRoute>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  );
}

export default App
