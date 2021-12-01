import { useState, useEffect, createElement, } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link,} from 'react-router-dom';
import Nav from './Nav';
import firebase from './firebase.js'
import Browse from './Browse';
import Create from './Create';
import CreateSearch from './CreateSearch';
import ErrorPage from './ErrorPage';
// import DisplayPhotos from './DisplayPhotos';
import Footer from './Footer';


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
        <div className="wrapper">
          <div className="header_content">
            <header>
              <Link to="/" exact style={{ textDecoration: "none" }}>
                <h1>MEME IN A GIFFY LOGO</h1>
              </Link>

            {/* // work on routing in spare time
      // localhost:3000/browse
      // localhost:3000/create */}
      
            <Link to="/browse"><button onClick={(event) => changeMode(event)}>Browse</button></Link>
            <Link to="/create"><button onClick={(event) => changeMode(event)}>Create</button></Link>
            </header>

            <Routes>
              <Route path="/browse" element={<Browse />} />
              <Route path="/create" element={<Create />} />
              <Route path="/create/:id" element={<CreateSearch />}/>
              <Route path="*" element={<ErrorPage />} />
            </Routes>

            <Nav mode={mode} />
          </div>
  
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
