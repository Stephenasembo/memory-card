import { useEffect } from 'react';
import './App.css'

// These characters will have a name and image
const characters = [
  {
    name: 'Ichigo Kurosaki',
    id: 0,
  },
  {
    name: 'Aizen Sosuke',
    id: 1,
  },
  {
    name: 'Inoue Orihime',
    id: 2,
  },
  {
    name: 'Rukia Kuchiki',
    id: 3,
  },
  {
    name: 'Byakuya Kuchiki',
    id: 4,
  },
  {
    name: 'Chad Yasutora',
    id: 5,
  },
  {
    name: 'Yoruichi Shihouin',
    id: 6,
  },
  {
    name: 'Tier Halibel',
    id: 7,
  },
  {
    name: 'Uryu Ishida',
    id: 8,
  },
  {
    name: 'Kisuke Urahara',
    id: 9,
  },
  {
    name: 'Rangiku Matsumoto',
    id: 10,
  },
  {
    name: 'Retsu Unohana',
    id: 11,
  },
]

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
