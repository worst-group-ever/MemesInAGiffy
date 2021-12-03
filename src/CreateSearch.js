import axios from 'axios';
import { useState } from 'react';
import CloseTemplate from "./CloseTemplate.js";

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MemeTemplate from './MemeTemplate';
import ErrorTemplate from './ErrorTemplate.js';

function CreateSearch() {

  // const apiKey = 't0JLFMhsOWU01Df287t1FzE9hcZOhFSg';

  const [query, setQuery] = useState('');

  const [giphyResponseData, setGiphyResponseData] = useState(['empty']);

  const sendQueryToGiphy = (event) => {
    event.preventDefault();

    if(query.length > 30){
      setShowErrorTemplate(true);
      setQuery('');
    }else{
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
        setGiphyResponseData(response.data.data);
        if (response.data.data.length === 0) {
          setShowErrorTemplate(true);
        }
      })
    }
  }

  const [chosenGif, setChosenGif] = useState([]);
  const [showMemeTemplate, setShowMemeTemplate] = useState(false);
  const [showCloseTemplate, setShowCloseTemplate] = useState(false)
  const [showErrorTemplate, setShowErrorTemplate] = useState(false)

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
            closeCloseTemplate={setShowCloseTemplate}
          /> :
          null
      }
      {
        showCloseTemplate === true ?
          <CloseTemplate
            mode={'close'}
            closeCloseTemplate={setShowCloseTemplate}
          /> :
          null
      }
      {
        showErrorTemplate === true ?
          // <h2>error template</h2>
          <ErrorTemplate
            closeErrorTemplate={setShowErrorTemplate} />
          : null
      }

      <div className="seekMemes">



        <form action="submit">
          <label htmlFor="templateSearch">Search for your Meme Template:</label>
          <input type="text" name="templateSearch" id="templateSearch"
            onChange={(event) => { setQuery(event.target.value) }}
          />
          <button onClick={sendQueryToGiphy}>Search</button>
        </form>
      </div>

      {
        (giphyResponseData.length > 0 && giphyResponseData[0] !== 'empty') ?
          <h2>click on a gif to make a meme</h2>
          : null
      }
      <div className="memeResults">
        <ul>
          {
            giphyResponseData[0] !== 'empty'

              ?
              giphyResponseData.map((giphyGif) => {
                const gifUrl = `${giphyGif.images.original.url}`;
                return (
                  <img
                    key={giphyResponseData.id}
                    src={gifUrl}
                    alt=""
                    onClick={(event) => makeMeme(event)} />
                )
              })
              : null
          }

        </ul>
      </div>
    </>
  )
}

export default CreateSearch;