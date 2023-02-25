import { Route, NavLink, } from "react-router-dom";

function Header() {
    return (
        <>
            <Route path="/movies">
                <header className="header">
                    <div className="header__navigation-container">
                        <NavLink to="/" className="header__logo"/>
                        <nav className="navigation">
                            <NavLink to="/movies" className="navigation__link navigation__link_active">Фильмы</NavLink>
                            <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
                        </nav>
                    </div>
                    <NavLink to="/profile" className="navigation__profile-button">
                        <p className="navigation__profile-button-text">Аккаунт</p>
                        <div className="navigation__profile-button-image"></div>
                    </NavLink>
                    <button className="header__menu-button"></button>
                </header>
            </Route>
            <Route path="/saved-movies">
                <header className="header">
                    <div className="header__navigation-container">
                        <NavLink to="/" className="header__logo"/>
                        <nav className="navigation">
                            <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
                            <NavLink to="/saved-movies" className="navigation__link navigation__link_active">Сохранённые фильмы</NavLink>
                        </nav>
                    </div>
                    <NavLink to="/profile" className="navigation__profile-button">
                        <p className="navigation__profile-button-text">Аккаунт</p>
                        <div className="navigation__profile-button-image"></div>
                    </NavLink>
                    <button className="header__menu-button"></button>
                </header>
            </Route>
            <Route path="/profile">
                <header className="header">
                    <div className="header__navigation-container">
                        <NavLink to="/" className="header__logo"/>
                        <nav className="navigation">
                            <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
                            <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
                        </nav>
                    </div>
                    <NavLink to="/profile" className="navigation__profile-button">
                        <p className="navigation__profile-button-text">Аккаунт</p>
                        <div className="navigation__profile-button-image"></div>
                    </NavLink>
                    <button className="header__menu-button"></button>
                </header>
            </Route>
             <Route exact path="/">
                <header className="header">
                    <NavLink to="/" className="header__logo"/>
                    <nav className="header__sign-links">
                        <NavLink to="/signup" className="header__signup">Регистрация</NavLink>
                        <NavLink to="/signin" className="header__signin">Войти</NavLink>
                    </nav>
                </header>
            </Route>
        </>
    );
  }
  
  export default Header;