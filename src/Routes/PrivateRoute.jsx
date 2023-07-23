import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Login from '../Pages/Login';

// allows us to render the children if authenticated
function PrivateRoute({children}) {
    const {currentUser} = useContext(AuthContext);

  return !currentUser ? <Navigate to={"/login"}/> : children
  
}

export default PrivateRoute