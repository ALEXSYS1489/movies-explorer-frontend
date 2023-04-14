import { useState } from "react";
import search from "../../images/search.svg"
import { Route,} from "react-router-dom";

function SearchForm({handleSearh, searchText, shortfilm}) {

    const [searchInputText, setSearchInputText] = useState(searchText);
    const [shortfilmInput, setShortfilmInput] = useState(shortfilm);
    const [isError, setIsError] = useState(false);

    function  handleSearchMovie(e){
        e.preventDefault();
        setIsError(false)
        e.target.checkValidity()
            ? handleSearh(searchInputText, shortfilmInput)
            : setIsError(true)
    }

    function handleChangeMovie(e) {
        setSearchInputText(e.target.value);
    }

    function handleChangeShortfilm(e) {
        setShortfilmInput(e.target.checked);
    }

    return (
    <>
        <Route path="/movies">
        <form className="searchform" onSubmit={handleSearchMovie} noValidate>
            <div className="searchform__search-container">
                <input type="text" className="searchform__movie-input" placeholder="Фильм" id="movie" onChange={handleChangeMovie} required value={searchInputText} name="searchText"></input>
                <input type="image" src={search} alt="Поиск" className="searchform__submit"></input>
                {isError 
                ? <span className="searchform__error">Нужно ввести ключевое слово</span>
                : <></>
            }
            </div>
            <label for="shortfilm" className="searchform__shortfilm-label">
                <input type="checkbox" className="searchform__shortfilm-checkbox" id="shortfilm" onChange={handleChangeShortfilm} checked={shortfilmInput} name="shortfilm"></input>
                <div className="searchform__visible-shortfilm-checkbox">
                    <div className="searchform__smallthumb"></div>
                </div>
                Короткометражки
            </label>
        </form>
        </Route>

        <Route path="/saved-movies">
            <form className="searchform" onSubmit={handleSearchMovie} noValidate>
                <div className="searchform__search-container">
                    <input type="text" className="searchform__movie-input" placeholder="Фильм" id="movie" onChange={handleChangeMovie} required name="searchText"></input>
                    <input type="image" src={search} alt="Поиск" className="searchform__submit"></input>
                    {isError 
                    ? <span className="searchform__error">Нужно ввести ключевое слово</span>
                    : <></>
                }
                </div>
                <label for="shortfilm" className="searchform__shortfilm-label">
                    <input type="checkbox" className="searchform__shortfilm-checkbox" id="shortfilm" onChange={handleChangeShortfilm} name="shortfilm"></input>
                    <div className="searchform__visible-shortfilm-checkbox">
                        <div className="searchform__smallthumb"></div>
                    </div>
                    Короткометражки
                </label>
            </form>
        </Route>
    </>
    );
  }
  
  export default SearchForm;