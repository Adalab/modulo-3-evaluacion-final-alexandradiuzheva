import '../styles/App.scss';
import getDataApi from '../services/charactersApi';
import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import ls from '../services/localStorage';

function App() {
  const [dataCharacters, setDataCharacters] = useState(
    ls.get('dataCharacters', [])
  );
  const [filterByName, setFilterByName] = useState(ls.get('filterByName', ''));
  const [filterByHouse, setFilterByHouse] = useState(
    ls.get('filterByHouse', 'all')
  );
  const [filterByGender, setFilterByGender] = useState(
    ls.get('filterByGender', 'all')
  );

  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      setDataCharacters(dataFromApi);
    });
  }, []);

  useEffect(() => {
    ls.set('dataCharacters', dataCharacters);
    ls.set('filterByName', filterByName);
    ls.set('filterByHouse', filterByHouse);
    ls.set('filterByGender', filterByGender);
  }, [dataCharacters, filterByName, filterByHouse, filterByGender]);

  const handleFilter = (dataFromApi) => {
    if (dataFromApi.key === 'name') {
      setFilterByName(dataFromApi.value);
    } else if (dataFromApi.key === 'house') {
      setFilterByHouse(dataFromApi.value);
    } else if (dataFromApi.key === 'gender') {
      setFilterByGender(dataFromApi.value);
    }
  };

  const filteredCharacters = dataCharacters
    .filter((dataCharacters) => {
      return dataCharacters.name
        .toLowerCase()
        .includes(filterByName.toLowerCase());
    })
    .filter((eachCharacter) =>
      filterByHouse === 'all'
        ? eachCharacter.house
        : filterByHouse === eachCharacter.house
    )
    .filter((eachCharacter) =>
      filterByGender === 'all'
        ? eachCharacter.gender
        : filterByGender === eachCharacter.gender
    );

  const handleDelete = (ev) => {
    ev.preventDefault();
    setFilterByName('');
    setFilterByHouse('all');
    setFilterByGender('all');
  };

  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:id', pathname);
  const characterId = dataPath !== null ? dataPath.params.id : null;
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
                filterByGender={filterByGender}
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
