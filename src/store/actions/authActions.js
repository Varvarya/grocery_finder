import {auth, userInfo} from "../types/authTypes";
import {baseURL, jwtToken} from "../consts";
import api from "../api";

export const authUser = (formValues, userName, password) => async dispatch => {
    try {
        dispatch({
            type: auth.loading
        });

        console.log(formValues);

        const res = await api.post(`${baseURL}/Auth/token`, {
            userName: formValues.username,
            password: formValues.password
        });

        if (!res.data.isAuthorized) {
            localStorage.removeItem(jwtToken);
            dispatch({
                type: auth.fail,
            })
        } else {
            localStorage.setItem(jwtToken, res.data.token);

            dispatch({
                type: auth.success,
                payload: res.data
            })
        }
    } catch (e) {
        console.log('AUTHENTICATION_FAIL ', e);
        dispatch({
            type: auth.fail,
        })
    }
};

export const getCurrentUserInfo = () => async dispatch => {
    try {
        dispatch({
            type: userInfo.loading
        });

        const res = await api.get(`${baseURL}/Auth/current-user-info`);

        dispatch({
            type: userInfo.success,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: userInfo.fail,
            error: e
        })
    }
};