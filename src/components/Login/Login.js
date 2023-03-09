import { useState, useEffect, useCallback} from "react";
import { NavLink } from "react-router-dom";

function Login({handleAuthorizeUser, apiError, setApiError}) {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    function handleAuthorize(e){
        e.preventDefault();
        handleAuthorizeUser(values)
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
        <main className="login">
            <form className="login__form" onSubmit={handleAuthorize}>
            <NavLink to="/" className="login__logo"/>
            <h1 className="login__title">Рады видеть!</h1>
            
            <label className="login__label" for="email">E-mail</label>
            { errors.email
                ?<>
                    <input className="login__input login__input_error" id="email" type="email" required onChange={handleChange} name="email"></input>
                    <span className="login__error login__error_active">{errors.email}</span>
                </>
                :<>
                    <input className="login__input" id="email" type="email" required onChange={handleChange} name="email"></input>
                    <span className="login__error">{errors.email}</span>
                </>
            }
            
            <label className="login__label" for="password">Пароль</label>
            { errors.password
                ?<>
                    <input className="login__input login__input_error" id="password" type="password" required onChange={handleChange} name="password"></input>
                    <span className="login__error login__error_active">{errors.password}</span>
                </>
                :<>
                    <input className="login__input" id="password" type="password" required onChange={handleChange} name="password"></input>
                    <span className="login__error">{errors.password}</span>
                </>
            }

            {apiError
                ? <span className="login__api-error login__api-error_active">{ apiError === "Ошибка: Unauthorized" ? "Вы ввели неправильный логин или пароль. " : "При авторизации произошла ошибка. Токен не передан или передан не в том формате."}</span>
                : <span className="login__api-error">Что-то пошло не так...</span>
            }
            { isValid
                ? <button className="login__submit" type="submit">Войти</button>
                : <button className="login__submit" type="submit" disabled>Войти</button>
            }
            <p className="login__text">
                Ещё не зарегистрированы?
                <NavLink to="/signup" className="login__link">Регистрация</NavLink>
            </p>
            </form>
        </main>
    );
  }
  
  export default Login;

  