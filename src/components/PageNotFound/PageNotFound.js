import { NavLink } from "react-router-dom";

function PageNotFound() {
    return (
        <main className="pagenotfound">
            <h1 className="pagenotfound__title">404</h1>
            <p className="pagenotfound__text">Страница не найдена</p>
            <NavLink to="/" className="pagenotfound__link">Назад</NavLink>
        </main>
    );
  }
  
  export default PageNotFound;