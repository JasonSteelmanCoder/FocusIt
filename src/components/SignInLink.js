import React from 'react';

const SignInLink = () => {
    const CLIENT_ID = '18vNzFDx5tza-yAvbHeH3Q';
    const TYPE = 'code';
    const RANDOM_STRING = Math.floor(Math.random() * 100000).toString();
    const URI = encodeURIComponent('https://therealfocusit.netlify.app');
    const DURATION = 'temporary';
    const SCOPE_STRING = 'read';

    return (
        // add .compact after the word authorize to get a page more friendly to small screens
        <a href={`https://www.reddit.com/api/v1/authorize.compact?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`} className='bordered'>Sign In!</a>
    )
}

export default SignInLink;