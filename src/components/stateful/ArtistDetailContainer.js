import React, { Component } from 'react';
import { getAlbums } from '../../apiCalls/apiCalls';
import AlbumList from '../stateless/artistDetail/AlbumList';

export default class ArtistDetailContainer extends Component {
    
    state = {
        // eslint-disable-next-line react/prop-types
        artist: this.props.match.params.id,
        albums: [],
    }
    
    fetchAlbums = () => {
        getAlbums(this.state.artist)
            .then(res => {
                this.setState({ albums: res.releases });
            });
    }  
    
    componentDidMount() {
        this.fetchAlbums();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.artist !== this.state.artist) {
            this.fetchAlbums();
        }
    }

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }
    
    render() {
        return (
            <>
            <AlbumList artist={this.state.artist} albums={this.state.albums} />
            </>
        );
    }
}
