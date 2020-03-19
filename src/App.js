import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import Emoji from './components/Emoji'

function App() {

  const [apodImgUrl, setApodImgUrl] = useState('');

  function fetchPhoto() {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(resp => {

      setApodImgUrl(resp.data.url);

    })
  }

  useEffect(() => {
    fetchPhoto()
  }, [])


  return (
    <div className="App">
      <header>
      </header>
      <div>
        <img src={apodImgUrl} />
      </div>
      <p>
        <Emoji name='rocket' />
      </p>
    </div>
  );
}

export default App;
