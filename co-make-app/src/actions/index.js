import axiosWithAuth from '../utils/axiosWithAuth';
import axios from "axios";


//login - .post - /api/Login 
export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

//register - .post - /api/register
export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

//gather user -.get - /api/account/${id}
export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

//delete user - .delete - /api/account/${id}
export const DEL_USER_START = 'DEL_USER_START';
export const DEL_USER_SUCCESS = 'DEL_USER_SUCCESS';
export const DEL_USER_FAIL = 'DEL_USER_FAIL';

//update user - .put - /api/account/${id}
export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';

//get issues - .get - /api/issue
export const FETCH_ISSUE_START = 'FETCH_ISSUE_START';
export const FETCH_ISSUE_SUCCESS = 'FETCH_ISSUE_SUCCESS';
export const FETCH_ISSUE_FAIL = 'FETCH_ISSUE_FAIL';

//post issue - .post - /api/issue
export const POST_ISSUE_START = 'POST_ISSUE_START';
export const POST_ISSUE_SUCCESS = 'POST_ISSUE_SUCCESS';
export const POST_ISSUE_FAIL = 'POST_ISSUE_FAIL';

//delete issue - .delete - /api/issue/${id}
export const DEL_ISSUE_START = 'DEL_ISSUE_START';
export const DEL_ISSUE_SUCCESS = 'DEL_ISSUE_SUCCESS';
export const DEL_ISSUE_FAIL = 'DEL_ISSUE_FAIL';

//update issue - .put - /api/issue/${id}
export const PUT_ISSUE_START = 'PUT_ISSUE_START';
export const PUT_ISSUE_SUCCESS = 'PUT_ISSUE_SUCCESS';
export const PUT_ISSUE_FAIL = 'PUT_ISSUE_FAIL';

export const Login = (member, history) => dispatch => {
  dispatch({type: LOGIN_USER_START});
  axiosWithAuth()
  .post("/Login", {member })
  .then(res => {
    console.log("login:", res.data);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data})
    localStorage.setItem('token', res.data.token);
    console.log(res.data.token);
    history.push('/dashboard');
  })
  .catch(err => dispatch({ type: LOGIN_USER_FAIL, payload: err }));
}

export const Register = () => dispatch => {
  dispatch({type: REGISTER_USER_START});
  axios
  .post("/Register" )
  .then(res => {
    dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data})
  })
  .catch(err => dispatch({ type: REGISTER_USER_FAIL, payload: err }));
};

export const GetUser = ({id}) => dispatch => {
  dispatch({type: FETCH_USER_START});
  axiosWithAuth()
  .get(`/account/${id}`)
  .then(res => {
    dispatch({ type: FETCH_USER_SUCCESS, payload: res.data})
  })
  .catch(err => dispatch({ type: FETCH_USER_FAIL, payload: err }));
};
export const GetPosts = () => dispatch => {
  dispatch({type: FETCH_ISSUE_START});
  axiosWithAuth()
  .get(`/issue`)
  .then(res => {
    dispatch({ type: FETCH_ISSUE_SUCCESS, payload: res.data})
  })
  .catch(err => dispatch({ type: FETCH_ISSUE_FAIL, payload: err }));
};

export const DelPosts = ({id}) => dispatch => {
  dispatch({type: DEL_ISSUE_START});
  axiosWithAuth()
  .delete(`/issue/${id}`)
  .then(res => {
    dispatch({ type: DEL_ISSUE_SUCCESS, payload: res.data})
  })
  .catch(err => dispatch({ type: DEL_ISSUE_FAIL, payload: err }));
};

export const EditPosts = ({id}) => dispatch => {
  dispatch({type: PUT_ISSUE_START});
  axiosWithAuth()
  .delete(`/issue/${id}`)
  .then(res => {
    dispatch({ type: PUT_ISSUE_SUCCESS, payload: res.data})
  })
  .catch(err => dispatch({ type: PUT_ISSUE_FAIL, payload: err }));
};

export const AddPosts = () => dispatch => {
  dispatch({type: POST_ISSUE_START});
  axiosWithAuth()
  .delete(`/issue/`)
  .then(res => {
    dispatch({ type: POST_ISSUE_SUCCESS, payload: res.data})
  })
  .catch(err => dispatch({ type: POST_ISSUE_FAIL, payload: err }));
};

