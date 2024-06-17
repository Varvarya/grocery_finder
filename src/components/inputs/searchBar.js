import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchBar = ({items}) => {
    // We'll add the logic for handling searches here soon

    return (
        <div style={{ width: '100%' }}>
            <ReactSearchAutocomplete
                items={items}
                // Additional props and event handlers will be added here
            />
        </div>
    );
}

export default SearchBar;