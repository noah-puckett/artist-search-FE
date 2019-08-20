import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ searchBoxInput, onChange }) {
    return (<>
        <input name="searchBoxInput" value={searchBoxInput} onChange={onChange} />
    </>
    );
}

SearchBar.propTypes = {
    searchBoxInput: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchBar;
