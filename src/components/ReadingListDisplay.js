import React from 'react';
import ResultTile from './ResultTile';
import store from '../store.js';
import { useSelector } from 'react-redux';
import moment from 'moment';

const ReadingListDisplay = () => {
    const selectedPosts = useSelector(state => state.readingListForm);

    return (
        <div>
            {selectedPosts.map((post) => {
                const results = store.getState().searchForm;
                const postToAdd = results.find(result => result.data.id === post);
                return (
                    <ResultTile 
                        key={postToAdd.data.id}
                        id={postToAdd.data.id}
                        title={postToAdd.data.title}
                        author={postToAdd.data.author} 
                        datetime={
                            moment.unix(postToAdd.data.created_utc).fromNow()
                        } 
                        numComments={postToAdd.data.num_comments}
                        numUpvotes={postToAdd.data.score}
                        list='reading'
                    />
                )
            })}
        </div>
    )
};

export default ReadingListDisplay;