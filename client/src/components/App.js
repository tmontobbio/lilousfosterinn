
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Footer from './Footer';
import NavBar from './NavBar';
import About from "./About";
import Fosters from "./Fosters";
import Training from "./Training";
import Contact from "./Contact";
import { useState } from 'react';

function App() {

  const [navVisible, setNavVisible] = useState(false)

  return (
    <div className="App">
      <div id="page">
        <NavBar navVisible={navVisible} setNavVisible={setNavVisible} />
        <About />
        <Fosters />
        <Training />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
