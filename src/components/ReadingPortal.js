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
            <h1>{postToDisplay.data.title}</h1>
            {postToDisplay.data.selftext_paragraphs.map((paragraph, index) => {
                return (
                    <p key={index}>{paragraph}</p>
                )
            })}
            <img src={postToDisplay.data.url_overridden_by_dest} alt={postToDisplay.data.title}>Image not supported</img>
        </div>
    )
};

export default ReadingPortal;