import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchContainer from './stateful/SearchContainer';
import ArtistDetailContainer from './stateful/ArtistDetailContainer';
import AlbumDetailContainer from './stateful/AlbumDetailContainer';
import SongDetailContainer from './stateful/SongDetailContainer';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={SearchContainer} />
                <Route path='/:artistname/:id/albums' component={ArtistDetailContainer} /> 
                <Route path='/:artistname/:albumtitle/:id/songs' component={AlbumDetailContainer} /> 
                <Route path='/:artistname/:songtitle' component={SongDetailContainer} /> 
            </Switch>
        </Router>
    ); 
}
