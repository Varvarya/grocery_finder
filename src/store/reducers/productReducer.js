



import { getAllProds, getProdById, addProd } from "../types/productTypes";

const DefaultState = {
    loading: false,
    products: [],
    token: '',
    errorMsg: ""
};

const ProductReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case getAllProds.loading:
        case getProdById.loading:
        case addProd.loading:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case getAllProds.fail:
        case getProdById.fail:
        case addProd.fail:
            return {
                ...state,
                loading: false,
                errorMsg: action.error
            };
        case getAllProds.success:
        case getProdById.success:
        case addProd.success:
            return {
                ...state,
                loading: false,
                products: action.payload,
                errorMsg: "",
            };
        default:
            return state
    }
};

export default ProductReducer