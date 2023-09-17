// import React from 'react';

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../Shared/Loading";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const [user, loading,] = useAuthState(auth);
    const [userinfo, setUserinfo] = useState([]);
    const [userShop, setUserShop] = useState([]);
    const navigate  = useNavigate()
    
    const logout = () => {
        signOut(auth);
      };
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=> setUserinfo(data.payload.user))

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/shop/user/${user?.email}`)
            .then(res=>{
                setUserShop(res.data.payload)
            })
      }, [user])
      if(loading){
        return <Loading></Loading>
      }
// console.log(userinfo);
      const {name, email,phone,address, image,} = userinfo;
      
    return (
        <div>
            <div className="text-black font-bold text-start mx-10">
                
                <Link to='/login'><p onClick={logout} className="bg-gray-light inline-block p-3 rounded-xl m-3"><IconButton color="primary" sx={{ p: "" }} aria-label="directions">
              <LogoutIcon />
            </IconButton> Log Out</p></Link>
            </div>
            <p className="text-4xl font-bold text-orange my-5">Profile </p>
            <div className="w-96 p-2 rounded-2xl border-x-red border-y-orange m-auto border-2 shadow-lg shadow-blue my-10">
            <img className="w-36 my-3 m-auto rounded-full" src={`${import.meta.env.VITE_BACKEND_URL}/image/users/${image}`} alt="Image Not Found" />
            <p className="text-start text-xl my-3">Name: {name}</p>
            <p className="text-start text-xl my-3">Email: {email}</p>
            <p className="text-start text-xl my-3">Phone: {phone}</p>
            <p className="text-start text-xl my-3">Address: {address}</p>
            </div>
            
        </div>
    );
};

export default Profile;