import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import { Link } from 'react-router-dom';
import image from './photo-unavailable.png';

function AlbumList({ albums, artist }) {
    // console.log(albums)
    const albumsArray = albums.map(album => {
        const coverArt = album['cover-art-archive'].count ? `http://coverartarchive.org/release/${album.id}/front` : image; 
        return (
            <li style={{ listStyleType: 'none' }} key={album.id}>
                <Link to={`/${artist}/${album.title}/${album.id}/songs`}>
                    <Album title={album.title} />
                    <img style={{ height: 300 }} src={coverArt} />
                </Link>
            </li>
        );
    });
    return albumsArray;
}

AlbumList.propTypes = {
    albums: PropTypes.array.isRequired,
};

export default AlbumList;
