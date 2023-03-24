import axios from "axios";
  export const createAccountAPI = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8000/create/" + email + "/" + password); 
      console.log(response.data); // log the response data to the console
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };