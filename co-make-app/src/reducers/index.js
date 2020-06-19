import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
    FETCH_USER_POST,
  } from '../actions';

  const initialState = {
    user: [],
    error: '',
    isFetching: false
  };

  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_USER_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_USER_FAIL:
        return {
          ...state,
          error: action.payload
        };
       case FETCH_USER_POST:
           return {
               ...state,
               isFetching: false,
               user: action.payload
           };
      default:
        return state;
    }
  }

  export default reducer;
