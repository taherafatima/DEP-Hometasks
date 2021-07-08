import moviesfetch from '../actions/fetchMoviesList';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

function SearchButton(props) {
    const dispatch =  useDispatch();

    return (
        <div>
            <Link to={`/search/${props.movieName}`}>
                <button className="search-button" onClick={() => {dispatch(moviesfetch(props.movieName, props.searchby))}}>
                SEARCH
                </button>
            </Link>

        </div>
    )
}

export default SearchButton;
