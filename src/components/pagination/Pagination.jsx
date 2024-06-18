import React, { useState } from 'react';
import './styles.scss';
import ProductCard from "../cards/Product";

const Pagination = ({ items, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

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

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <div className='items-row'>
                {selectedItems.map((item, index) => (
                    <ProductCard item={item} key={index} />
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevClick} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={handleNextClick} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
