import React from 'react';
import ReturnButton from '../components/ReturnButton';
import { Link } from 'react-router-dom';

const ReadingPage = () => {
    return (
        <div>
            <h2>Stuff to read! Stuff to read!</h2>
            <Link to={'/lists'}>Return to Lists page</Link>
            <br />
            <ReturnButton />
        </div>
    )
}

export default ReadingPage;