import {useEffect, useState } from 'react';
import './App.css'
import Card from './components/card';
import Scoreboard from './components/scoreboard';

// These characters will have a name and image
let characters = [
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

async function fetchGifs(query) {
  const apiKey = 'hJAwUiVPmY6gsPlslo61a7HySbG0mDTA';
  const queryUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${query} bleach`;
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

async function fetchCardImages() {
  const updatedCharacters = await Promise.all(characters.map(async (character) => {
    character.imageUrl = await fetchGifs(character.name);
    return character;
  }))
  return updatedCharacters;
}

function App() {
  const [imagesAvailable, setImagesAvailable] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    (async () => {
      characters = await fetchCardImages();
      setImagesAvailable(true);
    })()
  }, [])

  function earnPoint(card) {
    setCurrentScore(currentScore + 1);
    setClickedCards(clickedCards.push(card));
  }

  function gameOver() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
      setCurrentScore(currentScore);
      setClickedCards([]);
    }
  }
  
  return (
    <div>
      <h1>Bleach Anime Memory Game</h1>
      <div className='scoreInformation'>
        <div className='information'>
          <p>Click on a card once to earn points</p>
        </div>
        <Scoreboard
        current={currentScore}
        best={bestScore}
        />
      </div>
      <Card
      characters={characters}
      imagesAvailable={imagesAvailable}
      clickedCards={clickedCards}
      incrementScore={earnPoint}
      endGame={gameOver}
      />
    </div>
  )
}

export default App
