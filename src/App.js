// import logo from './logo.svg';
import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlayerList from './PlayerList';

function App() {
  return (
    <div className="App">
      <h1 className='header'>FIFA 2023 Top player</h1>
        <PlayerList/>
    </div>
  );
}

export default App;
