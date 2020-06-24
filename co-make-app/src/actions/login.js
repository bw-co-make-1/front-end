import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth";
export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export function Login({ username, password }, history) {
  return async (dispatch) => {
    try {
      const res = await axiosWithAuth()
      .post(`/Login`, { username, password });
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      history.push('/Dashboard');
    } catch(error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid username or password'
      });
    }
  };
}