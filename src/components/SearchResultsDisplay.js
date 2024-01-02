import React from 'react';
import ResultTile from './ResultTile.js';
import { useSelector } from 'react-redux';
import moment from 'moment';

const SearchResultsDisplay = () => {

    const results = useSelector((state) => state.searchForm);

    return (
        <div>
            {results.map((result) => {
                return (
                    <ResultTile 
                        key={result.data.id}
                        id={result.data.id}
                        title={result.data.title}
                        author={result.data.author} 
                        datetime={
                            moment.unix(result.data.created_utc).fromNow()
                        } 
                        numComments={result.data.num_comments}
                        numUpvotes={result.data.score}
                        list='search'
                    />
                )
            })}
        </div>
    )    
};

export default SearchResultsDisplay;