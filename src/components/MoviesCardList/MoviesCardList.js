import { Route,} from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <div className="moviescardlist">
            <Route path="/movies">
                <div className="moviescardlist__container">
                    <MoviesCard class="moviescard__save-button moviescard__save-button_saved"/>
                    <MoviesCard class="moviescard__save-button moviescard__save-button_saved"/>
                    <MoviesCard class="moviescard__save-button"/>
                    <MoviesCard class="moviescard__save-button"/>
                    <MoviesCard class="moviescard__save-button"/>
                    <MoviesCard class="moviescard__save-button moviescard__save-button_saved"/>
                    <MoviesCard class="moviescard__save-button moviescard__save-button_saved"/>
                    <MoviesCard class="moviescard__save-button"/>
                    <MoviesCard class="moviescard__save-button"/>
                    <MoviesCard class="moviescard__save-button"/>
                    <MoviesCard class="moviescard__save-button moviescard__save-button_saved"/>
                    <MoviesCard class="moviescard__save-button"/>
                </div>
                <button className="moviescardlist__more">Ещё</button>
            </Route>
            <Route path="/saved-movies">
                <div className="moviescardlist__container">
                    <MoviesCard class="moviescard__save-button"/>
                    <MoviesCard class="moviescard__save-button"/>
                    <MoviesCard class="moviescard__save-button"/>
                </div>
                <button className="moviescardlist__more moviescardlist__more_disabled" disabled></button>
            </Route>
        </div>
    );
  }
  
  export default MoviesCardList;