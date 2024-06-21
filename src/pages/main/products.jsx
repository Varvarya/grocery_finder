import React, {useEffect, useState} from "react";
import SearchBar from "../../components/inputs/SearchBar";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import './styles.scss'
import {getAllProducts} from "../../store/actions/productActions";
import ProductCard from "../../components/cards/Product";
import Pagination from "../../components/pagination/Pagination";

const HomePage = () => {
    const dispatch = useDispatch();
    const availableProducts = useSelector(state => state.Product.products);

    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        dispatch(getAllProducts())
    }, [searchValue]);

    const onSelect = (el) => {
        navigate(`/product/${el.id}`);
    }


    return (
        <div className='container'>
            <SearchBar value={searchValue} setValue={setSearchValue} items={availableProducts} onSelect={onSelect}/>
            <div className='results'>
                <Pagination items={availableProducts} itemsPerPage={4} />
            </div>
        </div>
    )
}

export default HomePage;