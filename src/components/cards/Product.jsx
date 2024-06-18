import React, {useEffect} from "react";
import './styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchGroceryStoreByProduct} from "../../store/actions/groceryStoreActions";

const ProductCard = ({item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchRes = useSelector(state => state.GroceryStore.stores);

    useEffect(() => {
        dispatch(searchGroceryStoreByProduct({ProductId: item.id}))
    }, []);

    const onClick = () => {
        navigate(`/product/${item.id}`);
    }

    return(
        <div className='product-card'>
            <div className='card-image' onClick={onClick.bind(this)}>
                <img src={item.imageUri}/>
            </div>
            <span>{item.name}</span>
            <span>{searchRes.length}</span>
        </div>
    )
}

export default ProductCard;