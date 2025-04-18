export default function Card({
    characters,
    imagesAvailable,
    clickedCards,
    incrementScore,
    endGame,
  }) {
  
  function handleClick(e) {
    const btnId = e.currentTarget.id;
    console.log(clickedCards);
    if (clickedCards.has(btnId)) {
      endGame();
      return;
    }
    incrementScore(btnId);
  }

  // Fisher-Yates algorithm implementation
  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i-= 1) {
      const random = Math.floor(Math.random() * (i + 1));
      [array[i], array[random]] = [array[random], array[i]];
    }
  }

  // if (!imagesAvailable) {
  //   return (
  //     <div>
  //       Please wait a moment. Card images are loading.
  //     </div>
  //   )
  // }

  return (
    <div className="cards">
      {characters.map((character) => {
        return (
          <button
          className="characterBtn"
          id={character.id}
          key={character.id}
          onClick={(e) => handleClick(e)}
          >
            <div className="characterImage">
              <img src={character.imageUrl} />
            </div>
            <p>{character.name}</p>
          </button>
        )
        })}
    </div>
  )
}
