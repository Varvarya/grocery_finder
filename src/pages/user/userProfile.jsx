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
import AllergyCard from "../../components/cards/Allergy";
import moment from "moment";

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
            {user &&
                <>
                    <h3 className='user-text'>{`Ім'я користувача: ${user.userName}`}</h3>
                    <h3 className='user-text'>{`E-mail: ${user.email}`}</h3>
                    <h3 className='user-text'>{`Дата реєстрація: ${ moment.utc(user.registryDate).local().format('DD/MM/YYYY')}`}</h3>
                </>
            }
            <div className='content-aligner'>
            <div className='user-column'>
                {subscriptions.length > 0 && <h1>Підписки</h1>}

                <div className='subscriptions'>
                {subscriptions.length > 0 && subscriptions.map((sub) =>

                <SubscriptionCard
                item={sub.product}
                    onClick={() => dispatch(deletePriceUpdateSubscriptionById(sub.id))}
                openPage={() =>  navigate(`/product/${sub.product.id}`)}
                    />)}
                </div>
            </div>

            <div className='user-column'>
                {subscriptions.length > 0 && <h1>Алергії</h1>}
            {products.length > 0 && allergies.length > 0 && allergies.map((allergy) => {
                return (allergy && <AllergyCard
                    item={allergy}
                    onClick={() => dispatch(deleteUserAllergyById(allergy.id))}
                />)
            })
                }
            </div>
            </div>
        </div>
    )
}

export default UserProfile;