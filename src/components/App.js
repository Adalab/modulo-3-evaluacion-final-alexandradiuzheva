import '../styles/App.scss';
import getDataApi from '../services/charactersApi';
import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { Route, Routes } from 'react-router';
import { matchPath, useLocation } from 'react-router';

function App() {
  /*Render characters*/
  const [dataCharacters, setDataCharacters] = useState([]);

  /*Filter characters*/
  const [filterByName, setFilterByName] = useState('');
  const [filterByHouse, setFilterByHouse] = useState('Gryffindor');

  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      setDataCharacters(dataFromApi);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterByName(data.value);
    } else if (data.key === 'house') {
      setFilterByHouse(data.value);
    }
  };

  const filteredCharacters = dataCharacters
    .filter((dataCharacters) => {
      return dataCharacters.name
        .toLowerCase()
        .includes(filterByName.toLowerCase());
    })
    .filter((dataCharacters) => {
      return dataCharacters.house.includes(filterByHouse);
    });

  const handleDelete = (ev) => {
    ev.preventDefault();
    setFilterByName('');
    setFilterByHouse('Gryffindor');
  };

  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:id', pathname);
  const characterId = dataPath !== null ? dataPath.params.id : null;
  console.log(characterId);
  const characterFound = dataCharacters.find(
    (character) => character.id === parseInt(characterId)
  );

  return (
    <main className="main">
      <h1 className="title">Harry Potter</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                dataCharacters={dataCharacters}
                filterByName={filterByName}
                filterByHouse={filterByHouse}
                handleFilter={handleFilter}
              />
              <div className="resetWrap">
                <input
                  className="resetBtn"
                  type="reset"
                  value="Limpiar filtros"
                  onClick={handleDelete}
                />
              </div>

              <CharacterList
                dataCharacters={dataCharacters}
                characters={filteredCharacters}
              />
            </>
          }
        />
        <Route
          path="/character/:id"
          element={<CharacterDetail character={characterFound} />}
        />
      </Routes>
    </main>
  );
}
export default App;
