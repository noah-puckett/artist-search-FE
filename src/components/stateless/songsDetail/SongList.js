import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Song from '../songsDetail/Song';

function SongList({ songs }) {
    const songsArray = songs.map(song => {
        return (
            <li style={{ listStyleType: 'none' }} key={song.id}>
                <Link to={`/${song.title}/${song.id}/lyrics`}>
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
