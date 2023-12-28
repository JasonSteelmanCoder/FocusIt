import React from 'react';
import SearchResultsDisplay from './SearchResultsDisplay';
import { addResults } from './searchFormSlice';
import store from '../store.js';
import mockQueryResponse from '../mocks/mockQueryResponse.js';
import { useState } from 'react';

const SearchForm = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch(addResults(
            mockQueryResponse
        ))
    };

    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='bordered' value={searchValue} onChange={handleChange}></input>
                <button className='bordered' disabled={!searchValue} >Search</button>
            </form>
            <SearchResultsDisplay />
        </div>
    )
};

export default SearchForm;