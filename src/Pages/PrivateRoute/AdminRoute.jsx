import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading';
import { checkPropTypes } from 'prop-types';

const AdminRoute = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
      //   fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${user?.email}`)
      //   .then(res=>res.json())
      //   .then(data=> {
      //     setUserinfo(data.isAdmin)
      //     console.log(data.isAdmin)
      //   })

        //const timer = setTimeout(() => {
      // Make an API call to your backend to check if the user is an admin
      // Replace 'apiEndpointForAdminCheck' with your actual API endpoint
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${user?.email}`)
        .then((response) => response.json())
        .then((data) => {
          setIsAdmin(data.payload.user.isAdmin); // Set isAdmin based on the response from the server
          setIsLoading(false); // Update isLoading to false after the check is complete
          console.log(isAdmin)
        })
        .catch((error) => {
          console.error('Error checking admin status:', error);
          setIsLoading(false);
        });
    //}, 8000);

    //return () => clearTimeout(timer);
      }, [])

    
      if(loading || isLoading){
        return <Loading></Loading>
      }
    if(isAdmin!== "true"){
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }
    return children;
};

AdminRoute.propTypes = {
    children: checkPropTypes,
  };

export default AdminRoute;