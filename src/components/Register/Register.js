import { NavLink } from "react-router-dom";

function Register() {
    return (
        <div className="register">
            <form className="register__form">
            <NavLink to="/" className="register__logo"/>
            <h1 className="register__title">Добро пожаловать!</h1>
            <label className="register__label" for="name">Имя</label>
            <input className="register__input" id="name" type="text"></input>
            <label className="register__label" for="email">E-mail</label>
            <input className="register__input" id="email" type="email"></input>
            <label className="register__label" for="password">Пароль</label>
            <input className="register__input register__input_error" id="password" type="password"></input>
            <p className="register__error register__error_active">Что-то пошло не так...</p>
            <button className="register__submit" type="submit">Зарегистрироваться</button>
            <p className="register__text">
                Уже зарегистрированы?
                <NavLink to="/signin" className="register__link">Войти</NavLink>
            </p>
            </form>
        </div>
    );
  }
  
  export default Register;