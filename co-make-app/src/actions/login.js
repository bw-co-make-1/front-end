import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export function Login({ username, password }, history) {
  return async (dispatch) => {
    try {
      const res = await axiosWithAuth()
      .post(`/Login`, { username, password });
      dispatch({ type: LOGIN_USER_SUCCESS });
      localStorage.setItem('user', res.data.user);
      localStorage.setItem('token', res.data.token);
      history.push('/Dashboard');
    } catch(error) {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: 'Invalid username or password'
      });
    }
  };
}