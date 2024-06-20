import {auth, userInfo} from "../types/authTypes";
import {addPUS, deletePUSById, getAllPUS, getPUSById} from "../types/priceUpdateTypes";
import {
    addUserAllergy,
    deleteUserAllergyId,
    getUserAllergies,
    getUserAllergyId,
    updateUserAllergy
} from "../types/userAllergy";

const DefaultState = {
    loading: false,
    allergies: [],
    errorMsg: ""
};

const UserAllergiesReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case getUserAllergyId.loading:
        case deleteUserAllergyId.loading:
        case getUserAllergies.loading:
        case addUserAllergy.loading:
        case updateUserAllergy.loading:
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case getUserAllergyId.fail:
        case deleteUserAllergyId.fail:
        case getUserAllergies.fail:
        case addUserAllergy.fail:
        case updateUserAllergy.fail:
            return {
                ...state,
                loading: false,
                errorMsg: action.error
            };
        case getUserAllergyId.success:
        case deleteUserAllergyId.success:
        case getUserAllergies.success:
        case addUserAllergy.success:
        case updateUserAllergy.success:
            return {
                ...state,
                loading: false,
                allergies: action.payload,
                errorMsg: "",
            };
        default:
            return state
    }
};

export default UserAllergiesReducer