import { Route,} from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({savedMovies, visibleMovies, searchedMovies, handleSaveMovie, handleDeleteMovie, handleMoreMovies}) {

    const visibleSavedMovies = searchedMovies.filter(function (movie) {
        return savedMovies.some(function (savedMovie) {
            return savedMovie.movieId === movie.id;
        });
    })
    
    return (
        <div className={searchedMovies ? "moviescardlist moviescardlist_active" : "moviescardlist"}>
            <Route path="/movies">
                <div className="moviescardlist__container">

                    {visibleMovies.map((movie) => (
                        <MoviesCard
                            movie={movie}
                            handleSaveMovie={handleSaveMovie}
                            savedMovies={savedMovies}
                            handleDeleteMovie={handleDeleteMovie}
                        />
                    ))}
                </div>
                { searchedMovies.length === visibleMovies.length
                    ? <button className="moviescardlist__more moviescardlist__more_disabled" disabled></button>
                    : <button className= "moviescardlist__more" onClick={()=>{handleMoreMovies()}}>Ещё</button>
                }
            </Route>

            <Route path="/saved-movies">
                <div className="moviescardlist__container">

                    {visibleSavedMovies.map((movie) => (
                        <MoviesCard
                            movie={movie}
                            savedMovies={savedMovies}
                            handleDeleteMovie={handleDeleteMovie}
                        />
                    ))}
                </div>
                <button className="moviescardlist__more moviescardlist__more_disabled" disabled></button>
            </Route>
        </div>
    );
  }
  
  export default MoviesCardList;