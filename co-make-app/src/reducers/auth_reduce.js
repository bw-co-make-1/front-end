import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR, LOGOUT } from '../actions';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
// user ? { loggedIn: true, user} : {}

  };


export default Auth = (state={initialState}, action) => {
  switch(action.type) {
    case AUTHENTICATED:
        localStorage.setItem("user", JSON.stringify(action.payload.user))
        localStorage.setItem("token", JSON.stringify(action.payload.token))
      return { ...state,
    isAuthenticated: true,
    user: action.payload.user,
    token: action.payload.token };

    case UNAUTHENTICATED:
      return { ...state,
        isAuthenticated: false,
        user: null };
    case AUTHENTICATION_ERROR:
      return { ...state, 
        error: action.payload };
    case "LOGOUT":
      localStorage.clear();
      return {...state,
        isAuthenticated: false,
        user:null
    };

default:
  return state;
}
};