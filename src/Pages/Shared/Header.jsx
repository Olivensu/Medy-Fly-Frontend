import React, { } from 'react'
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
import logo from '../../img/Medi-Fly.png'
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Autocomplete from '@mui/material/Autocomplete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import CartItem from '../Hooks/CartItem';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const items = CartItem();
  // console.log(items.length);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const logout = () => {
    signOut(auth);
  };
  const [products, setProducts] = useState([])
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/`)
            .then(res=>{
                setProducts(res.data.payload)
            })
      }, [])
  
  if (loading) {
    return (
      <Loading></Loading>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }


  
  
  const handleProductSelection = (event, selectedProduct) => {
    if (selectedProduct) {
      // Navigate to the product detail page using the product's _id
      navigate(`/product/${selectedProduct._id}`);
      
      // Clear the input field by resetting the inputValue state
      setTimeout(() => {
        setInputValue('');
      }, 100);
    }
    // setInputValue('');
  };

  return (
    <div className="">
      

      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link to="/">
          <img className="w-24 md:w-28 lg:w-36 ml-3 " src={logo} alt="" />
        </Link>
        {/* <IconButton sx={{  }} aria-label="menu">
        <img className='w-2/3 md:w-full' src={second} alt="" />
      </IconButton> */}
        {/* <InputBase
        
        placeholder="Search your Desire items..."
        inputProps={{ 'aria-label': 'search google maps' }}
      /> */}
        <Autocomplete
      sx={{ mx: '10px', flex: 1 }}
      freeSolo
      id="free-solo-2-demo"
      className=""
      disableClearable
      options={products}
      getOptionLabel={(option) => option.name}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search your Desired items..."
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
          disabled
        />
      )}
      onChange={handleProductSelection}
    />
        <button className="btn bg-orange hover:bg-green md:px-5 ">
          <SearchIcon className="" />
        </button>
        <div className="flex justify-end items-center">
          <Link to='/cart'><div className="hidden lg:inline mr-[-10px] ml-1 mr-2">
            <div>
              {/* <Divider sx={{ height: 28, m: 1 }} orientation="vertical" /> */}
              <IconButton
                color="primary"
                sx={{ p: "" }}
                aria-label="directions"
              >
                <AddShoppingCartIcon style={{ fontSize: "2rem" }} />
              </IconButton>
            </div>
            <Link to="cart-item">
              <p className="text-xs inline absolute mt-[-50px] ml-3 bg-blue px-1 rounded-full">
                {items.length}
              </p>
            </Link>
          </div></Link>
          {/* <Divider sx={{ height: 28, m: 1 }} orientation="vertical" /> */}
          {user ? (
            <IconButton color="primary" sx={{ p: "" }} aria-label="directions">
              <ul className="menu">
                <li>
                  <details>
                    <summary>
                      <AccountCircleIcon style={{ fontSize: "2rem" }} />
                    </summary>
                    <div className="absolute shadow-orange shadow-2xl bg-gray-light text-black p-2 rounded-xl ml-[-150px] w-64 mt-2   z-50">
                      <li>
                        <p>
                          <AccountCircleIcon />
                          {user?.email}
                        </p>
                      </li>
                      
                      <li className="mt-2">
                        <Link to="/profile">Profile</Link>
                      </li>
                      <Link to='/orders'><li>
                  <p>
                    {/* <ShoppingCartIcon
                      color="black"
                      style={{ fontSize: "1.5rem" }}
                    ></ShoppingCartIcon>{" "} */}
                    Orders
                  </p>
                </li></Link>
                      <li>
                        <Link to='/cart'>
                          <div className="">
                            <div>
                              {/* <Divider sx={{ height: 28, m: 1 }} orientation="vertical" /> */}
                              Your Cart:
                              <IconButton
                                color="primary"
                                sx={{ p: "" }}
                                aria-label="directions"
                              >
                                <AddShoppingCartIcon
                                  style={{ fontSize: "2rem" }}
                                />
                              </IconButton>
                            </div>
                            <Link to="cart-item">
                              <p className="text-xs inline absolute mt-[-50px] ml-24 bg-blue px-1 rounded-full">
                                {items.length}
                              </p>
                            </Link>
                          </div>
                        </Link>
                      </li>
                      <button
                        className="btn btn-warning w-full mt-3"
                        onClick={logout}
                      >
                        Log out
                      </button>
                    </div>
                  </details>
                </li>
              </ul>
            </IconButton>
          ) : (
            <Link to="/login">
              <IconButton
                color="primary"
                sx={{ p: "" }}
                aria-label="directions"
              >
                <AccountCircleIcon />
              </IconButton>
            </Link>
          )}
        </div>
      </div>
      <div className="bg-yellow pt-2 mx-auto ">
        <div className="mx-2 md:mx-10">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <div className="flex lg:flex inline lg:hidden">
              
            <Link to="/companies">
                <ul className="menu ml-3">
                  <li>
                    <p>
                      <BrandingWatermarkIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></BrandingWatermarkIcon>{" "}
                      Companies
                    </p>
                  </li>
                </ul>
              </Link>
              <Link to="/Products">
                <ul className="menu">
                  <li>
                    <p>
                      <LibraryBooksIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></LibraryBooksIcon>{" "}
                      Products
                    </p>
                  </li>
                </ul>
              </Link>
              <ul className="menu ml-3">
                <Link to='/address-book'><li>
                  <p>
                    <LocalShippingIcon
                      color="black"
                      style={{ fontSize: "1.5rem" }}
                    ></LocalShippingIcon>{" "}
                    Delivery Address
                  </p>
                </li></Link>
              </ul>
            </div>
            <div className="flex lg:flex hidden lg:inline">
              <Link to="/">
                <ul className="menu ml-3">
                  <li>
                    <p>
                      <HomeIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></HomeIcon>{" "}
                      Home
                    </p>
                  </li>
                </ul>
              </Link>
              <Link to="/companies">
                <ul className="menu ml-3">
                  <li>
                    <p>
                      <BrandingWatermarkIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></BrandingWatermarkIcon>{" "}
                      Companies
                    </p>
                  </li>
                </ul>
              </Link>
              <Link to="/categories">
                <ul className="menu ml-3">
                  <li>
                    <p className=''>
                      <LibraryBooksIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></LibraryBooksIcon>{" "}
                      Categories
                    </p>
                  </li>
                </ul>
              </Link>
              <Link to="/Products">
                <ul className="menu ml-3">
                  <li>
                    <p>
                      <LibraryBooksIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></LibraryBooksIcon>{" "}
                      Products
                    </p>
                  </li>
                </ul>
              </Link>
              <ul className="menu ml-3">
              <Link to='/orders'><li>
                  <p>
                    <ShoppingCartIcon
                      color="black"
                      style={{ fontSize: "1.5rem" }}
                    ></ShoppingCartIcon>{" "}
                    Orders
                  </p>
                </li></Link>
              </ul>
              <ul className="menu ml-3">
                <Link to='/address-book'><li>
                  <p>
                    <LocalShippingIcon
                      color="black"
                      style={{ fontSize: "1.5rem" }}
                    ></LocalShippingIcon>{" "}
                    Delivery Address
                  </p>
                </li></Link>
              </ul>
            </div>
            {/* import LocalShippingIcon from '@mui/icons-material/LocalShipping'; */}
            {/* <ul className="menu ml-3">
              <li>
                <details>
                  <summary>Shop</summary>
                  <ul className="menu lg:menu-horizontal ml-[-50px] lg:ml-[-350px] lg:min-w-max bg-white rounded-box absolute w-56 mt-2 z-50">
                    <li>
                      <a>Solutions</a>
                      <ul>
                        <li>
                          <a>Design</a>
                        </li>
                        <li>
                          <a>Development</a>
                        </li>
                        <li>
                          <a>Hosting</a>
                        </li>
                        <li>
                          <a>Domain register</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Enterprise</a>
                      <ul>
                        <li>
                          <a>CRM software</a>
                        </li>
                        <li>
                          <a>Marketing management</a>
                        </li>
                        <li>
                          <a>Security</a>
                        </li>
                        <li>
                          <a>Consulting</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Products</a>
                      <ul>
                        <li>
                          <a>UI Kit</a>
                        </li>
                        <li>
                          <a>Wordpress themes</a>
                        </li>
                        <li>
                          <a>Wordpress plugins</a>
                        </li>
                        <li>
                          <a>Open source</a>
                          <ul>
                            <li>
                              <a>Auth management system</a>
                            </li>
                            <li>
                              <a>VScode theme</a>
                            </li>
                            <li>
                              <a>Color picker app</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Company</a>
                      <ul>
                        <li>
                          <a>About us</a>
                        </li>
                        <li>
                          <a>Contact us</a>
                        </li>
                        <li>
                          <a>Privacy policy</a>
                        </li>
                        <li>
                          <a>Press kit</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </li>
            </ul> */}
            {/* <ul className="menu ml-3 hidden lg:inline">
              <li>
                <details>
                  <summary>Pages</summary>
                  <ul className="absolute w-56 mt-2 bg-white  z-50">
                    <li>
                      <a>Privacy Policy</a>
                    </li>
                    <li>
                      <a>Terms and Conditions</a>
                    </li>
                    <li>
                      <a>FAQ</a>
                    </li>
                    <li>
                      <a>Shop List View</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header 