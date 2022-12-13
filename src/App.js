import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import CardList from './components/CardList/CardList';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer'
import CardDetails from './components/CardDetails/CardDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Routes>
          <Route exact path="/" element={<CardList/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/details/:id" element={<CardDetails/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
