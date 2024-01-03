import React from 'react';
import ResultTile from './ResultTile';
import store from '../store.js';
import { useSelector } from 'react-redux';

const ReadingListDisplay = () => {
    const selectedPosts = useSelector(state => state.readingListForm);

    return (
        <div>
            {selectedPosts.map((post) => {
                const results = store.getState().archive;
                const postToAdd = results.find(result => result.data.id === post);
                return (
                    <ResultTile 
                        key={postToAdd.data.id}
                        id={postToAdd.data.id}
                        title={postToAdd.data.title}
                        author={postToAdd.data.author} 
                        datetime={postToAdd.data.datetime} 
                        numComments={postToAdd.data.numComments}
                        numUpvotes={postToAdd.data.numUpvotes}
                        list='reading'
                    />
                )
            })}
        </div>
    )
};

export default ReadingListDisplay;