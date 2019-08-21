import React from 'react';
import PropTypes from 'prop-types';

function Album({ title }) {
    return (<>
        <h4>{title}</h4>
    </>
    );
}

Album.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Album;
