import React, { Component } from 'react';
import { getArtists } from '../../apiCalls/fetchArtists';
import ArtistList from '../stateless/search/ArtistList';
import SearchBar from '../stateless/search/SearchBar';

export default class SearchContainer extends Component {

    state = {
        artists: [],
        searchBoxInput: 'a',
    }

    fetchArtists = () => {
        getArtists(this.state.searchBoxInput)
            .then(res => {
                this.setState({ artists: res.artists });
            });
    }

    componentDidMount() {
        this.fetchArtists();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.searchBoxInput !== this.state.searchBoxInput) {
            this.fetchArtists();
        }
    }

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    render() {
        return (
            <>
                <SearchBar searchBoxInput={this.state.searchBoxInput} onChange={this.onChange} />
                <ArtistList artists={this.state.artists} />
            </>
        );
    }
}
