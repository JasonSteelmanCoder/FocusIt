import React from 'react';
import '../css/ResultTile.css';
import { addPost, removePost } from './readingListFormSlice.js';
import store from '../store.js';

const ResultTile = ({title, author, datetime, numComments, numUpvotes, list, id}) => {
    const handleAddClick = (e) => {
        store.dispatch(addPost(e.currentTarget.id))
    };

    const handleRemoveClick = (e) => {};

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