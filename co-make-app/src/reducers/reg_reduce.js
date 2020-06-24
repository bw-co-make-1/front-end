import { REG_START,
    REG_SUCCESS,
   REG_FAIL } from '../constants/userconstants';

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
      case REG_START:
        return { registering: true };
      case REG_SUCCESS:
        return {};
      case REG_FAIL:
        return {};
      default:
        return state
    }
  }