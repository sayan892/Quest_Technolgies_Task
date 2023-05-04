import axios from "axios";
const APIURL = `${process.env.REACT_APP_API_URL}/`;
const services = {
  post: async (apiname, data) => {
    try {
      // console.log('the api datas services', data);

      const response = await axios({
        method: "POST",
        url: APIURL + apiname,
        data: data,
      });
      const json = await response;
      // console.log('the response after convert json==>',json)
      return json;
    } catch (err) {
      console.log("Error inside api services", err);
      throw err;
    }
  },
  delete: async (apiname, data) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: APIURL + apiname,
        data: data,
      });
      const json = await response;
      return json;
    } catch (err) {
      throw err;
    }
  },
  put: async (apiname, data) => {
    try {
      const response = await axios({
        method: "PUT",
        url: APIURL + apiname,
        data: data,
      });
      const json = await response;
      return json;
    } catch (err) {
      throw err;
    }
  },
  get: async (apiname) => {
    try {
      const response = await axios({
        method: "GET",
        url: APIURL + apiname,
      });
      const json = await response;
      return json;
    } catch (err) {
      throw err;
    }
  },
};
export default services;
