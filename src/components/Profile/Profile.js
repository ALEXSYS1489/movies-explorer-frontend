import Header from "../Header/Header";
import Menu from "../Menu/Menu"

function Profile() {

// Переменные для тестирвания отображения кнопок
let apierror = 0
let edit =0

    return (
        <>
        <Header/>
        <form className="profile">
            <h1 className="profile__title">Привет, Алексей!</h1>
            <div className="profile__inputs">
                <label className="profile__label">
                    Имя
                    <input className="profile__input" type="text" placeholder="Алексей"></input>
                </label>
                <label className="profile__label">
                E-mail
                    <input className="profile__input" type="text" placeholder="pochta@yandex.ru"></input>
                </label>
            </div>
            <button type="button" className={edit ? "profile__edit-button_inactive" : "profile__edit-button"}>Редактировать</button>
            <button type="button" className={edit ? "profile__exit-button_inactive" : "profile__exit-button"}>Выйти из аккаунта</button>

            <p className={edit ? "profile__error profile__error_active" : "profile__error"}>{apierror ? "При обновлении профиля произошла ошибка" : ""}</p>
            {apierror 
                ? <button type="submit" className={edit ? "profile__submit-button profile__submit-button_active" : "profile__submit-button"} disabled>Сохранить</button> 
                : <button type="submit" className={edit ? "profile__submit-button profile__submit-button_active" : "profile__submit-button"}>Сохранить</button>
            }
        </form>
        <Menu/> 
        </>
    );
  }
  
  export default Profile;