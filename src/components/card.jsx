export default function Card({characters, imagesAvailable}) {
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
          key={character.id}>
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