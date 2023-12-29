import React from 'react';
import ReadingListTile from './ReadingListTile';
import { useSelector } from 'react-redux';
import store from '../store';

const ReadingLists = () => {
    const lists = store.getState().readingLists;

    return (
        <div>
            <h2>Your Reading Lists</h2>
            {lists.map((list) => {
                return (<ReadingListTile title={Object.keys(list)[0]} key={Object.keys(list)[0]} />) 
            })}
        </div>
    )
}

export default ReadingLists;