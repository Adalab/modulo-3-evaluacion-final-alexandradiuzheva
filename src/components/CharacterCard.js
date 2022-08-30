import { Link } from 'react-router-dom';
import defaultImage from '../images/defaultImage.jpg';

function CharacterCard(props) {
  console.log(props);
  const GetImage = (image) => {
    if (image === '') {
      return defaultImage;
    } else {
      return props.character.image;
    }
  };

  return (
    <Link to={`/character/${props.character.id}`}>
      <img
        className="characterImage"
        src={GetImage(props.character.image)}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      ></img>
      <h4 className="characterName">{props.character.name}</h4>
      <p className="characterSpecie">{props.character.species}</p>
    </Link>
  );
}
export default CharacterCard;
