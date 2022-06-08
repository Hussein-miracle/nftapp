
import { MenuContextProvider } from './contexts/menu-context';

import './App.css';

import Header from './components/header/header';
import Nav from './components/nav/nav';
import MobileNav from './components/mobile-nav/mobile-nav';
import About from './components/about/about';
import Roadmap from './components/roadmap/roadmap';
import Team from './components/team/team';
import Faq from './components/faq/faq';
import Footer from './components/footer/footer';
import FlashDark from './assets/icons/flash-dark';
import FlashLight from './assets/icons/flash-light';


function App() {
  return (
    <div className="App">

      <FlashDark/>
      <FlashLight/>

      <MenuContextProvider>
        <MobileNav/>
        <Nav/>
      </MenuContextProvider>
      <Header/> 
      <About/>
      <Roadmap/>
      <Team/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
