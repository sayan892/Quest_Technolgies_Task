import React from 'react'
import services from "../API_SERVICES/services";
import { toast } from "react-hot-toast";
const EditProductModal = (props) => {
  
    const [editedData, setEditedData] = React.useState({
      productName: props.data_source.productName,
      price: props.data_source.price,
      qty: props.data_source.qty,
      stock:props.data_source.stock
    })
    const handleChange = (e) => {
      setEditedData({ ...editedData, [e.target.name]: e.target.value });
  }
  const editHandler = () => {
    const apiname = "/product-update"
    const data = {
      id: props.data_source.id,
      product_name: editedData.productName,
      price: editedData.price,
      qty: editedData.qty,
      stock: editedData.stock
    }
    services
      .put(apiname, data)
      .then((response) => {
        toast.success(response.data.message);
        props.setEdit(false);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  }
  return (
    <div className='top-0 left-0 right-0 bottom-0 w-full h-screen z-10  bg-gray-700 bg-opacity-75 flex flex-col items-center justify-center absolute'>
           <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 bg-opacity-100">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Product Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="productName"
            value={editedData.productName}
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
            value={editedData.price}
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
            value={editedData.qty}
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
            value={editedData.stock}
            onChange={handleChange}
            placeholder="Enter stock"
          />
        </div>
        <div className="w-full flex justify-evenly items-center">
          <button onClick={editHandler} className=" bg-cyan-500  w-52 py-1 px-3  sm:my-3 sm:w/12 lg:w-52 rounded-lg items-center font-bold">
            Save
          </button>
          <button onClick={() => props.setEdit(false)} className=" bg-cyan-500  w-52 py-1 px-3  sm:my-3 sm:w/12 lg:w-52 rounded-lg items-center font-bold">
            Cancel
          </button>
        </div>
      </div>
          </div>
          
  )
}

export default EditProductModal