import React from 'react'
import {Navigate} from "react-router-dom";
export const PrivateRoute = ({children}) => {
  return (

      JSON.parse(localStorage.getItem('logstat')) === "success" ? (
        <Navigate
        to="/product-add" 
        replace={true}
      />
    
      ) : (
        children
    ))
}
