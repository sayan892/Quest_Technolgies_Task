import { Const_Images } from "../../Constants";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import services from "../../API_SERVICES/services";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
  });
  const onTextChangeHandler = (e) => {
    e.preventDefault();
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const Authentication = () => {
    const apiname = "authentication/login";
    const data = {
      username: authData.username,
      password: authData.password,
    };
    services
      .post(apiname, data)
      .then((response) => {
        localStorage.setItem("logstat", JSON.stringify(response.data.data.logstatus));
        navigate('/product-add')
      })
      .catch((error) => {
        setAuthData({ ...authData, username: "", password: "" });
        toast.error(error.response.data.error);
      });
  };
  return (
    <div className="mt-32 py-6">
      <div className="flex bg-white border border-black rounded-2xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-2xl">
        <img
          className="hidden lg:block lg:w-1/2 bg-cover"
          src={Const_Images.LOGIN_IMG}
          alt="img"
        />
        <div className="w-full p-8 lg:w-1/2">
          <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
            Login to Your Account
          </h1>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              id="username"
              type="text"
              name="username"
              value={authData.username}
              onChange={onTextChangeHandler}
              placeholder="Enter Your username"
              maxLength={5}
            />
          </div>
          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              id="password"
              name="password"
              value={authData.password}
              onChange={onTextChangeHandler}
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              maxLength={8}
            />
            <i
              className={
                show
                  ? "far fa-eye absolute right-4 top-10 hover:cursor-pointer "
                  : "far fa-eye-slash absolute right-4 top-10 hover:cursor-pointer "
              }
              onClick={() => setShow(!show)}
            ></i>
          </div>
          <button
            onClick={Authentication}
            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg active:bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:shadow-outline-blue"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
