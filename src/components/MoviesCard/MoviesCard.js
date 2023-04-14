import { Route,} from "react-router-dom";
import poster from "../../images/poster.jpg"

function MoviesCard(props) {
    return (
        <div className="moviescard">
            <div className="moviescard__container">
                <h1 className="moviescard__name">В погоне за Бенкси</h1>
                <p className="moviescard__timing">27 минут</p>
            </div>
            <img className="moviescard__poster" src={poster} alt="Постер"/>
            <Route path="/movies">
                <button className={props.class}>Сохранить</button>
            </Route>
            <Route path="/saved-movies">
                <button className="moviescard__save-button moviescard__save-button_type_delete"></button>
            </Route>
        </div>
    );
  }
  
  export default MoviesCard;