import React from 'react';
import PropTypes from 'prop-types';
import Artist from '../search/Artist';
import { Link } from 'react-router-dom';

function ArtistList({ artists }) {
    const artistsArray = artists.map(artist => {
        return (
            <li style={{ listStyleType: 'none' }} key={artist.id}>
                <Link to={`/${artist.name}/${artist.id}/albums`}>
                    <Artist name={artist.name} id={artist.id} />
                </Link>
            </li>
        );
    });
    return artistsArray;
}

ArtistList.propTypes = {
    artists: PropTypes.array.isRequired,
};

export default ArtistList;
