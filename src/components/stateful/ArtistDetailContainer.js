import React, { Component } from 'react';
import { getReleases } from '../../apiCalls/fetchArtists';
import ReleaseList from '../stateless/artistDetail/ReleaseList';


export default class ArtistDetailContainer extends Component {

    state = {
        //this is for the artist id, dunno how to ... render it correctly
        artist: this.props.match.params.id,
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
