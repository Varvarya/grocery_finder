import {auth, userInfo} from "../types/authTypes";
import {baseURL, jwtToken} from "../consts";
import api from "../api";
import {addPUS, deletePUSById, getAllPUS, getPUSById} from "../types/priceUpdateTypes";

export const getPriceUpdateSubscriptionById = (id) => async dispatch => {
    try {
        dispatch({
            type: getPUSById.loading
        });

        const res = await api.get(`${baseURL}/PriceUpdateSubscription/${id}`);

        dispatch({
            type: getPUSById.success,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: getPUSById.fail,
        })
    }
};

export const deletePriceUpdateSubscriptionById = (id) => async dispatch => {
    try {
        dispatch({
            type: deletePUSById.loading
        });

        const res = await api.delete(`${baseURL}/PriceUpdateSubscription/${id}`);

        dispatch({
            type: deletePUSById.success,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: deletePUSById.fail,
        })
    }
};

export const getPriceUpdateSubscriptions = (id) => async dispatch => {
    try {
        dispatch({
            type: getAllPUS.loading
        });

        const res = await api.get(`${baseURL}/PriceUpdateSubscription`);

        dispatch({
            type: getAllPUS.success,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: getAllPUS.fail,
        })
    }
};

export const addPriceUpdateSubscriptions = (productId) => async dispatch => {
    try {
        dispatch({
            type: addPUS.loading
        });

        const res = await api.post(`${baseURL}/PriceUpdateSubscription`, {productId});

        dispatch({
            type: addPUS.success,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: addPUS.fail,
        })
    }
};