import { useEffect } from 'react';
import './App.css'

async function fetchGifs() {
  const apiKey = '7uCiKGp7r7hEKsspvlhqflcCvrQHKFis';
  const queryUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`;
  try {
    const response = await fetch(queryUrl, {mode: 'cors'});
    if (!response.ok) throw new Error(`Failed to fetch with a wrong status`)
    const imageData = await response.json();
    const url = imageData.data.images.original.url;
    if (!url) throw new Error(`No GIF url returned`)
    return url;
  }
  catch(err) {
    console.error(err);
    throw err;
  }
}

function App() {
  useEffect(() => {
    (async () => {
      let url = await fetchGifs();
      console.log(url);
    })();
  }, []);
  return (
    <div></div>
  )
}

export default App
