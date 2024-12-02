import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
   if(loading){
    return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars loading-lg"></span></div>
   }
   if(user && user.email){
    return children
   }
   // Redirect unauthenticated users to the login page
   return <Navigate to='/signUp' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;