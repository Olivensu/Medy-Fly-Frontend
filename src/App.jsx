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
import CreateProduct from './Pages/Products/CreateProduct';


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
          <Route path="/create-product" element={<CreateProduct></CreateProduct>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  );
}

export default App
