import axios from 'axios';
import { useState, useEffect } from 'react';


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

  return (
    <>
      {/* <h2>Create Your Meme</h2>
      <div className="memeCreator">
        <img src="" alt="" />
        <div className="memeText">
          <form action="submit">
            <label htmlFor="caption">Caption:</label>
            <input required type="text" name="memeCaption" id="memeCaption" />
            <input required type="text" name="memeTags" id="memeTags" />
            <button>Make Me a Meme!</button>
            <button>Clear Text</button>
          </form>
 */}
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
            {
              giphyResponseData.map((giphyGif) => {

                const gifUrl = `${giphyGif.images.original.url}`;
                // console.log(giphyGif.images.original.url);
                return(
                  <>
                    <img src={gifUrl} alt="" />
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