import React from 'react';
import '../css/ResultTile.css';

const ResultTile = ({title, author, datetime, numComments, numUpvotes}) => {
    return (
        <div className='tile'>
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