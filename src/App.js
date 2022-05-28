import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Roadmap from './components/roadmap/roadmap';
import Team from './components/team/team';
import Faq from './components/faq/faq';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Nav/>
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
