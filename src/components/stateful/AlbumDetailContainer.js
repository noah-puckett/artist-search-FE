import React, { Component } from 'react';
import { getSongs } from '../../apiCalls/apiCalls';
import SongList from '../stateless/songsDetail/SongList';
import PropTypes from 'prop-types';


export default class AlbumDetailContainer extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    state = {
        songs: [],
    }
    
    fetchSongs = () => {
        getSongs(this.props.match.params.id)
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
        // console.log(this.props.match.params)
        return (
            <>
            <SongList artist={this.props.match.params.artistname} songs={this.state.songs} />
            </>
        );
    }
}
