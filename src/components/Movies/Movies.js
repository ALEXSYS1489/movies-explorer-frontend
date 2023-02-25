import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer"
import Menu from "../Menu/Menu"

function Movies() {
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
  
  export default Movies;