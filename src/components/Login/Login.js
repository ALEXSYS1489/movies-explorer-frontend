import { NavLink } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <form className="login__form">
            <NavLink to="/" className="login__logo"/>
            <h1 className="login__title">Рады видеть!</h1>
            <label className="login__label" for="email">E-mail</label>
            <input className="login__input" id="email" type="email"></input>
            <label className="login__label" for="password">Пароль</label>
            <input className="login__input" id="password" type="password"></input>
            <button className="login__submit" type="submit">Войти</button>
            <p className="login__text">
                Ещё не зарегистрированы?
                <NavLink to="/signup" className="login__link">Регистрация</NavLink>
            </p>
            </form>
        </div>
    );
  }
  
  export default Login;

  