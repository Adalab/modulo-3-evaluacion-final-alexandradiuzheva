import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';

function Filters(props) {
  return (
    <form className="filterForm">
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
