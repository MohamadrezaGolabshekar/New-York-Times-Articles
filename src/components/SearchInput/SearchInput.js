import React from 'react';
import { DebounceInput } from 'react-debounce-input';

/**
 * search input component 
 * for this I use DebounceInput for add debounce feature to input
 * to prevent unnecessary request 
 */
const SearchInput = ({ onSearch }) => {
    return (
        <>
            <DebounceInput
                className='input'
                placeholder='Search your favorite Article...'
                minLength={1}
                debounceTimeout={500}
                onChange={e => onSearch(e.target.value)} />
        </>
    )
}

export default SearchInput;