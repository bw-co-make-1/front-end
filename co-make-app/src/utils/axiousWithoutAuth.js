import axios from 'axios';

const axiosWithoutAuth = () => {

return axios.create({
    baseURL: "https://co-make1.herokuapp.com/api/"
  })

};

export default axiosWithoutAuth;