import React, {useEffect, useState} from "react";
import SearchBar from "../../components/inputs/SearchBar";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import './styles.scss'
import {getAllProducts, getProductById} from "../../store/actions/productActions";
import ProductCard from "../../components/cards/Product";
import Pagination from "../../components/pagination/Pagination";
import {searchGroceryStoreByProduct} from "../../store/actions/groceryStoreActions";

const ProductPage = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const currentProduct = useSelector(state => state.Product.currentProduct);
    const inStores = useSelector(state => state.GroceryStore.stores);
    console.log(currentProduct);

    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getProductById(id));
        dispatch(searchGroceryStoreByProduct({ProductId: id}));
    }, []);

    const minMax = () => {
        let min = inStores[0].price;
        let max = inStores[0].price;
        inStores.forEach((store) => {
            max = (store.price > max)? store.price : max;
            min = (store.price < min)? store.price : min;
        })

        return min+' - '+max;
    }


    return (
        <div className='container'>
            {currentProduct && <ProductCard item={currentProduct} />}
            {currentProduct &&
            <div>
                <img src={currentProduct.imageUri}/>
                <h1>{currentProduct.name}</h1>
                <h3>{currentProduct.description}</h3>
                <h2>{minMax()}</h2>
            </div>}
        </div>
    )
}

export default ProductPage;