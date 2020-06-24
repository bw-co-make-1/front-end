import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {axiosWithoutAuth as axios} from "../utils/axiosWithAuth";
import { REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
   REGISTER_USER_FAIL } from '../actions';

export const useRegister = () => {
    const dispatch = useDispatch();

    const register = useCallback(credentials => {
        dispatch({type: REGISTER_USER_START});
        axios().post('/register', credentials).then(res => {
            console.log(res.data);
            dispatch({type: REGISTER_USER_SUCCESS, payload: res.data.key})
        }).catch(err => dispatch({type: REGISTER_USER_FAIL, payload: err.response}))
    }, [dispatch]);

    return [register]
};