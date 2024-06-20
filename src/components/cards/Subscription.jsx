import React, {useEffect} from "react";
import './styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchGroceryStoreByProduct} from "../../store/actions/groceryStoreActions";
import {deletePriceUpdateSubscriptionById} from "../../store/actions/priceUpdateActions";

const SubscriptionCard = ({item, onClick}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div className='product-card'>
            <div className='card-image' onClick={onClick.bind(this)}>
                <img src={item.imageUri}/>
            </div>
            <span>{item.name}</span>
            <button onClick={onClick}>Delete</button>
        </div>
    )
}

export default SubscriptionCard;