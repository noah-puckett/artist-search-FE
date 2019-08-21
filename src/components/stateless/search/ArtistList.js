import React from 'react';
import PropTypes from 'prop-types';
import Artist from '../search/Artist';

function ArtistList({ artists }) {
    const artistsArray = artists.map(artist => {
        return (
            <li style={{ listStyleType: 'none' }} key={artist.id}>
                <Artist name={artist.name} id={artist.id} />
            </li>
        );
    });
    return artistsArray;
}

ArtistList.propTypes = {
    artists: PropTypes.array.isRequired,
};

export default ArtistList;
