import React, { Component } from 'react';
import { getLyrics } from '../../apiCalls/apiCalls';
import Lyrics from '../stateless/songsDetail/Lyrics';

export default class SongDetailContainer extends Component {

    state = {
        //release is old-person speech for "album"
        songTitle: this.props.match.params.id,
        // songArtist:
        lyrics: '',
    }

    fetchLyrics = () => {
        getLyrics(this.state.artist)
            .then(res => {
                this.setState({ lyrics: res });
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
            <Lyrics lyrics={this.state.lyrics} />
            </>
        );
    }
}
