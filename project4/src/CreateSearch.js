import axios from 'axios';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MemeTemplate from './MemeTemplate';

function CreateSearch() {

  const apiKey = 't0JLFMhsOWU01Df287t1FzE9hcZOhFSg';

  const [query, setQuery] = useState('');

  const [giphyResponseData, setGiphyResponseData] = useState([]);

  const sendQueryToGiphy = (event) => {
    event.preventDefault();

    axios({
      url: 'https://api.giphy.com/v1/gifs/search?',
      method: 'GET',
      dataResponse: "json",
      params: {
        api_key: 't0JLFMhsOWU01Df287t1FzE9hcZOhFSg',
        q: query,
        limit: '10',
        offset: '0',
        rating: 'g',
        lang: 'en'
      },
    }).then((response) => {
      console.log(response.data.data)
      setGiphyResponseData(response.data.data)
    })
  }

  const [chosenGif, setChosenGif] = useState([]);
  const [showMemeTemplate, setShowMemeTemplate] = useState(false);

  const makeMeme = (event) => {

    setChosenGif(event.target.src)
    setShowMemeTemplate(true)
  }

  return (
    <>
      {
        showMemeTemplate === true ?
          <MemeTemplate
            gifUrl={chosenGif}
            closeMemeTemplate={setShowMemeTemplate}
          /> :
          null
      }
      <div className="seekMemes">

        <h2>Searching for:{query}</h2>

        <form action="submit">
          <label htmlFor="templateSearch">Search for your Meme Template:</label>
          <input type="text" name="templateSearch" id="templateSearch"
            onChange={(event) => { setQuery(event.target.value) }}
          />
          <button onClick={sendQueryToGiphy}>Search</button>
        </form>
      </div>

      <div className="memeResults">
        <ul>
          {
            giphyResponseData.map((giphyGif) => {
              const gifUrl = `${giphyGif.images.original.url}`;
              return (
                <>
                  {/* <Link to={`/create/${gifUrl}`}> */}
                  <img
                    key={giphyResponseData.id}
                    src={gifUrl}
                    alt=""
                    onClick={(event) => makeMeme(event)} />
                  {/* </Link> */}
                </>
              )
            })
          }

        </ul>
      </div>
    </>
  )
}

export default CreateSearch;