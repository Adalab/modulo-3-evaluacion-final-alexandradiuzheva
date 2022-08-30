function filterByName(props) {
  const handleInput = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };
  return (
    <>
      <label htmlFor="character" className="filterText">
        Busca por Personaje:{'  '}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Ej: Harry Potter"
        onChange={handleInput}
        value={props.filterByName}
      />
    </>
  );
}

export default filterByName;
