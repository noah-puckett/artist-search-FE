import React, { Component } from 'react';
import { getAlbums } from '../../apiCalls/apiCalls';
import AlbumList from '../stateless/artistDetail/AlbumList';
import PropTypes from 'prop-types';

export default class ArtistDetailContainer extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired
    }
    
    state = {
        albums: [],
        maxPages: '',
        page: 1
    }
    
    fetchAlbums = () => {
        getAlbums(this.props.match.params.id, this.state.page)
            .then(res => {
                this.setState({ albums: res.releases });
                this.setState({ maxPages: Math.ceil(res.count / 10) });
            });
    }  
    
    componentDidMount() {
        this.fetchAlbums();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.artistname !== this.props.match.params.artistname || prevState.page !== this.state.page) {
            this.fetchAlbums();
        }
    }

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    handleIncrement = () => {
        const { artist, page } = this.state;
        this.setState({ page: Number.parseInt(page + 1) });

        return getAlbums(artist, page + 1)
            .then(res => {
                this.setState({ albums: res.releases });
            });
    }  

    handleDecrement = () => {
        const { artist, page } = this.state;
        this.setState({ page: Number.parseInt(page - 1) });
        
        return getAlbums(artist, page - 1)
            .then(res => {
                this.setState({ albums: res.releases });
            });
    }
    
    render() {
        // console.log(this.props.match.params.artistname)
        return (
            <>
            {this.state.page !== 1 && <button onClick={this.handleDecrement}>Previous Page</button>}
            {this.state.page !== this.state.maxPages && <button onClick={this.handleIncrement}>Next Page</button>}
            <AlbumList artist={this.props.match.params.artistname} albums={this.state.albums} />
            </>
        );
    }
}
