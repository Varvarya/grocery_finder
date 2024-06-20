import React, {useEffect, useState} from "react";
import SearchBar from "../../components/inputs/SearchBar";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import './styles.scss'
import {maps} from "../../store/consts";

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
                        <iframe
                            src={maps[store.groceryStore.id]}
                            className='frame'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                    <div className='store-desc-container'>
                            <div className='row'>
                                <div className='store-logo'>
                                    <img className='img' src={store.groceryStore.logoImageUri}/>
                                </div>
                                <div className='column'>
                                    <h1>{store.groceryStore.name}</h1>
                                    <h6>{store.groceryStore.workFrom} - {store.groceryStore.workTo}</h6>
                                    <h7>{store.groceryStore.street}</h7>
                                </div>
                            </div>
                        <h3>{store.groceryStore.description}</h3>
                    </div>
                </div>}
        </div>
    )
}

export default StorePage;