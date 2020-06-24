import axios from "axios";

export const axiosWithoutAuth = () => axios.create({
  baseURL: "https://co-make1.herokuapp.com/api/"
})


const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://co-make1.herokuapp.com/api/",
    headers: {
      Authorization: token
    }

  });
};

export default axiosWithAuth;
