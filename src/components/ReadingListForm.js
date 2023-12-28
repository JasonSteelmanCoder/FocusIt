import React from 'react';
import ReadingListDisplay from './ReadingListDisplay';
import { Link } from 'react-router-dom';

const ReadingListForm = () => {
    return (
        <form>
            <input className='bordered' />
            <button type='submit' className='bordered'>Save your reading list</button>
            <Link to={'lists'} className='bordered' id='reading-list-link'>See your Reading Lists</Link>
            <ReadingListDisplay />
        </form>
    )
};

export default ReadingListForm;