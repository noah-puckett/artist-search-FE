// import React from 'react';
// import PropTypes from 'prop-types';

// function SearchBar({ searchBoxInput, onSubmit, onChange }) {
//     return (<>
//         <form name="searchBoxInput" value={searchBoxInput} onSubmit={onSubmit}>
//             <input type="text" onChange={onChange} />
//             <button>Search Artists</button>
//         </form>
//     </>
//     );
// }

// SearchBar.propTypes = {
//     searchBoxInput: PropTypes.string.isRequired,
//     onSubmit: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired
// };

// export default SearchBar;
// ------------------------------------------------------------------------
// import React, { Component } from 'react';
// import { getArtists } from '../../apiCalls/apiCalls';
// import ArtistList from '../stateless/search/ArtistList';
// import SearchBar from '../stateless/search/SearchBar';

// export default class SearchContainer extends Component {

//     state = {
//         artists: [],
//         searchBoxInput: 'a',
//         page: 1,
//         maxPages: ''
//     }

//     fetchArtists = () => {
//         getArtists(this.state.searchBoxInput, this.state.page)
//             .then(res => {
//                 console.log(res)
//                 this.setState({ artists: res.artists });
//                 this.setState({ maxPages: res.count });
//             });
//     }

//     handleIncrement = () => {
//         const { text, page } = this.state;
//         this.setState({ page: Number.parseInt(page + 1) });
//         return getArtists(text, page + 1)
//             .then(({ artists }) => {
//                 this.setState({ artists });
//             });
//     }  

//     handleDecrement = () => {
//         const { text, page } = this.state;
//         this.setState({ page: Number.parseInt(page - 1) });
//         return getArtists(text, page - 1)
//             .then(({ artists }) => {
//                 this.setState({ artists });
//             });
//     }


//     componentDidMount() {
//         this.fetchArtists();
//     }


//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.searchBoxInput !== this.state.searchBoxInput) {
//             this.fetchArtists();
//         }
//     }

//     onChange = ({ target }) => {
//         this.setState({ [target.name]: target.value });
//     }

//     render() {
//         return (
//             <>

//                 <SearchBar searchBoxInput={this.state.searchBoxInput} onChange={this.onChange} onSubmit={this.fetchArtists} />
//                 {this.state.page !== 1 && <button onClick={this.handleDecrement}>Previous Page</button>}
//                 {this.state.page !== this.state.maxPages && <button onClick={this.handleIncrement}>Next Page</button>}
//                 <ArtistList artists={this.state.artists} />
//             </>
//         );
//     }
// }
// --------------------------------------------------------------------------------------
// //this gets an array of artists
// export const getArtists = (search) => {

//     return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`, {
//     })
//         .then(res => ([res.ok, res.json()]))
//         .then(([ok, json]) => {
//             if(!ok) throw 'Unable to get artists';

//             //artists is an object with an array of artist objects
//             return json;
//         });
// };

// //this gets an array of ALBUMS
// export const getAlbums = (artistId) => {

//     return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`, {
//     })
//         .then(res => ([res.ok, res.json()]))
//         .then(([ok, json]) => {
//             if(!ok) throw 'Unable to get albums';

//             return json;
//         });
// };

// //this gets an array of SONGS
// export const getSongs = (releaseId) => {

//     return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`, {
//     })
//         .then(res => ([res.ok, res.json()]))
//         .then(([ok, json]) => {
//             if(!ok) throw 'Unable to get album songs';

//             return json;
//         });
// };

// //this gets ONE SONG'S LYRICS
// export const getLyrics = (artist, title) => {

//     return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`, {
//     })
//         .then(res => ([res.ok, res.json()]))
//         .then(([ok, json]) => {
//             if(!ok) throw 'Unable to get song lyrics';

//             return json;
//         });
// };
