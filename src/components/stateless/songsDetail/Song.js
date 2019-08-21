import React from 'react';
import PropTypes from 'prop-types';

function Song({ title }) {
    return (<>
        <h4>{title}</h4>
    </>
    );
}

Song.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Song;
