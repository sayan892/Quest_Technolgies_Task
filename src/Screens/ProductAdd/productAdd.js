import React from "react";
import { toast } from "react-hot-toast";
import services from "../../API_SERVICES/services";
const ProductAdd = () => {
  const [productData, setProductData] = React.useState({
    product_name: "",
    price: "",
    qty: "",
    stock: "",
  });
  const handleChange = (e) => {
    const invalidChars = /[^0-9]/gi;
    if (
      e.target.name === "price" ||
      e.target.name === "qty" ||
      e.target.name === "stock"
    ) {
      e.target.value = e.target.value.replace(invalidChars, "");
    }
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const ProductAddHandler = () => {
    const apiname = "create-product";
    const data = {
      ProductName: productData.product_name,
      Price: productData.price,
      Quantity: productData.qty,
      Stock:productData.stock
    };
    services
      .post(apiname, data)
      .then((response) => {
        toast.success(response.data.message);
        setProductData({ ...productData, product_name: '', price: '', qty: '', stock: '' });
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  }
  return (
    <div class="flex flex-col justify-center items-center mt-5">
      <h1 class="text-center text-black text-xl font-bold mb-9">
        Add Products
      </h1>
      <div class="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Product Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="product_name"
            value={productData.product_name}
            onChange={handleChange}
            placeholder="Enter product name"
          />
        </div>
        <div class="mb-3">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="price"
            value={productData.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </div>
        <div class="mb-3">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Quantity
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="qty"
            type="number"
            value={productData.qty}
            onChange={handleChange}
            placeholder="Enter quantity"
          />
        </div>
        <div class="mb-3">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Stock
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            placeholder="Enter stock"
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <button onClick={ProductAddHandler} className=" bg-cyan-500  w-52 py-1 px-3  sm:my-3 sm:w/12 lg:w-52 rounded-lg items-center font-bold">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
