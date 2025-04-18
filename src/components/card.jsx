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

  if (!imagesAvailable) {
    return (
      <div>
        Please wait a moment. Card images are loading.
      </div>
    )
  }

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