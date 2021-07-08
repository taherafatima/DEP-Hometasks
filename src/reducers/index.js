import movieDetails from './movieDetails';
import movieList from './movieList';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    movieDetails: movieDetails,
    movieList: movieList,
})

export default allReducers;