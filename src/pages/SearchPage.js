import React from 'react';
import SignInLink from '../components/SignInLink';
import SearchForm from '../components/SearchForm';
import SearchResultsDisplay from '../components/SearchResultsDisplay';
import ReadingListForm from '../components/ReadingListForm';

const SearchPage = () => {
    return (
        <div>
            <SignInLink />
            <SearchForm />
            <SearchResultsDisplay />
            <ReadingListForm />
        </div>
    )
};

export default SearchPage;