function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <div className="about-project__title-conteiner">
                <h2 className="about-project__title">О проекте</h2>
            </div>
            <div className="about-project__info-conteiner">
                <div className="about-project__info">
                    <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__info">
                    <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__timeline-container">
                <div className="about-project__timeline">
                    <p className="about-project__timeline-text">1 неделя</p>
                </div>
                <div className="about-project__timeline">
                    <p className="about-project__timeline-text">4 недели</p>
                </div>
                <p className="about-project__timeline-name">Back-end</p>
                <p className="about-project__timeline-name">Front-end</p>
            </div>
        </section>
    );
  }
  
  export default AboutProject;