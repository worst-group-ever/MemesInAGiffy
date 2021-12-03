import axios from 'axios';
import { useState, useEffect } from 'react';



function Create() {

  const apiKey = 't0JLFMhsOWU01Df287t1FzE9hcZOhFSg';

  const [query, setQuery] = useState('');

  const sendQueryToGiphy = (event) => {
    event.preventDefault();

    axios({
        url: 'https://api.giphy.com/v1/gifs/search?',
        method: 'GET',
        dataResponse: "json",
        params: {
          api_key: 't0JLFMhsOWU01Df287t1FzE9hcZOhFSg',
          q: query,
          limit: '15',
          offset: '0',
          rating: 'g',
          lang: 'en'
        },
      }).then((response) => {
        console.log(response)
      })
  }

  return (
    <>
      <h2>Create Your Meme</h2>
    </>
  )
}

export default Create;