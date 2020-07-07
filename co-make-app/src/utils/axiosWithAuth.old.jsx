import axios from "axios";
// const BaseURL = "https://co-make1.herokuapp.com/api/";
const token = localStorage.getItem("token");

export function getToken() {
  // console.log(localStorage.getItem('token'));
  return localStorage.getItem('token')
}


export default function axiosWithAuth () {
  return axios.create({
      baseURL: 'https://co-make1.herokuapp.com/api',
      headers: {
          authorization: token,
          'Access-Control-Allow-Origin': '*',
'Content-Type': 'application/json',
      },
  })
}

console.log(token);




