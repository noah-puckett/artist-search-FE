import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

function Artist({ name }) {
    return (<>
        <h3>{name}</h3>
    </>
    );
}

Artist.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Artist;
