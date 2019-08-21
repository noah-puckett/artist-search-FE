import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Song from '../songsDetail/Song';

function SongList({ songs, artist }) {
    const songsArray = songs.map(song => {
        return (
            <li style={{ listStyleType: 'none' }} key={song.id}>
                <Link to={`/${artist}/${song.title}`}>
                    <Song title={song.title} id={song.id} />
                </Link>
            </li>
        );
    });
    return songsArray;
}

SongList.propTypes = {
    songs: PropTypes.array.isRequired,
};

export default SongList;
