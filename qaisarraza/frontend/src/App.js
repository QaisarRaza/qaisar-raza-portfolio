import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Social from './components/Social-icon/Social';
import About from './components/About/About';
import Skill from './components/Skills/Skill';
import Team from './components/Team/Team';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Error from './components/Error/Error';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Social />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/skills' element={<Skill />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
