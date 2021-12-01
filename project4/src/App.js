import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import Browse from './Browse';
// Duplicate that doesnt do anything
// import Create from './Create';
import CreateSearch from './CreateSearch';
// import DisplayPhotos from './DisplayPhotos';
import Footer from './Footer';


function App() {

  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <div className="header_content">
            <header>
              <Link to="/" exact style={{ textDecoration: "none" }}>
                <h1>MEME IN A GIFFY LOGO</h1>
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
                {/* <Route path="/create/:id" element={<CreateSearch />}/> */}


                {/* error page; will automatically render on home page; dont want */}
                {/* <Route path="*" element={<ErrorPage />} /> */}
              </Routes>

            </header>
          </div>

        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
