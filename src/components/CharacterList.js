import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const characterElements = props.characters.map((character, index) => {
    return (
      <li key={index}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section className="characterListWrap">
      <ul className="characterList">{characterElements}</ul>
    </section>
  );
}

export default CharacterList;
