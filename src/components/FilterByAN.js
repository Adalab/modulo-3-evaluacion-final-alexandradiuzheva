function filterByAN(props) {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      key: 'number',
      value: ev.target.value,
    });
  };
  return (
    <>
      <label htmlFor="character" className="filterText">
        Numero de nombres alternativos:{'  '}
      </label>
      <input
        type="number"
        name="number"
        id="number"
        placeholder="Tu numero"
        onChange={handleInput}
        value={props.filterByAN}
      />
    </>
  );
}

export default filterByAN;
