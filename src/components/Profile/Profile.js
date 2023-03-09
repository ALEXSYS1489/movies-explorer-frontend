import { useState, useEffect, useCallback} from "react";

import Header from "../Header/Header";
import Menu from "../Menu/Menu"

function Profile({handleLogout, currentUser, isEditedUser, apiError, setIsEditedUser, handleUpdateUser, setApiError, isOpenMenu, setIsOpenMenu, isEditSuccessful, setIsEditSuccessful}) {

    const [values, setValues] = useState({name: currentUser.name, email: currentUser.email});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [newData, setNewData] = useState(false);

    function handleUpdate(e){
        e.preventDefault();
        handleUpdateUser(values)
    }

    function handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.parentElement.parentElement.parentElement.checkValidity());
        setNewData( name === "name" 
        ? target.value === currentUser.name && values.email === currentUser.email
        : target.value === currentUser.email && values.name === currentUser.name)
    };

    const resetErrors = useCallback(() => {
        setApiError('')
        setIsEditedUser(false)
        setIsEditSuccessful(false)
      }, []);
    
    useEffect(() => {
        resetErrors()
      }, [resetErrors]);

    return (
        <>
        <Header
            setIsOpenMenu={setIsOpenMenu}
        />
        <main>
            <form className="profile" onSubmit={handleUpdate}>
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <div className="profile__inputs">
                    <label className="profile__label">
                        Имя
                        {isEditedUser
                            ? <>
                            <input className="profile__input" type="text" value={values.name} placeholder="Имя" onChange={handleChange} required name="name" pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+"></input>
                            </>
                            : <>
                            <input className="profile__input" type="text" value={values.name} placeholder="Имя" onChange={handleChange} disabled name="name" pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+"></input>
                            </>
                        }
                    </label>

                        { errors.name
                            ?<>
                                <span className="profile__error profile__error_active">{errors.name === "Введите данные в указанном формате." ? "Используйте только латиницу, кириллицу, пробел или дефис.": errors.name}</span>
                            </>
                            :<>
                                <span className="profile__error">{errors.name}</span>
                            </>                            
                        }

                    <label className="profile__label">
                    E-mail
                        {isEditedUser
                            ? <input className="profile__input" type="email" value={values.email} placeholder="E-mail" onChange={handleChange} required name="email"></input>
                            : <input className="profile__input" type="email" value={values.email} placeholder="E-mail" onChange={handleChange} disabled name="email"></input>
                        }
                    </label>

                    { errors.email
                            ?<>
                                <span className="register__error register__error_active">{errors.email}</span>
                            </>
                            :<>
                                <span className="register__error">{errors.email}</span>
                            </>                            
                        }


                </div>
                <button type="button" onClick={()=>{setIsEditedUser(true); setIsEditSuccessful(false)}} className={isEditedUser ? "profile__edit-button_inactive" : "profile__edit-button"}>Редактировать</button>
                <button type="button" onClick={()=>{handleLogout()}} className={isEditedUser ? "profile__exit-button_inactive" : "profile__exit-button"}>Выйти из аккаунта</button>

                <span className={isEditSuccessful ? "profile__success profile__success_active" : "profile__success"}>Данные изменены</span>
                <span className={isEditedUser ? "profile__api-error profile__api-error_active" : "profile__api-error"}>{ !apiError ? "" : !apiError.res ? "При обновлении профиля произошла ошибка." : "Пользователь с таким email уже существует."}</span>
                {!isValid || newData
                    ? <button type="submit" className={isEditedUser ? "profile__submit-button profile__submit-button_active" : "profile__submit-button"} disabled>Сохранить</button> 
                    : <button type="submit" className={isEditedUser ? "profile__submit-button profile__submit-button_active" : "profile__submit-button"}>Сохранить</button>
                }
            </form>
        </main>
        <Menu
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
        /> 
        </>
    );
  }
  
  export default Profile;