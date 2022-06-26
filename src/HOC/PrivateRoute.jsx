import React from 'react'
import { Children } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {isAuth} =useSelector((state)=> state.auth)

const location =useLocation();
// console.log(location)

const from = {
    pathname: location.pathname,
};
  
    if(isAuth) return children;
    return <Navigate to={'/login'} state={from} replace />
}

export default PrivateRoute