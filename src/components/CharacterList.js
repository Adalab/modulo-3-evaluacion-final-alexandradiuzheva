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

  return (
    <section className="characterListWrap">
      <ul className="characterList">{characterElements}</ul>
    </section>
  );
}

CharacterList.defaultProps = {
  filterbyHouse: 'Gryffindor',
  filterbyName: '',
};

CharacterList.propTypes = {
  dataCharacters: PropTypes.array.isRequired,
  filterByHouse: PropTypes.string.isRequired,
  filterByName: PropTypes.string.isRequired,
};

export default CharacterList;
