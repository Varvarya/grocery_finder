import React, { useState } from 'react';
import './styles.scss';
import ProductCard from "../cards/Product";
import {useNavigate} from "react-router-dom";

const Pagination = ({ items, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const navigate = useNavigate();

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const onClick = (item) => {
        console.log(item);
        navigate(`/product/${item.id}`);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <div className='items-row'>
                {selectedItems.map((item, index) => (
                    <ProductCard item={item} key={index} onClick={() => onClick(item)}/>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevClick} disabled={currentPage === 1}>&#8882;</button>
                <span>{`Сторінка ${currentPage} з ${totalPages}`}</span>
                <button onClick={handleNextClick} disabled={currentPage === totalPages} value='&#8883;'>&#8883;</button>
            </div>
        </div>
    );
};

export default Pagination;
