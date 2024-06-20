import React, {useEffect, useState} from "react";
import SearchBar from "../../components/inputs/SearchBar";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import './styles.scss'
import {getAllProducts, getProductById} from "../../store/actions/productActions";
import ProductCard from "../../components/cards/Product";
import {searchGroceryStoreByProduct} from "../../store/actions/groceryStoreActions";
import Button from "../../components/inputs/Button";

const StorePage = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const stores =  useSelector(state => state.GroceryStore.stores)
    const store = stores.find((el) => el.groceryStore.id == id);

    console.log(store);

    const navigate = useNavigate();


    useEffect(() => {
    }, []);


    return (
        <div>
            {store &&
                <div className='prod-container'>
                    <div className='map-img-container'>
                        <img className='img' src={store.groceryStore.logoImageUri}/>
                    </div>
                    <div>
                        <div>

                            <h1>{store.groceryStore.name}</h1>
                            <h2>{store.groceryStore.workFrom} - {store.groceryStore.workTo}</h2>
                            <h4>{store.groceryStore.street}</h4>
                        </div>
                        <h3>{store.groceryStore.description}</h3>
                    </div>
                </div>}
        </div>
    )
}

export default StorePage;