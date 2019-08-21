import React, { Component } from 'react';
import { getReleases } from '../../apiCalls/fetchArtists';
import ReleaseList from '../stateless/artistDetail/ReleaseList';

export default class ArtistDetailContainer extends Component {

    state = {
        //this is for the artist id, dunno how to ... render it correctly
        artist: '82eb8936-7bf6-4577-8320-a2639465206d',
        releases: [],
    }

    fetchReleases = () => {
        getReleases(this.state.artist)
            .then(res => {
                this.setState({ releases: res.releases });
            });
    }

    componentDidMount() {
        this.fetchReleases();
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
            <ReleaseList releases={this.state.releases} />
            </>
        );
    }
}
