import { Route } from "react-router-dom";

function MoviesCard({movie, handleSaveMovie, savedMovies, handleDeleteMovie}) {

    const savedMovie = savedMovies.find(function (savedMovie) {
        return savedMovie.movieId === movie.id}
    );

    return (
        <div className="moviescard">
            <div className="moviescard__container">
                <h1 className="moviescard__name">{movie.nameRU}</h1>
                <p className="moviescard__timing">{movie.duration} минут</p>
            </div>
            <Route path="/movies">
                <a className="moviescard__link" href={movie.trailerLink} target="_blank">
                    <img className="moviescard__poster" src={`https://api.nomoreparties.co/${movie.image.url}`} alt="Постер"/>
                </a>
                {savedMovie
                    ? <button className= "moviescard__save-button moviescard__save-button_saved" onClick={()=>{handleDeleteMovie(savedMovie)}}>Сохранить</button>
                    : <button className= "moviescard__save-button" onClick={()=>{handleSaveMovie(movie)}}>Сохранить</button>
                }
            </Route>
            <Route path="/saved-movies">                    
                <a className="moviescard__link" href={movie.trailerLink} target="_blank">
                    <img className="moviescard__poster" src={`https://api.nomoreparties.co/${movie.image.url}`} alt="Постер"/>
                </a> 
                <button className="moviescard__save-button moviescard__save-button_type_delete" onClick={()=>{handleDeleteMovie(savedMovie)}}></button>
            </Route>
        </div>
    );
  }
  
  export default MoviesCard;