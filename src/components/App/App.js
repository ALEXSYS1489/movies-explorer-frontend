import { useState, useEffect, useCallback } from "react";
import { Route, Switch, Redirect, useHistory} from "react-router-dom";
import { mainApi } from "../../utils/MainApi"
import { moviesApi } from "../../utils/MoviesApi"
import * as Auth from "../../utils/Auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { search, vizualizate, vizualizateMore } from "../../utils/Search";
import ProtectedRoute from "../ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isEditedUser, setIsEditedUser] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isEditSuccessful , setIsEditSuccessful] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [apiError, setApiError] = useState('');
  const [searchError, setSearchError] = useState('');
  const [searchText, setSearchText] = useState('');
  const [shortfilm, setShortfilm] = useState(false);

  const history = useHistory();

  function handleSearh(searchText, shortfilm) {
    setIsLoading(true)
    moviesApi
      .getMovies()
      .then((data) => {
        localStorage.setItem("movies", JSON.stringify(data));
        localStorage.setItem("searchText", searchText);
        localStorage.setItem("shortfilm", JSON.stringify(shortfilm)); 
        setSearchedMovies(search(data, searchText, shortfilm))
        setVisibleMovies(vizualizate(search(data, searchText, shortfilm)))
        setIsSearched(true)
        setSearchError('')
      })
      .catch((err) => {
        console.log("Ошибка сервера", err);
        setSearchError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз")
      })
      .finally(() => {
        setIsLoading(false)
      });
  }

  function handleMoreMovies (){
    setVisibleMovies(vizualizateMore(searchedMovies, visibleMovies))
  }

  function handleSaveMovie (movie) {
    setIsLoading(true)
    console.log(savedMovies);
    mainApi
      .saveMovie(movie) 
      .then((newMovie) => {
          setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log("Ошибка сервера", err);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies(() =>
        savedMovies.filter((m) => {
            return m._id !== movie._id;
          })
        );
      })
      .catch((err) => {
        console.log("Ошибка сервера", err);
      });
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    mainApi
      .editUser(data.name, data.email)
      .then((data) => {
        setCurrentUser(data);
        setIsEditedUser(false)
        setApiError('')
        setIsEditSuccessful(true)
      })
      .catch((err) => {
        console.log("Ошибка сервера", err);
        setApiError(err)
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegisterUser(userData) {
    Auth.register(userData.name, userData.email, userData.password)
      .then(() => {
        handleAuthorizeUser(userData)
        setApiError('')
      })
      .catch((err) => {
        console.log("Ошибка сервера", err);
        setApiError(err)
      });
  }

  function handleAuthorizeUser(userData) {
    Auth.authorize(userData.email, userData.password,)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          history.push("/movies");
          setApiError('')
        }
      })
      .catch((err) => {
        console.log("Ошибка сервера", err);
        setApiError(err)
      });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/");
  }

  const checkToken = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("no token");
      }
      const user = await Auth.checkToken();
      if (!user) {
        throw new Error("invalid user");
      }
      if (user) {
        setLoggedIn(true);
        setCurrentUser(user);
        history.push("/");
      }
    } catch (err) {
      console.log("Ошибка сервера", err);
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUser()
        .then((data) => {
          setCurrentUser(data);
          mainApi.getSavedMovies()
            .then((movies)=>{
              setSavedMovies(movies)
            })
        })
        .catch((err) => {
          console.log("Ошибка сервера", err);
        });

      const movies = localStorage.getItem("movies");
      const searchText = localStorage.getItem("searchText");
      const shortfilm = localStorage.getItem("shortfilm"); 
      if (movies) {
        setSearchedMovies(search(JSON.parse(movies), searchText, JSON.parse(shortfilm)))
        setVisibleMovies(vizualizate(search(JSON.parse(movies), searchText, JSON.parse(shortfilm))))
        setSearchText(searchText)
        setShortfilm(JSON.parse(shortfilm)) 
        setIsSearched(true)
      }
    }

  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>

        <Route exact path="/">
          <Main
            loggedIn={loggedIn}
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
        </Route>

        <ProtectedRoute
          path="/movies"
          isSearched={isSearched}
          loggedIn={loggedIn}
          savedMovies={savedMovies}
          visibleMovies={visibleMovies}
          searchedMovies={searchedMovies}
          searchError={searchError}
          searchText={searchText}
          shortfilm={shortfilm}
          component={Movies}
          handleSearh={handleSearh}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
          handleMoreMovies={handleMoreMovies}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
        />

        <ProtectedRoute
          exact
          path="/saved-movies"
          isSearched={isSearched}
          loggedIn={loggedIn}
          savedMovies={savedMovies}
          visibleMovies={visibleMovies}
          searchedMovies={searchedMovies}
          searchError={searchError}
          searchText={searchText}
          shortfilm={shortfilm}
          component={SavedMovies}
          handleSearh={handleSearh}
          handleDeleteMovie={handleDeleteMovie}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
        />

        <ProtectedRoute
          exact
          path="/profile"
          loggedIn={loggedIn}
          currentUser={currentUser}
          isEditedUser={isEditedUser}
          apiError={apiError}
          component={Profile}
          handleLogout={handleLogout}
          handleUpdateUser={handleUpdateUser}
          setIsEditedUser={setIsEditedUser}
          setApiError={setApiError}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
          isEditSuccessful={isEditSuccessful}
          setIsEditSuccessful={setIsEditSuccessful}
        />
      
        <Route path="/signin">
          <Login
            handleAuthorizeUser={handleAuthorizeUser}
            apiError={apiError}
            setApiError={setApiError}
          />
        </Route>

        <Route path="/signup">
          <Register
            handleRegisterUser={handleRegisterUser}
            apiError={apiError}
            setApiError={setApiError}
          />
        </Route>

        <Route path="*">
          <PageNotFound/>
        </Route>

        </Switch>
        
        <Preloader
          isLoading = {isLoading}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
