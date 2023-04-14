import Header from "../Header/Header";
import NavTab  from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu"

function Main({loggedIn, isOpenMenu, setIsOpenMenu}) {
    return (
        <>
        <Header
          loggedIn={loggedIn}
          setIsOpenMenu={setIsOpenMenu}
        />
        <main>
            <NavTab/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
        <Footer/>
        <Menu
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
        />
        </>
    );
  }
  
  export default Main;