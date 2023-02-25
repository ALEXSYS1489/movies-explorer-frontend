import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Menu from "../Menu/Menu"

function SavedMovies() {
    return (
        <>
            <Header/>
            <SearchForm/>
            <MoviesCardList/>
            <Footer/>
            <Menu/>
        </>

    );
  }
  
  export default SavedMovies;