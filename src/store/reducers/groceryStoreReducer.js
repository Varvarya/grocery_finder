



import {auth, userInfo} from "../types/authTypes";
import {addNewGS, getAllGS, getGSByProduct} from "../types/groceryStoreTypes";

const DefaultState = {
    loading: false,
    data: [],
    token: '',
    errorMsg: ""
};

const GroceryStoreReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case getAllGS.loading:
        case addNewGS.loading:
        case getGSByProduct.loading:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case getAllGS.fail:
        case addNewGS.fail:
        case getGSByProduct.fail:
            return {
                ...state,
                loading: false,
                errorMsg: action.error
            };
        case getAllGS.success:
        case addNewGS.success:
        case getGSByProduct.success:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: "",
            };
        default:
            return state
    }
};

export default AuthReducer