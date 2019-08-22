import React from 'react';
import PropTypes from 'prop-types';

function Lyrics({ lyrics, artist, title }) {
    return (<>
        <h1>{artist}</h1>
        <h3>{title}</h3>
        <p>{ lyrics ? lyrics : 'No lyrics are currently uploaded for this song, sorry!'}</p>
    </>
    );
}

Lyrics.propTypes = {
    lyrics: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Lyrics;
