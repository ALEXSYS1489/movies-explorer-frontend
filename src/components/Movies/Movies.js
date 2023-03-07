import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer"
import Menu from "../Menu/Menu"

function Movies({handleSearh, handleSaveMovie, handleDeleteMovie, savedMovies, visibleMovies, searchedMovies, isSearched, searchError, handleMoreMovies, searchText, shortfilm, isOpenMenu, setIsOpenMenu}) {

    return (
        <>
        <Header
            setIsOpenMenu={setIsOpenMenu}
        />
        <main>
            <SearchForm
                handleSearh={handleSearh}
                searchText={searchText}
                shortfilm={shortfilm}
            />

            {searchedMovies.length > 0 
             ? 
                <MoviesCardList
                    savedMovies={savedMovies}
                    visibleMovies={visibleMovies}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    searchedMovies={searchedMovies}
                    handleMoreMovies={handleMoreMovies}
                />
             :
                <h2 className="movies-preloader">{searchError ? searchError : isSearched ? "Ничего не найдено" : ""}</h2>
             }
        </main>
        <Footer/>
        <Menu
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
        />
        </>
    );
  }
  
  export default Movies;