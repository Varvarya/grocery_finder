import {baseURL, jwtToken, products} from "../consts";
import { getAllProds, getProdById, addProd } from "../types/productTypes";
import api from "../api";

export const getAllProducts = () => async dispatch => {
    try {
        dispatch({
            type: getAllProds.loading
        });

        const res = await api.get(`${baseURL}/Product/get-all`);

         dispatch({
            type: getAllProds.success,
            payload: products
        })
    } catch (e) {
        console.log(getAllProds.fail, ' ', e);
        dispatch({
            type: getAllProds.fail,
        })
    }
};

export const getProductById = (id) => async dispatch => {
    try {
        dispatch({
            type: getProdById.loading
        });

        const res = await api.get(`${baseURL}/Product/${id}`);

        dispatch({
            type: getProdById.success,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: getProdById.fail,
            error: e
        })
    }
};

export const addProduct = (params) => async dispatch => {
    try {
        dispatch({
            type: addProd.loading
        });

        const params = {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "string",
            "description": "string",
            "imageUri": "string",
            "allergenType": 0
        }

        const res = await api.post(`${baseURL}/Product`, {params});

        dispatch({
            type: addProd.success,
            payload: res.data
        })
    } catch (e) {
        console.log(addProd.fail, ' ', e);
        dispatch({
            type: addProd.fail,
        })
    }
};