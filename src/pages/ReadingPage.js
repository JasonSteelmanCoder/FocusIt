import React from 'react';
import ReturnButton from '../components/ReturnButton';
import { Link } from 'react-router-dom';
import ReadingMenu from '../components/ReadingMenu';
import ReadingPortal from '../components/ReadingPortal';
import { useState } from 'react';

const ReadingPage = () => {
    const [post, setPost] = useState('0'); 

    return (
        <div>
            <ReadingPortal post={post} />
            <ReadingMenu setPost={setPost} />
            <br />
            <Link to={'/lists'}>Return to Lists page</Link><br />
            <ReturnButton />
        </div>
    )
}

export default ReadingPage;