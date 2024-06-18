import {baseURL, jwtToken} from "../consts";
import {addNewGS, getAllGS, getGSByProduct} from "../types/groceryStoreTypes";
import api from "../api";

export const getAllGroceryStores = () => async dispatch => {
    try {
        dispatch({
            type: getAllGS.loading
        });

        const res = await api.get(`${baseURL}/GroceryStore/get-all`);

         dispatch({
            type: getAllGS.success,
            payload: res.data
        })
    } catch (e) {
        console.log(getAllGS.fail, ' ', e);
        dispatch({
            type: getAllGS.fail,
        })
    }
};

export const addNewGroceryStore = (store) => async dispatch => {
    try {
        dispatch({
            type: addNewGS.loading
        });

        const store = {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "string",
            "description": "string",
            "logoImageUri": "string",
            "contactInformation": "string",
            "workFrom": "string",
            "workTo": "string",
            "longitude": 0,
            "latitude": 0,
            "country": "string",
            "city": "string",
            "street": "string"
        }

        const res = await api.get(`${baseURL}/GroceryStore/get-all`);

        dispatch({
            type: addNewGS.success,
        })
    } catch (e) {
        dispatch({
            type: addNewGS.fail,
            error: e
        })
    }
};

export const searchGroceryStoreByProduct = (params) => async dispatch => {
    try {
        dispatch({
            type: getGSByProduct.loading
        });

        const reqParams = {...params}

        const res = await api.get(`${baseURL}/GroceryStore/search-by-product`, {params: reqParams});

        dispatch({
            type: getGSByProduct.success,
            payload: res.data.foundStores
        })
    } catch (e) {
        console.log(getGSByProduct.fail, ' ', e);
        dispatch({
            type: getGSByProduct.fail,
        })
    }
};