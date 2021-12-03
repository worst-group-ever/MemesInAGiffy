import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import Browse from './Browse';
import CreateSearch from './CreateSearch';
import Footer from './Footer';


function App() {

  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <div className="header_content">
            <header>
              <Link to="/" exact style={{ textDecoration: "none" }}>
                <h1>MEME IN A GIFFY</h1>
              </Link>

              <Link to="/browse">
                <button >Browse</button>
              </Link>

              <Link to="/create">
                <button >Create</button>
              </Link>

              <Routes>
                <Route path="/" element={<Browse />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/create" element={<CreateSearch />} />
              </Routes>
              <Footer />
            </header>
    
          </div>

        </div>
        
      </div>
    </Router>
  );
}


export default App;
