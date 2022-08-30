function filterByHouse(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'house',
      value: ev.target.value,
    });
  };

  return (
    <>
      <label htmlFor="house" className="filterText">
        Selecciona la casa:{'  '}
      </label>
      <select
        name="house"
        id="house"
        onChange={handleChange}
        value={props.filterByHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </>
  );
}

export default filterByHouse;
