import { REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
   REGISTER_USER_FAIL } from '../actions';

//    const initialState = {
//     // login: [],
//     register: [],
//     member: {
//       username: "",
//       password: "",
//     },
//     issue: [],
//     error: '',
//     isFetching: false
//   };


   export default Reg = (state = {initialState}, action) => {
    switch (action.type) {
      case userConstants.REG_START:
        return { registering: true };
      case userConstants.REG_SUCCESS:
        return {};
      case userConstants.REG_FAIL:
        return {};
      default:
        return state
    }
  }