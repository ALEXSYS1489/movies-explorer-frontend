import photo from "../../images/photo.jpg"

function AboutMe() {
    return (
        <div className="about-me" id="about-me">
            <div className="about-me__title-container">
                <h2 className="about-me__title">Студент</h2>
            </div>
            <div className="about-me__container">
                <div className="about-me__info">
                    <h3 className="about-me__name">Алексей</h3>
                    <h4 className="about-me__age">Фронтенд-разработчик, 25 лет</h4>
                    <p className="about-me__text">Я родился и живу в Москве. Недавно начал кодить. С 2017 по 2022 год работал в компании «Такском» в техподдерже.
                        Прошёл курс по веб-разработке.</p>
                    <a className="about-me__link" href="https://github.com/ALEXSYS1489">Github</a>
                </div>
                <img className="about-me__photo" src={photo} alt="Фото"/>
            </div>
        </div>
    );
  }
  
  export default AboutMe;