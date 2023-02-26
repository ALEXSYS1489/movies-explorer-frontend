import Header from "../Header/Header";
import NavTab  from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../Footer/Footer";

function Main() {
    return (
        <>
        <Header/>
        <main>
            <NavTab/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
        <Footer/>
        </>
    );
  }
  
  export default Main;