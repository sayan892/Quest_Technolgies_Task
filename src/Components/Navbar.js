import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();
  const logStat = JSON.parse(localStorage.getItem("logstat"));
  const handler = () => {
    if (logStat === "success") {
      localStorage.clear();
      navigate("/");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <nav className="flex justify-between px-10 py-5 items-center bg-cyan-500  h-20 z-20 w-screen">
        <h1 className="text-xl text-gray-800 font-bold">Quest Dashboard</h1>
        <div className="flex items-center">
          <ul className="md:flex items-center space-x-6 hidden">
            <li className="font-semibold text-white">Home</li>
            {logStat === "success" && (<><li className="font-semibold text-white cursor-pointer" onClick={() => navigate('/product-add')}>Add Product</li> <li  className="font-semibold text-white cursor-pointer" onClick={() => navigate('/products')}>Products</li></>)}
            <li className="font-semibold text-white">
              <button
                className="border-2 border-slate-950 w-full py-1 px-3 rounded-lg cursor-pointer"
                onClick={handler}
              >
                {logStat === "success" ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? (
              <i className="fa fa-bars" />
            ) : (
              <i className="fa fa-times" />
            )}
          </div>
        </div>
      </nav>
      <ul
        className={
          !nav ? "hidden" : "absolute top-20 bg-zinc-200 w-full px-8 py-7"
        }
      >
        <li className="font-semibold text-white w-full">Home</li>
        <li className="font-semibold text-white ">
          <button
            className="border-2 border-slate-950 w-full py-1 px-3  sm:my-3 sm:w-1/2 rounded-lg"
            onClick={handler}
          >
            {logStat === "success" ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
