import React, {useEffect, useState} from "react";
import SearchBar from "../../components/inputs/searchBar";
import {authUser} from "../../store/actions/authActions";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.Product.products);
    
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {

    }, [searchValue]);



    return (
        <SearchBar value={searchValue} setValue={setSearchValue} items={products}/>
    )
}

export default HomePage;