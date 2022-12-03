import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import CardList from './components/CardList/CardList'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Title/>
      <CardList/>
      <Footer/>
    </div>
  );
}

export default App;
