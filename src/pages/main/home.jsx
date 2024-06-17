import React, {useEffect, useState} from "react";
import SearchBar from "../../components/inputs/searchBar";
import {authUser} from "../../store/actions/authActions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        dispatch(authUser(formValues)).then((res) => {
            if (!authState.errorMsg) {
                navigate('/');
            }
        });
    }, [searchValue]);



    return (
        <SearchBar value={searchValue} setValue={setSearchValue} items={}/>
    )
}

export default HomePage;