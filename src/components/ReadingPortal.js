import React from 'react';
import store from '../store';
import { useEffect, useState } from 'react';

const ReadingPortal = ({ post }) => {
    const queryParams = new URLSearchParams(window.location.search);
    const listTitle = queryParams.get("listTitle");

    const postIds = store.getState().readingLists.find((list) => Object.keys(list)[0] === listTitle)[listTitle];

    const getPostById = (pin) => {
        return store.getState().archive.find((archivedItem) => archivedItem.data.id === pin);
    }

    const [postToDisplay, setPostToDisplay] = useState(getPostById(postIds[post]));

    useEffect(() => {
        setPostToDisplay(getPostById(postIds[post]));
    }, [post, postIds]);

    return (
        <div>
            {JSON.stringify(postToDisplay)}
        </div>
    )
};

export default ReadingPortal;