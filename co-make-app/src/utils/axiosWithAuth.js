import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://co-make1.herokuapp.com/api/",
    headers: {
      headers: {
        'Authorization': token

    }

  }});
  }

export default axiosWithAuth;
