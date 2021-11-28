import { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import firebase from './firebase.js'


function App() {

  // [mode, setMode] = useState('browse')
  // have two buttons: Browse Meme, Create Meme
  // clicking on 'Create Meme' >>> setMode('create')
  // clicking on 'Browse Meme' >>> setMode('browse')
  // pass mode to <Nav mode={mode}>
  // then <Nav> will know to call the <Create> or <Browse> component



  const [mode, setMode] = useState('browse')

  const changeMode = (event) => {
    setMode(event.target.innerText)
  }

  return (
    <Router>
      <div className="App">

        <header>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>MEME IN A GIFFY LOGO</h1>
          </Link>
        </header>

        {/* // work on routing in spare time
  // localhost:3000/browse
  // localhost:3000/create */}

        <button onClick={(event) => changeMode(event)}>browse</button>
        <button onClick={(event) => changeMode(event)}>create</button>

        <Nav mode={mode} />




      </div>
    </Router>
  );
}


export default App;
