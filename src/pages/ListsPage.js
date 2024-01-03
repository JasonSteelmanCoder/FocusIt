import React from 'react';
import ReadingLists from '../components/ReadingLists.js';
import ReturnButton from '../components/ReturnButton.js';
import store from '../store.js';

const ListPage = () => {

    

    return (
        <div>
            {store.getState().readingLists.length !== 0 ? <ReadingLists /> : <div><p>No lists yet!</p><p>On the search page, select posts and add a title to start a new list.</p></div>}
            <ReturnButton />
        </div>
    )
};

export default ListPage;