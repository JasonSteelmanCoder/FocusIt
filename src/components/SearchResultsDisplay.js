import React from 'react';
import ResultTile from './ResultTile.js';
import queryResponse from '../mocks/mockQueryResponse.js';

const SearchResultsDisplay = () => {
    return (
        <div>
            {queryResponse.map((result) => {
                return (
                    <ResultTile 
                        title={result.title}
                        author={result.author} 
                        datetime={result.datetime} 
                        numComments={result.numComments}
                        numUpvotes={result.numUpvotes}
                    />
                )
            })}
        </div>
    )    
};

export default SearchResultsDisplay;