import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchBar = () => {
    // We'll add the logic for handling searches here soon

    const items = [
        {
            id: 0,
            name: 'HTML'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Basic'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ];

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