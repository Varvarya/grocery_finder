import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchWrapper} from "../../_helpers";


export function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

    return {
        login: login()
    };

    function login() {
        return createAsyncThunk(
            `${name}/login`,
            async ({ username, password }) => await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })
        );
    }
}
