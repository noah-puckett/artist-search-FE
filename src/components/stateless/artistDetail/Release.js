import React from 'react';
import PropTypes from 'prop-types';

function Release({ title }) {
    return (<>
    {/* TODO: turn this into a react uhhh router link thing */}
        <h4>{title}</h4>
        {/* <p>{id}</p> */}
    </>
    );
}

Release.propTypes = {
    title: PropTypes.string.isRequired,
    // id: PropTypes.string.isRequired
};

export default Release;
