import React from 'react'
import {Navigate} from "react-router-dom";
export const SecuredRoute = ({children}) => {
  return (

      JSON.parse(localStorage.getItem('logstat')) === "success" ? (
       children
      ) : (
        <Navigate
          to="/" 
          replace={true}
        />
    ))
}
