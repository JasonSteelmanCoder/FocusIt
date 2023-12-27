import React from 'react';
import { Link } from 'react-router-dom';

const ReadingListTile = () => {
    return (
        <div>
            <h3>Title</h3>
            <Link>Read it now</Link>
            <button>Mark it read</button>
            <button>Delete</button>
        </div>
    )
};

export default ReadingListTile;