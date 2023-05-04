import React, { useState } from "react";
import services from "../../API_SERVICES/services";
// import Loader from "../../Components/Loader";

import { toast } from "react-hot-toast";
import EditProductModal from "../../Components/EditProductModal";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();
    const [editData, setEditData] = useState('');
    const [fetchedData, setFetchedData] = useState([]);
    const deleteProducts = (id) => {
        const apiname = "/delete-product"
        const data = {
            id:id
        }
        services.delete(apiname,data).then((response) => {
            navigate(0);
            toast.success(response.data.message);
        })
        .catch((error) => {
          console.log(error)
        });
    }
  const fetchProducts = () => {
    
    const apiname = "product-fetch";
    services
      .get(apiname)
      .then((response) => {
          
          setFetchedData(response.data.data);
      })
      .catch((error) => {
       
        toast.error(error.response.data.error);
      });
  };
    React.useEffect(() => {
        fetchProducts();
        console.log(fetchedData);
    }, [edit]);
    const handleEdit = (data) => {
        setEdit(true);
        setEditData(data);
    }
    return (
        <>
          
          {edit === true && (
                <EditProductModal data_source={editData} setEdit={setEdit} func={fetchProducts} />
             )}
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
           
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Stock
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                    </thead>
                    {fetchedData.length > 0 && (
                        <tbody>
                            {fetchedData.map((item, index) => (
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
                                    <td class="px-6 py-4">{item.productName}</td>
                                    <td class="px-6 py-4">&#8377; {item.price}</td>
                                    <td class="px-6 py-4">{item.qty}</td>
                                    <td class="px-6 py-4">{item.stock}</td>
                                    <td class="px-6 py-4">
                                        <button
                                            onClick={() => handleEdit(fetchedData[index])}
                                            class="font-medium text-blue-600 dark:text-blue-500"
                                        >
                                            Edit
                                        </button>
                                        <button
                                     onClick={() => deleteProducts(fetchedData[index].id)}
                                    class="font-medium text-red-500 dark:text-red-600 ml-5"
                                >
                                    Delete
                                </button>
                                    </td>
                                </tr>
                            ))}
                           
                        </tbody>)}
                     
                </table>
                {fetchedData.length === 0 && <h1 className="py-3 px-3 font-bold text-black text-center">No Data Found</h1>}
                </div>
               
            </>
  );
};

export default ProductList;
