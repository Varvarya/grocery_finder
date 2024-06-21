import React, {useEffect} from "react";
import './styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchGroceryStoreByProduct} from "../../store/actions/groceryStoreActions";
import {deletePriceUpdateSubscriptionById} from "../../store/actions/priceUpdateActions";

const AllergyCard = ({item, onClick}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div className='row'>
            <span>{item.notes}</span>
            <button onClick={onClick} className='red'>Видалити</button>
        </div>
    )
}

export default AllergyCard;