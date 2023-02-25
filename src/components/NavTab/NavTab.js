function NavTab() {
    return (
        <div className="navtab">
            <h1 className="navtab__title">Учебный проект студента факультета Веб-разработки.</h1>
            <nav className="navtab__links">
                <a href="#aboutProject" className="navtab__link">О проекте</a>
                <a href="#techs" className="navtab__link">Технологии</a>
                <a href="#about-me" className="navtab__link">Студент</a>
            </nav>
        </div>
    );
  }
  
  export default NavTab;