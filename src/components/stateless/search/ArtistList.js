import React from 'react';
import PropTypes from 'prop-types';
import Artist from '../search/Artist';
import { Link } from 'react-router-dom';

//make these links! When you click on the link you use? send? the artist.id to match the... hrm the release list? I dunno fam 

function ArtistList({ artists }) {
    const artistsArray = artists.map(artist => {
        return (
            <li style={{ listStyleType: 'none' }} key={artist.id}>
                <Link to={`/${artist.name}/${artist.id}/releases`}>
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
