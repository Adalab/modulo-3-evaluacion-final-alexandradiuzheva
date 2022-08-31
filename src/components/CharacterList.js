import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const characterElements = props.characters.map((character, index) => {
    return (
      <li key={index}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return characterElements.length === 0 ? (
    <p className="message">
      No hay ningún personaje que coincida con la palabra introducida
    </p>
  ) : (
    <section className="characterListWrap">
      <ul className="characterList">{characterElements}</ul>
    </section>
  );
}

CharacterList.defaultProps = {
  filterbyName: '',
  filterbyHouse: 'all',
  filterByGender: 'all',
};

CharacterList.propTypes = {
  dataCharacters: PropTypes.array.isRequired,
};

export default CharacterList;
