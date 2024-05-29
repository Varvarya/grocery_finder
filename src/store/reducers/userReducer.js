import {auth, userInfo} from "../types/authTypes";
import {addUser, deleteUser, getUser} from "../types/userTypes";

const DefaultState = {
    loading: false,
    data: [],
    token: '',
    errorMsg: ""
};

const UserReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case getUser.loading:
        case addUser.loading:
        case deleteUser.loading:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case getUser.fail:
        case addUser.fail:
        case deleteUser.fail:
            return {
                ...state,
                loading: false,
                errorMsg: action.error
            };
        case getUser.success:
            return {
                ...state,
                user: action.payload
            }
        case addUser.success:
            case deleteUser.success:
            return {
                ...state,
                loading: false,
                errorMsg: "",
            };
        default:
            return state
    }
};

export default UserReducer