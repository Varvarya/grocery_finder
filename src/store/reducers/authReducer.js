import {auth, userInfo} from "../types/authTypes";

const DefaultState = {
    loading: false,
    currentUser: undefined,
    token: '',
    errorMsg: ""
};

const AuthReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case auth.loading:
        case userInfo.loading:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case auth.fail:
        case userInfo.fail:
            return {
                ...state,
                loading: false,
                errorMsg: action.error
            };
        case auth.success:
            return {
                ...state,
                loading: false,
                token: action.payload,
                errorMsg: "",
            };
        case userInfo.success:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                errorMsg: "",
            };
        default:
            return state
    }
};

export default AuthReducer