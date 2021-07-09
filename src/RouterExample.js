import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DefaultBottom from './components/DefaultBottom';
import DefaultMiddle from './components/DefaultMiddle';
import FilmbyGenre from './components/FilmbyGenre';
import FooterComponent from './components/FooterComponent';
import MovieListHeader from './components/MovieListHeader';
import Movies from './components/Movies';
import SearchComponent from './components/SearchComponent';
import SortbyComponent from './components/SortbyComponent';
import './style.css';


function RouterExample() {
    return (
        <Router>
            <div>
                <Route path={["/","/search/:movieName"]} exact component={SearchComponent} />
                <Route path="/" exact component={DefaultMiddle} />
                <Route path="/" exact component={DefaultBottom} />
                <Route path="/film/:id" component={MovieListHeader} />
                <Route path="/search/:movieName" component={SortbyComponent} />
                <Route path="/film/:id" component={FilmbyGenre} />
                <Route path="/film/:id" component={Movies} />
                <Route path="/search/:movieName" component={Movies} />
                <Route path="/" component={FooterComponent} />
                
            </div>
        </Router>

    )
}

export default RouterExample;