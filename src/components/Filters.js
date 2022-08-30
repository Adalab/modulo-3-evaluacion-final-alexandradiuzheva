import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';

function Filters(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="filterForm" onSubmit={handleForm}>
      <FilterByName
        handleFilter={props.handleFilter}
        filterByName={props.filterByName}
      />
      <FilterByHouse
        handleFilter={props.handleFilter}
        filterByHouse={props.filterByHouse}
      />
    </form>
  );
}
export default Filters;
