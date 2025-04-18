export default function Card({characters}) {
  return (
    <div className="cards">
      {characters.map((character) => <button key={character.id}>{character.name}</button>)}
    </div>
  )
}