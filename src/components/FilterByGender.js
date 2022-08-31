import PropTypes from 'prop-types';

function filterByGender(props) {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      key: 'gender',
      value: ev.target.value,
    });
  };

  return (
    <>
      <label htmlFor="gender" className="filterText">
        Selecciona el género:{'  '}
      </label>
      <select
        name="gender"
        id="gender"
        onChange={handleChange}
        value={props.filterByGender}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre </option>
      </select>
    </>
  );
}

filterByGender.propTypes = {
  filterByGender: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default filterByGender;
