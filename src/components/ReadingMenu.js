import React from 'react';
import store from '../store';

const ReadingMenu = ({ setPost }) => {
    const queryParams = new URLSearchParams(window.location.search);
    const listTitle = queryParams.get("listTitle");

    const postIds = store.getState().readingLists.find((list) => Object.keys(list)[0] === listTitle)[listTitle];

    const getPostById = (pin) => {
        return store.getState().archive.find((archivedItem) => archivedItem.data.id === pin);
    } 

    const handleMenuClick = (e) => {
        setPost(e.currentTarget.attributes.targetidentifier.value)
    };

    return (
        <div>
            <h3>{listTitle}</h3>
            {postIds.map((id, index) => {
                return (
                    <div key={index} >
                        <button onClick={handleMenuClick} targetidentifier={index}>{getPostById(id).data.title}</button><br />
                    </div>
                )
            })}
        </div>
    )
};

export default ReadingMenu;