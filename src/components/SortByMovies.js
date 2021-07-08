import {useDispatch} from 'react-redux';
import sortbyRating from '../actions/sortbyRating';
import sortbyReleasedate from '../actions/sortbyReleaseDate';
import {useSelector} from 'react-redux';


function SortByMovies(props) {
  const dispatch =  useDispatch();
  const movieList =  useSelector(state => state.movieList);
  const sortbyrating = props.currentState.sortbyrating;
  console.log("Sort by rating "+ sortbyrating);
  const sortbyreleaseDate = props.currentState.sortbyreleaseDate;

    return (
      <div className="sortby-movies">
        <div className="display-sortby">SORT BY</div>
        <div className="sortby-buttons">
          <button className={`${sortbyreleaseDate ? "primary-button" : "secondary-button"}`}  onClick={(event) => {props.clickHandler(event);dispatch(sortbyReleasedate(movieList))}} value="release-date">RELEASE DATE</button>
          <button className={`${sortbyrating ? "primary-button" : "secondary-button"}`}  onClick={(event) => { props.clickHandler(event); dispatch(sortbyRating(movieList))}} value="rating">RATING</button>
        </div>
      </div>
    );
  }


export default SortByMovies
