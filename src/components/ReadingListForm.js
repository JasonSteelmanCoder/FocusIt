import React from 'react';
import ReadingListDisplay from './ReadingListDisplay';
import { Link } from 'react-router-dom';
import store from '../store.js';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { addList } from './readingListsSlice.js';

const ReadingListForm = () => {
    const [listTitle, setListTitle] = useState(''); 

    const selectedPosts = useSelector(state => state.readingListForm);
    const isReadingListEmpty = selectedPosts.length === 0 ? true : false;
    const isListTitleEmpty = !listTitle ? true : false;
    const disabled = isReadingListEmpty || isListTitleEmpty ? true : false;

    const handleChange = (e) => {
        setListTitle(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch(addList({[listTitle]: selectedPosts}));
        //TODO: clear reading list
        //Maybe: give a 'saved' message
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className='bordered' placeholder='Type title here' value={listTitle} onChange={handleChange} />
            <button type='submit' className='bordered' disabled={disabled} >Save your reading list</button>
            <Link to={'lists'} className='bordered' id='reading-list-link'>See your Reading Lists</Link>
            <ReadingListDisplay />
        </form>
    )
};

export default ReadingListForm;