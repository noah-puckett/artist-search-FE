import React from 'react';
import PropTypes from 'prop-types';

function Artist({ name }) {
    return (<>
    {/* TODO: turn this into a react uhhh router link thing */}
        <h3>{name}</h3>
    </>
    );
}

Artist.propTypes = {
    name: PropTypes.string.isRequired
};

export default Artist;
