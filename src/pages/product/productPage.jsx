import React, {useEffect, useState} from "react";
import SearchBar from "../../components/inputs/SearchBar";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import './styles.scss'
import {getAllProducts, getProductById} from "../../store/actions/productActions";
import ProductCard from "../../components/cards/Product";
import {searchGroceryStoreByProduct} from "../../store/actions/groceryStoreActions";
import Button from "../../components/inputs/Button";

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

    const availability = () => {
        return (
            <div className='availability'>
                <h4>Наявно в {inStores.length} магазинах</h4>
                {
                    inStores.map((el) =>
                        <div key={el.groceryStore.id} className='store-info' onClick={() => navigate(`/stores/${el.groceryStore.id}`)}>
                            <h5>{el.groceryStore.name}</h5>
                            <h5 className='price-tag'>{el.price}</h5>
                        </div>
                    )
                }
            </div>
        )
    }


    return (
        <div>
            {currentProduct &&
            <div className='prod-container'>
                <div className='prod-img-container'>

                    <img src={currentProduct.imageUri}/>
                </div>
                <div>
                    <h1>{currentProduct.name}</h1>
                    <h3>{currentProduct.description}</h3>
                    <h2>{inStores && inStores.length > 0 && minMax()}</h2>
                    <Button text='Слідкувати' type='green' handleClick={() => {}} />
                    {availability()}
                </div>
            </div>}
        </div>
    )
}

export default ProductPage;