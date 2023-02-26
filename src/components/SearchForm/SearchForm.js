import search from "../../images/search.svg"

function SearchForm() {
    return (
        <form className="searchform">
            <div className="searchform__search-container">
                <input type="text" className="searchform__movie-input" placeholder="Фильм" id="movie"></input>
                <input type="image" src={search} alt="Поиск" className="searchform__submit"></input>
            </div>
                <label for="shortfilm" className="searchform__shortfilm-label">
                <input type="checkbox" className="searchform__shortfilm-checkbox" id="shortfilm"></input>
                <div className="searchform__visible-shortfilm-checkbox">
                    <div className="searchform__smallthumb"></div>
                </div>
                    Короткометражки
                </label>
        </form>
    );
  }
  
  export default SearchForm;