import React from 'react';
import SignInLink from '../components/SignInLink';
import SearchForm from '../components/SearchForm';
import ReadingListForm from '../components/ReadingListForm';
import '../css/SearchPage.css';

const SearchPage = () => {
    return (
        <div id='search-page'>
            <div>
                <SignInLink />
                <SearchForm />
            </div>
            <ReadingListForm />
        </div>
    )
};

export default SearchPage;