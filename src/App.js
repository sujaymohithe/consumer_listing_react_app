import React from 'react';
import './App.css';
import ConsumerHome from './components/consumers/ConsumerHomeContainer';
import Header from './components/headers/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ConsumerHome />
    </div>
  );
}

export default App;
