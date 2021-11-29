import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import CreateMeme from "./CreateMeme"
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
          limit: '5',
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

  const giveMemeTemplateProps = (event) => {

    console.log(event.target.src)

    setChosenGif(event.target.src)
    
  }

  return (
    <> 
        <div className="seekMemes">

          <h2>Searching for:{query}</h2>

          <form action="submit">
            <label htmlFor="templateSearch">Search for your Meme Template:</label>
            <input type="text" name="templateSearch" id="templateSearch" 
                onChange={(event) => {setQuery(event.target.value)}}
            />
            <button onClick={sendQueryToGiphy}>Search</button>
          </form>
        </div>

        <div className="memeResults">
          <ul>
            
            <MemeTemplate
              picked={chosenGif}
            />

            {
              giphyResponseData.map((giphyGif) => {
                const gifUrl = `${giphyGif.images.original.url}`;
                return(
                  
                    <>               
                      <img 
                      key={giphyResponseData.id}
                      src={gifUrl} 
                      alt="" 
                      onClick={(event) => giveMemeTemplateProps(event)} />
    
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

              // giphyResponseData.map((giphyGif) => {
              //   const gifUrl = `${giphyGif.images.original.url}`;
              //   return(
                  
              //       <>               
              //         <img 
              //         key={giphyResponseData.id}
              //         src={gifUrl} 
              //         alt="" 
              //         onClick={handleClick} />
    
              //       </>
              //   ) 
              // })