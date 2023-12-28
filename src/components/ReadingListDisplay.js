import React from 'react';
import ResultTile from './ResultTile';
import store from '../store.js';
import { useSelector } from 'react-redux';

const ReadingListDisplay = () => {
    const selectedPosts = useSelector(state => state.readingListForm);

    return (
        <div>
            {selectedPosts.map((post) => {
                const results = store.getState().searchForm;
                const postToAdd = results.find(result => result.id === post);
                return (
                    <ResultTile 
                        key={postToAdd.id}
                        id={postToAdd.id}
                        title={postToAdd.title}
                        author={postToAdd.author} 
                        datetime={postToAdd.datetime} 
                        numComments={postToAdd.numComments}
                        numUpvotes={postToAdd.numUpvotes}
                        list='reading'
                    />
                )
            })}
        </div>
    )
};

export default ReadingListDisplay;