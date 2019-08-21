import React from 'react';
import PropTypes from 'prop-types';

function Lyrics({ text }) {
    return (<>
        <p>{text}</p>
    </>
    );
}

Lyrics.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Lyrics;
