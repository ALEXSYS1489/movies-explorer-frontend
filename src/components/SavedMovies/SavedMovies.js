import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Menu from "../Menu/Menu"

function SavedMovies({handleSearh, handleDeleteMovie, savedMovies, searchedMovies, visibleMovies,
    isSearched, searchError, searchText, shortfilm, isOpenMenu, setIsOpenMenu}) {

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

            { isSearched
            ?
                searchedMovies.length > 0 
                ?
                    <MoviesCardList
                    savedMovies={savedMovies}
                    visibleMovies={visibleMovies}
                    handleDeleteMovie={handleDeleteMovie}
                    searchedMovies={searchedMovies}
                    isSearched={isSearched}
                    />
                :
                    <h2 className="movies-preloader">{searchError ? searchError : isSearched ? "Ничего не найдено" : ""}</h2>
            :
            savedMovies.length > 0
             ? 
                <MoviesCardList
                    savedMovies={savedMovies}
                    visibleMovies={visibleMovies}
                    handleDeleteMovie={handleDeleteMovie}
                    searchedMovies={searchedMovies}
                    isSearched={isSearched}
                />
             :
                <></>
             }



            {/* {savedMovies.length > 0
             ? 
                <MoviesCardList
                    savedMovies={savedMovies}
                    visibleMovies={visibleMovies}
                    handleDeleteMovie={handleDeleteMovie}
                    searchedMovies={searchedMovies}
                    isSearched={isSearched}
                />
             :
                <h2 className="movies-preloader">{searchError ? searchError : isSearched ? "Ничего не найдено" : ""}</h2>
             } */}

             {/* { savedMovies.length > 0 && searchedMovies.length === 0 
             ? <h2 className="movies-preloader">{searchError ? searchError : isSearched ? "Ничего не найдено" : ""}</h2>
             : <></>
             } */}
        </main>
            <Footer/>
            <Menu
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
            />
        </>

    );
  }
  
  export default SavedMovies;