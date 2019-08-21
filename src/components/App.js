import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchContainer from './stateful/SearchContainer';
import ReleaseList from './stateless/artistDetail/ReleaseList';
import ArtistDetailContainer from './stateful/ArtistDetailContainer';

//IF YOU'RE GONNA TRY TO MATCH JUST A '/', YOU NEED IT TO BE EXACT OTHERWISE IT'LL RENDER / AND /ABOUT OR WHATEVER
//IF YOU WANT TO RENDER A HEADER OR LIKE, PERMANENT SITE THING, RENDER IT INSIDE THE ROUTER BUT WITHOUT A PATH
//<Header /> <Router> </Router>

//Use switch to keep components rendering only when they are specifically placed in the url bar...sorta? Read docs

//import { Link } from react router dom (in like an li containing folder), instead of a tags. <Link to="PATHNAME like /about"

//history.push('/') <-- history is an array of places you've gone, use instead of window.location. 
//any component that was rendered by react router has access to history { match, history, location } props I think???
//{ match, history, location } location gives us access to a search key which is how we get query params instead of URLSearchParams

//4 stateful containers that will be responsible for fetching from the apis

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={SearchContainer} />
                <Route path='/:artistname/:id/releases' component={ArtistDetailContainer} /> 

            </Switch>
        </Router>
    ); 
}
  
