import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './styles.scss'

const SearchBar = ({items, onSelect}) => {
    const styles = {
        backgroundColor: '#172F4A',
        border: '3px solid #205173',
        placeholderColor: '#ffffff',
        iconColor: '#61BDFC',
        lineColor: '#61BDFC',
        color: '#ffffff'
    }
    // We'll add the logic for handling searches here soon

    return (
        <div style={{ width: '60%' }}>
            <ReactSearchAutocomplete
                items={items}
                styling={styles}
                placeholder={'Шукати...'}
                onSelect={onSelect}
            />
        </div>
    );
}

export default SearchBar;