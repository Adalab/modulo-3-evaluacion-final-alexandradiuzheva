const getDataApi = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((character, index) => {
        return {
          id: index,
          image: character.image,
          name: character.name,
          species: character.species,
          house: character.house,
          gender: character.gender,
          alive: character.alive,
          alternate_names: character.alternate_names,
        };
      });
      return dataClean;
    });
};

export default getDataApi;
