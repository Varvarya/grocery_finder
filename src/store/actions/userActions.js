import axios from "axios";
import {auth, userInfo} from "../types/authTypes";
import {baseURL} from "../consts";
import {addUser, deleteUser, getUser} from "../types/userTypes";

export const getUserByUsername = (userName) => async dispatch => {
    try {
        dispatch({
            type: auth.loading
        });

        const res = await axios.get(`${baseURL}/User/${userName}`);

        dispatch({
            type: getUser.success,
            payload: res.data
        })
    } catch (e) {
        console.log('AUTHENTICATION_FAIL ', e);
        dispatch({
            type: getUser.fail,
        })
    }
};

export const addNewUser = (user) => async dispatch => {
    try {
        dispatch({
            type: addUser.loading
        });

        const user = {
            "userName": "string",
            "password": "string",
            "email": "user@example.com",
            "clientURIForEmailConfirmation": "string"
        }

        const res = await axios.post(`${baseURL}User`, user);

        dispatch({
            type: addUser.success,
            //payload: res.data,
            userName: user
        })
    } catch (e) {
        dispatch({
            type: addUser.fail,
            error: e
        })
    }
};

export const deleteUserById = (id) => async dispatch => {
    try {
        dispatch({
            type: deleteUser.loading
        });

        const user = {
            "userName": "string",
            "password": "string",
            "email": "user@example.com",
            "clientURIForEmailConfirmation": "string"
        }

        const res = await axios.delete(`${baseURL}/User/${id}`);

        dispatch({
            type: deleteUser.success,
            //payload: res.data,
            userName: user
        })
    } catch (e) {
        dispatch({
            type: deleteUser.fail,
            error: e
        })
    }
};