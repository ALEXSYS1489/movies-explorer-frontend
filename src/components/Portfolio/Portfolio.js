import link from "../../images/link-arrow.svg"

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>    
            <div className="portfolio__link-block">
                <h3 className="portfolio__link-name">Статичный сайт</h3>
                <a className="portfolio__link" alt="Ссылка на статичный сайт" href="https://github.com/ALEXSYS1489" target="_blank"/>
            </div>
            <div className="portfolio__link-block">
                <h3 className="portfolio__link-name">Адаптивный сайт</h3>
                <a className="portfolio__link" alt="Ссылка на адаптивный сайт" href="https://github.com/ALEXSYS1489" target="_blank"/>
            </div>
            <div className="portfolio__link-block">
                <h3 className="portfolio__link-name">Одностраничное приложение</h3>
                <a className="portfolio__link" alt="Ссылка на одностраничное приложение" href="https://github.com/ALEXSYS1489" target="_blank"/>
            </div>
        </section>
    );
  }
  
  export default Portfolio;