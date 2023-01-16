
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import logo from "../components/img/dog-logo-1.png"
import Footer from './Footer';
import NavBar from './NavBar';
import { useState } from 'react';
import Content from './Content';

function App() {

  return (
    <div className="App">
      <div id="page">
        <NavBar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
