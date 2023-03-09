import { useState, useEffect, useCallback} from "react";
import { NavLink } from "react-router-dom";


function Register({handleRegisterUser, apiError, setApiError}) {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    function handleRegister(e){
        e.preventDefault();
        handleRegisterUser(values)
    }

    function handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.parentElement.checkValidity());
    };

    const resetErrors = useCallback(() => {
        setApiError('')
      }, []);
    
    useEffect(() => {
        resetErrors()
      }, [resetErrors]);

    return (
        <main className="register">
            <form className="register__form" onSubmit={handleRegister} noValidate>
            <NavLink to="/" className="register__logo"/>
            <h1 className="register__title">Добро пожаловать!</h1>

            <label className="register__label" for="name">Имя</label>
            { errors.name
                ?<>
                    <input className="register__input register__input_error" id="name" type="text" required onChange={handleChange} name="name" pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+"></input>
                    <span className="register__error register__error_active">{errors.name === "Введите данные в указанном формате." ? "Используйте только латиницу, кириллицу, пробел или дефис.": errors.name}</span>
                </>
                :<>
                    <input className="register__input" id="name" type="text" required onChange={handleChange} name="name" pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+"></input>
                    <span className="register__error">{errors.name}</span>
                </>
            }

            <label className="register__label" for="email">E-mail</label>
            { errors.email
                ?<>
                    <input className="register__input register__input_error" id="email" type="email" required onChange={handleChange} name="email"></input>
                    <span className="register__error register__error_active">{errors.email}</span>
                </>
                :<>
                    <input className="register__input" id="email" type="email" required onChange={handleChange} name="email"></input>
                    <span className="register__error">{errors.email}</span>
                </>
            }

            <label className="register__label" for="password">Пароль</label>
            { errors.password
                ?<>
                    <input className="register__input register__input_error" id="password" type="password" required onChange={handleChange} name="password"></input>
                    <span className="register__error register__error_active">{errors.password}</span>
                </>
                :<>
                    <input className="register__input" id="password" type="password" required onChange={handleChange} name="password"></input>
                    <span className="register__error">{errors.password}</span>
                </>
            }
            
            {apiError
                ? <span className="register__api-error register__api-error_active">{apiError === "Ошибка: Conflict" ? "Пользователь с таким email уже существует." : "При регистрации пользователя произошла ошибка."}</span>
                : <span className="register__api-error">Что-то пошло не так...</span>
            }
            { isValid
                ? <button className="register__submit" type="submit">Зарегистрироваться</button>
                : <button className="register__submit" type="submit" disabled>Зарегистрироваться</button>
            }
            <p className="register__text">
                Уже зарегистрированы?
                <NavLink to="/signin" className="register__link">Войти</NavLink>
            </p>
            </form>
        </main>
    );
  }
  
  export default Register;