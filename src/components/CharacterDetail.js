import { Link } from 'react-router-dom';
import defaultImage from '../images/defaultImage.jpg';

function CharacterDetail(props) {
  console.log(props);
  const GetImage = (image) => {
    if (image === '') {
      return defaultImage;
    } else {
      return props.character.image;
    }
  };
  return (
    <>
      <section className="detailWrap">
        <h2 className="detailTitle">Detalle del personaje</h2>
        <div className="detailCardWrap">
          <section className="detailImage">
            <img
              src={GetImage(props.character.image)}
              alt={`Foto de ${props.character.name}`}
            />
          </section>
          <section className="detailText">
            <h4 className="detailTextName">{props.character.name}</h4>
            <p>Especie: {props.character.species}</p>
            <p>
              Genero: {props.character.gender === 'female' ? 'Mujer' : 'Hombre'}
            </p>
            <p>
              Estatus:{' '}
              {props.character.alive === true ? 'Vivo(a)' : 'Muerto(a)'}
            </p>
            <p>Casa: {props.character.house}</p>
            <p>
              Nombre Alternativo:
              <br />
              {props.character.alternate_names}
            </p>
          </section>
        </div>
        <div className="btnBackWrap">
          <Link to="/" className="btnBack">
            Volver
          </Link>
        </div>
      </section>
    </>
  );
}
export default CharacterDetail;
