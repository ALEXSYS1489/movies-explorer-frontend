import link from "../../images/link-arrow.svg"

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>    
            <div className="portfolio__link-block">
                <h3 className="portfolio__link-name">Статичный сайт</h3>
                <a className="portfolio__link" alt="Ссылка на статичный сайт" href="https://github.com/ALEXSYS1489"/>
                {/* <img className="portfolio__link" src={link} alt="Ссылка на статичный сайт"/> */}
            </div>
            <div className="portfolio__link-block">
                <h3 className="portfolio__link-name">Адаптивный сайт</h3>
                <a className="portfolio__link" alt="Ссылка на адаптивный сайт" href="https://github.com/ALEXSYS1489"/>
                {/* <img className="portfolio__link" src={link} alt="Ссылка на адаптивный сайт"/> */}
            </div>
            <div className="portfolio__link-block">
                <h3 className="portfolio__link-name">Одностраничное приложение</h3>
                <a className="portfolio__link" alt="Ссылка на одностраничное приложение" href="https://github.com/ALEXSYS1489"/>
                {/* <img className="portfolio__link" src={link} alt="Ссылка на одностраничное приложение"/> */}
            </div>
        </div>
    );
  }
  
  export default Portfolio;