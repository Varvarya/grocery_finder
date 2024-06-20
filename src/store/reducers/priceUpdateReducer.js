import {auth, userInfo} from "../types/authTypes";
import {addPUS, deletePUSById, getAllPUS, getPUSById} from "../types/priceUpdateTypes";

const DefaultState = {
    loading: false,
    subscriptions: [],
    errorMsg: ""
};

const PriceUpdateReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case getPUSById.loading:
        case deletePUSById.loading:
        case getAllPUS.loading:
        case addPUS.loading:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case getPUSById.fail:
        case deletePUSById.fail:
        case getAllPUS.fail:
        case addPUS.fail:
            return {
                ...state,
                loading: false,
                errorMsg: action.error
            };
        case getPUSById.success:
        case deletePUSById.success:
        case getAllPUS.success:
        case addPUS.success:
            return {
                ...state,
                loading: false,
                subscriptions: action.payload,
                errorMsg: "",
            };
        default:
            return state
    }
};

export default PriceUpdateReducer