import React, { Component } from 'react';
import { getArtists } from '../../apiCalls/apiCalls';
import ArtistList from '../stateless/search/ArtistList';
import SearchBar from '../stateless/search/SearchBar';

export default class SearchContainer extends Component {

    state = {
        artists: [],
        searchBoxInput: 'a',
        maxPages: '',
        page: 1
    }

    fetchArtists = () => {
        getArtists(this.state.searchBoxInput, this.state.page)
            .then(res => {
                // console.log(res)
                this.setState({ artists: res.artists });
                this.setState({ maxPages: Math.ceil(res.count / 10) });
            });
    }

    componentDidMount() {
        this.fetchArtists();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.searchBoxInput !== this.state.searchBoxInput || prevState.page !== this.state.page) {
            this.fetchArtists();
        }
    }

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }
    
    handleIncrement = () => {
        const { searchBoxInput, page } = this.state;
        this.setState({ page: Number.parseInt(page + 1) });

        return getArtists(searchBoxInput, page + 1)
            .then(res => {
                this.setState({ artists: res.artists });
            });
    }  

    handleDecrement = () => {
        const { searchBoxInput, page } = this.state;
        this.setState({ page: Number.parseInt(page - 1) });
        
        return getArtists(searchBoxInput, page - 1)
            .then(res => {
                this.setState({ artists: res.artists });
            });
    }

    render() {
        return (
            <>
                <SearchBar searchBoxInput={this.state.searchBoxInput} onChange={this.onChange} />
                {this.state.page !== 1 && <button onClick={this.handleDecrement}>Previous Page</button>}
                {this.state.page !== this.state.maxPages && <button onClick={this.handleIncrement}>Next Page</button>}
                <ArtistList artists={this.state.artists} />
            </>
        );
    }
}
