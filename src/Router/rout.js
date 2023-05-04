import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../Screens/User_Management/login";
import ProductAdd from "../Screens/ProductAdd/productAdd";
import { SecuredRoute } from "../ProtectedRoutes/securedRoutes";
import { PrivateRoute } from "../ProtectedRoutes/privateRoutes";
import ProductList from "../Screens/ProductList/productlist";
const Rout = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        }
      />
      <Route
        path="/product-add"
        element={
          <SecuredRoute>
            <ProductAdd />
          </SecuredRoute>
        }
      />
         <Route
        path="/products"
        element={
          <SecuredRoute>
            <ProductList />
          </SecuredRoute>
        }
      />
    </Routes>
  );
};
export default Rout;
