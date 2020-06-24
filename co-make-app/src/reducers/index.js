import {
 LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  
  //register - .post - /api/register
  REGISTER_USER_START,
 REGISTER_USER_SUCCESS,
REGISTER_USER_FAIL,
  
  //gather user -.get - /api/account/${id}
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  
  //delete user - .delete - /api/account/${id}
  DEL_USER_START,
  DEL_USER_SUCCESS,
 DEL_USER_FAIL,
  
  //update user - .put - /api/account/${id}
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  
  //get issues - .get - /api/issue
   FETCH_ISSUE_START,
  FETCH_ISSUE_SUCCESS,
  FETCH_ISSUE_FAIL,
  
  //post issue - .post - /api/issue
   POST_ISSUE_START,
  POST_ISSUE_SUCCESS,
  POST_ISSUE_FAIL,
  
 //del issue - .delete - /api/issue
 DEL_ISSUE_START,
 DEL_ISSUE_SUCCESS,
 DEL_ISSUE_FAIL,

 //Edit issue - .put - /api/issue/${id}
PUT_ISSUE_START,
PUT_ISSUE_SUCCESS,
PUT_ISSUE_FAIL,

  } from '../actions';

  const initialState = {
    login: [],
    register: [],
    user: [],
    issue: [],
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
        case LOGIN_USER_START:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case LOGIN_USER_SUCCESS:
          return {
            ...state,
            user: action.payload,
            isFetching: false,
            error: ''
          };
        case LOGIN_USER_FAIL:
          return {
            ...state,
            error: action.payload
          };
          case REGISTER_USER_START:
            return {
              ...state,
              isFetching: true,
              error: ''
            };
          case REGISTER_USER_SUCCESS:
            return {
              ...state,
              user: action.payload,
              isFetching: false,
              error: ''
            };
          case REGISTER_USER_FAIL:
            return {
              ...state,
              error: action.payload
            };
            case DEL_USER_START:
              return {
                ...state,
                isFetching: true,
                error: ''
              };
            case DEL_USER_SUCCESS:
              return {
                ...state,
                user: action.payload,
                isFetching: false,
                error: ''
              };
            case DEL_USER_FAIL:
              return {
                ...state,
                error: action.payload
              };
        
        case UPDATE_USER_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isFetching: false,
          error: ''
        };
      case UPDATE_USER_FAIL:
        return {
          ...state,
          error: action.payload
        };
        case FETCH_ISSUE_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_ISSUE_SUCCESS:
        return {
          ...state,
          issue: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_ISSUE_FAIL:
        return {
          ...state,
          error: action.payload
        };
        case POST_ISSUE_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case POST_ISSUE_SUCCESS:
        return {
          ...state,
          issue: action.payload,
          isFetching: false,
          error: ''
        };
      case POST_ISSUE_FAIL:
        return {
          ...state,
          error: action.payload
        };
        case DEL_ISSUE_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case DEL_ISSUE_SUCCESS:
        return {
          ...state,
          issue: action.payload,
          isFetching: false,
          error: ''
        };
      case DEL_ISSUE_FAIL:
        return {
          ...state,
          error: action.payload
        };
        case PUT_ISSUE_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case PUT_ISSUE_SUCCESS:
        return {
          ...state,
          issue: action.payload,
          isFetching: false,
          error: ''
        };
      case PUT_ISSUE_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }

  export default reducer;