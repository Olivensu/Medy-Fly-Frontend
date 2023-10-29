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
      if(user){
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${user?.email}`)
        .then((response) => response.json())
        .then((data) => {
          setIsAdmin(data.payload.user.isAdmin);
          setIsLoading(false); 
          console.log(isAdmin)
        })
        .catch((error) => {
          console.error('Error checking admin status:', error);
          setIsLoading(false);
        });
      }
      }, [user])

    
      if(loading || isLoading){
        return <Loading></Loading>
      }
    if(!isAdmin){
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }
    return children;
};

AdminRoute.propTypes = {
    children: checkPropTypes,
  };

export default AdminRoute;