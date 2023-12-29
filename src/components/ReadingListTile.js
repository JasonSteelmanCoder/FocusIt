import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ReadingListTile.css';
import store from '../store';
import { removeList } from './readingListsSlice';

const ReadingListTile = ({title}) => {
    const handleDeleteClick = () => {
        store.dispatch(removeList(title));
    };

    return (
        <div className='reading-list-tile bordered'>
            <Link to={`/reading?listTitle=${title}&post=0`}>
                <h3>{title}</h3>
            </Link>
            <button className='left-margined' onClick={handleDeleteClick}>Delete list</button>
        </div>
    )
};

export default ReadingListTile;