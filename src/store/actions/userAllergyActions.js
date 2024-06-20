import {auth, userInfo} from "../types/authTypes";
import {baseURL, jwtToken} from "../consts";
import api from "../api";
import {addPUS, deletePUSById, getAllPUS, getPUSById} from "../types/priceUpdateTypes";
import {
    addUserAllergy,
    deleteUserAllergyId,
    getUserAllergies,
    getUserAllergyId,
    updateUserAllergy
} from "../types/userAllergy";

export const getUserAllergyById = (id) => async dispatch => {
    try {
        dispatch({
            type: getUserAllergyId.loading
        });

        const res = await api.get(`${baseURL}/UserAllergy/${id}`);

        dispatch({
            type: getUserAllergyId.success,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: getUserAllergyId.fail,
        })
    }
};

export const deleteUserAllergyById = (id) => async dispatch => {
    try {
        dispatch({
            type: deleteUserAllergyId.loading
        });

        const res = await api.delete(`${baseURL}/UserAllergy/${id}`);

        dispatch({
            type: deleteUserAllergyId.success,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: deleteUserAllergyId.fail,
        })
    }
};

export const getAllUserAllergies = (id) => async dispatch => {
    try {
        dispatch({
            type: getUserAllergies.loading
        });

        const res = await api.get(`${baseURL}/UserAllergy`);

        dispatch({
            type: getUserAllergies.success,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: getUserAllergies.fail,
        })
    }
};

export const addNewUserAllergy = (productId, allergenType) => async dispatch => {
    try {
        dispatch({
            type: addUserAllergy.loading
        });

        const params = {
            id: productId,
            allergenType: allergenType,
            notes: "string"
        }

        const res = await api.post(`${baseURL}/UserAllergy`, params);

        dispatch({
            type: addUserAllergy.success,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: addUserAllergy.fail,
        })
    }
};