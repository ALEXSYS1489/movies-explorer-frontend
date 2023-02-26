import { Route, NavLink, } from "react-router-dom";

function Menu() {
    return (
        <div className="menu menu_opened">
            <nav className="navigation navigation_opened">
            <button className="navigation__close"></button>
                <Route path="/movies">
                    <NavLink to="/" className="navigation__link">Главная</NavLink>
                    <NavLink to="/movies" className="navigation__link navigation__link_active">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
                </Route>

                <Route path="/saved-movies">
                    <NavLink to="/" className="navigation__link">Главная</NavLink>
                    <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="navigation__link navigation__link_active">Сохранённые фильмы</NavLink>
                </Route>
                
                <Route path="/profile">
                    <NavLink to="/" className="navigation__link">Главная</NavLink>
                    <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
                </Route>

                <NavLink to="/profile" className="navigation__profile-button navigation__profile-button_opened">
                        <p className="navigation__profile-button-text">Аккаунт</p>
                        <div className="navigation__profile-button-image"></div>
                    </NavLink>
            </nav>
        </div>
    );
  }
  
  export default Menu;