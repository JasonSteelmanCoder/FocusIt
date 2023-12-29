import React from 'react';
import '../css/ResultTile.css';
import { addPost, removePost } from './readingListFormSlice.js';
import store from '../store.js';
import { addArchived } from './archiveSlice.js';

const ResultTile = ({title, author, datetime, numComments, numUpvotes, list, id}) => {
    const handleAddClick = (e) => {
        // When that id is not already in the readingListForm
        if (!store.getState().readingListForm.includes(e.currentTarget.id)) {
            // add post to the readingListForm
            store.dispatch(addPost(e.currentTarget.id))
        }

        // When that post is not in the archive, add it to the archive
        const archiveItems = store.getState().archive;
        const isPostInArchive = () => {
            for (let item of archiveItems) {
                if (item.id === id) {
                    return true;
                };
            }
            return false
        }
        if (!isPostInArchive()) {
            store.dispatch(addArchived({
                id: id,
                title: title,
                author: author,
                datetime: datetime,
                numComments: numComments,
                numUpvotes: numUpvotes,
                list: 'archive',
            }))
        }
    };

    const handleRemoveClick = (e) => {
        store.dispatch(removePost(e.currentTarget.id))
    };

    return (
        <div className='tile' onClick={list === 'search' ? handleAddClick : handleRemoveClick} id={id}>
            <span><strong>{title} </strong></span>
            <span>By {author} </span>
            <br />
            <span>{datetime} </span>
            <span>Comments: {numComments} </span>
            <span>Upvotes: {numUpvotes} </span>
        </div>
    )
};

export default ResultTile;