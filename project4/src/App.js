import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const apiKey = 't0JLFMhsOWU01Df287t1FzE9hcZOhFSg';
  const [memes, setMemes] = useState([])

  useEffect(() => {
    // After the component has been added to the DOM make our API call...
    axios({
      url: 'https://api.giphy.com/v1/gifs/search?',
      method: 'GET',
      dataResponse: "json",
      params: {
        api_key: 't0JLFMhsOWU01Df287t1FzE9hcZOhFSg',
        q: 'cats',
        limit: '15',
        offset: '0',
        rating: 'g',
        lang: 'en'
      },
    }).then( (response) => {
      // THE ENTIRE OBJECT WITH METADATA
      // setMemes(response)
      // console.log(response.data.data)
      setMemes(response.data.data)
    })
  }, []);
  

  return (
    <div className="App">
      
      <h1>memes</h1>

      {
        memes.map( (meme) => {
          console.log(meme.images.fixed_height.url)

          return(
            < img src = {meme.images.fixed_height.url} alt={meme.title} />
          )
        })
      }

    </div>
  );
}

export default App;




// src = {`http://image.tmdb.org/t/p/w500/${individualMovie.poster_path}`}