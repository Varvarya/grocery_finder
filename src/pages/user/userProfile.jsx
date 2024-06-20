import React, {useEffect, useState} from "react";
import SearchBar from "../../components/inputs/SearchBar";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import './styles.scss'
import {getAllProducts, getProductById} from "../../store/actions/productActions";
import ProductCard from "../../components/cards/Product";
import {searchGroceryStoreByProduct} from "../../store/actions/groceryStoreActions";
import Button from "../../components/inputs/Button";
import {deletePriceUpdateSubscriptionById, getPriceUpdateSubscriptions} from "../../store/actions/priceUpdateActions";
import SubscriptionCard from "../../components/cards/Subscription";
import {deleteUserAllergyById, getAllUserAllergies} from "../../store/actions/userAllergyActions";
import {getCurrentUserInfo} from "../../store/actions/authActions";

const UserProfile = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const subscriptions = useSelector(state => state.PriceUpdate.subscriptions);
    const user = useSelector(state => state.Auth.currentUser);
    const allergies = useSelector(state => state.UserAllergies.allergies);
    const products = useSelector(state => state.Product.products);


    useEffect(() => {
        dispatch(getPriceUpdateSubscriptions());
        dispatch(getAllUserAllergies());
        dispatch(getAllProducts());
        dispatch(getCurrentUserInfo());
        }, []);


    return (
        <div className='user-container'>
            {JSON.stringify(user)}
            {subscriptions.length > 0 && subscriptions.map((sub) =>
                <>
                <h1>Subscriptions</h1>
                <SubscriptionCard
                item={sub.product}
                    onClick={() => dispatch(deletePriceUpdateSubscriptionById(sub.id))}
                />
                </>)}
            {products.length > 0 && allergies.length > 0 && allergies.map((allergy) => {
                const prod = products.find((el) => el.id == allergy.id);
                console.log(prod);

                return (prod && <SubscriptionCard
                    item={prod}
                    onClick={() => dispatch(deleteUserAllergyById(allergy.id))}
                />)
            })
                }
            <Button text='Слідкувати' type='green' handleClick={() => {}} />
        </div>
    )
}

export default UserProfile;