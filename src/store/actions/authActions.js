import axios from "axios";
import {auth, userInfo} from "../types/authTypes";
import {baseURL, token} from "../consts";

export const authUser = (userName, password) => async dispatch => {
    try {
        dispatch({
            type: auth.loading
        });

        const res = await axios.post(`${baseURL}/Auth/token`, {
            "userName": "string",
            "password": "string"
        });

        localStorage.setItem(token, res.data.token);

        dispatch({
            type: auth.success,
            payload: res.data
        })
    } catch (e) {
        console.log('AUTHENTICATION_FAIL ', e);
        dispatch({
            type: auth.fail,
        })
    }
};

export const getCurrentUserInfo = (user) => async dispatch => {
    try {
        dispatch({
            type: userInfo.loading
        });

        const res = await axios.get(`${baseURL}/Auth/current-user-info`);

        dispatch({
            type: userInfo.success,
            //payload: res.data,
            payload: {
                "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "userName": "string",
                "role": "string",
                "registryDate": "2024-05-28T20:24:23.699Z",
                "email": "string"
            },
            userName: user
        })
    } catch (e) {
        dispatch({
            type: userInfo.fail,
            error: e
        })
    }
};