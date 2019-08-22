import React, { Component } from 'react';
import { getSongs } from '../../apiCalls/apiCalls';
import SongList from '../stateless/songsDetail/SongList';


export default class AlbumDetailContainer extends Component {

    state = {
        // eslint-disable-next-line react/prop-types
        album: this.props.match.params.id,
        artist: this.props.match.params.artistname,
        songs: [],
    }
    
    fetchSongs = () => {
        getSongs(this.state.album)
            .then(res => {
                this.setState({ songs: res.recordings });
            });
    }
    
    componentDidMount() {
        this.fetchSongs();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.artist !== this.state.artist) {
            this.fetchReleases();
        }
    }
    
    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    render() {
        return (
            <>
            <SongList artist={this.props.match.params.artistname} songs={this.state.songs} />
            </>
        );
    }
}
