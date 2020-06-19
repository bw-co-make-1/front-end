import axios from 'axios';


export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
export const FETCH_USER_POST = 'FETCH_USER_POST';

export const getUser = () => dispatch => {
  dispatch({ type: FETCH_USER_START });
  axios
    .get(`https://co-make1.herokuapp.com/api/users/${user.id}`)

    .then(res => {
     console.log(res);
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data })

    })
    .catch(err => dispatch({ type: FETCH_USER_FAIL, payload: err }));
};

export const postUser = newUser => {
    return dispatch => {
    axios
      .post('https://co-make1.herokuapp.com/api/user', newUser)

      .then(res => {
        console.log("Actions Res.data", res.data);
        dispatch({type: FETCH_USER_POST, payload: res.data });

    });

    };
    };
