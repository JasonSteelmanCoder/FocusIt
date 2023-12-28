import React from 'react';
import SignInLink from '../components/SignInLink';
import SearchForm from '../components/SearchForm';
import SearchResultsDisplay from '../components/SearchResultsDisplay';
import ReadingListForm from '../components/ReadingListForm';
import '../css/SearchPage.css';

const SearchPage = () => {
    return (
        <div id='search-page'>
            <div>
                <SignInLink />
                <SearchForm />
                <SearchResultsDisplay />
            </div>
            <ReadingListForm />
        </div>
    )
};

export default SearchPage;