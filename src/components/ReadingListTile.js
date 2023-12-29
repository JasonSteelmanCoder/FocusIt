import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ReadingListTile.css';

const ReadingListTile = ({title}) => {
    return (
        <div className='reading-list-tile bordered'>
            <h3>{title}</h3>
            <Link to={'/reading'}>Read it now</Link>
            <button className='left-margined'>Mark it read</button>
            <button className='left-margined'>Delete</button>
        </div>
    )
};

export default ReadingListTile;