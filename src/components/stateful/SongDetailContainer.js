import React, { Component } from 'react';
import { getLyrics } from '../../apiCalls/apiCalls';
import Lyrics from '../stateless/songsDetail/Lyrics';

export default class SongDetailContainer extends Component {

    state = {
        //release is old-person speech for "album"
        songTitle: this.props.match.params.songtitle,
        songArtist: this.props.match.params.artistname,
        lyrics: '',
    }

    fetchLyrics = () => {
        getLyrics(this.state.songArtist, this.state.songTitle)
            .then(res => {
                this.setState({ lyrics: res.lyrics });
            });
    }

    componentDidMount() {
        this.fetchLyrics();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.artist !== this.state.artist) {
            this.fetchLyrics();
        }
    }

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    render() {
        return (
            <>
            <Lyrics 
                artist={this.state.songArtist} 
                title={this.state.songTitle}
                lyrics={this.state.lyrics} />
            </>
        );
    }
}
