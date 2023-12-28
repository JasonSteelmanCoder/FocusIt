import React from 'react';

const SearchForm = () => {
    const handleSubmit = () => {};

    return (
        <form onSubmit={handleSubmit}>
            <input className='bordered'></input>
            <button className='bordered'>Search</button>
        </form>
    )
};

export default SearchForm;