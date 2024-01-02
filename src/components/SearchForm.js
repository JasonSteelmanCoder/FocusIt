import React from 'react';
import SearchResultsDisplay from './SearchResultsDisplay';
import { addResults } from './searchFormSlice';
import store from '../store.js';
import { useState } from 'react';

const SearchForm = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`http://oauth.reddit.com/search.json?q=${searchValue}&sort=new`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not okay.')
                }
                return response.json();
            })
            .then(data => {
                store.dispatch(addResults(data.data.children))
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation: ', error);
            });
    };

    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='bordered' value={searchValue} onChange={handleChange} placeholder='Search for posts!'></input>
                <button className='bordered' disabled={!searchValue} >Search</button>
            </form>
            <SearchResultsDisplay />
        </div>
    )
};

export default SearchForm;