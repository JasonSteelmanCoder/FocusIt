import React from 'react';
import ReadingListDisplay from './ReadingListDisplay';
import { Link } from 'react-router-dom';

const ReadingListForm = () => {
    return (
        <form>
            <input />
            <button type='submit'>Save your reading list</button>
            <Link to={'lists'}>See your Reading Lists</Link>
            <ReadingListDisplay />
        </form>
    )
};

export default ReadingListForm;