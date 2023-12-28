import React from 'react';
import ResultTile from './ResultTile.js';
import { useSelector } from 'react-redux';

const SearchResultsDisplay = () => {

    const results = useSelector((state) => state.searchForm);

    return (
        <div>
            {results.map((result) => {
                return (
                    <ResultTile 
                        key={result.id}
                        id={result.id}
                        title={result.title}
                        author={result.author} 
                        datetime={result.datetime} 
                        numComments={result.numComments}
                        numUpvotes={result.numUpvotes}
                        list='search'
                    />
                )
            })}
        </div>
    )    
};

export default SearchResultsDisplay;