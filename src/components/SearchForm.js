import React from 'react';
import SearchResultsDisplay from './SearchResultsDisplay';
import { addResults } from './searchFormSlice';
import store from '../store.js';
import mockQueryResponse from '../mocks/mockQueryResponse.js';

const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch(addResults(
            mockQueryResponse
        ))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='bordered'></input>
                <button className='bordered'>Search</button>
            </form>
            <SearchResultsDisplay />
        </div>
    )
};

export default SearchForm;