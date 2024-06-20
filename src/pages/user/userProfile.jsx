import React, {useEffect, useState} from "react";
import SearchBar from "../../components/inputs/SearchBar";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import './styles.scss'
import {getAllProducts, getProductById} from "../../store/actions/productActions";
import ProductCard from "../../components/cards/Product";
import {searchGroceryStoreByProduct} from "../../store/actions/groceryStoreActions";
import Button from "../../components/inputs/Button";

const UserProfile = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();


    useEffect(() => {
        }, []);


    return (
        <div>
            <Button text='Слідкувати' type='green' handleClick={() => {}} />

        </div>
    )
}

export default UserProfile;