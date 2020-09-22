import React, { useMemo } from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../redux-flow/reducers/visibility-filter/action-creators";
import * as actions from "../../redux-flow/reducers/visibility-filter/actions";
import FilterLink from "./filter-link";

const Filter = ({ activeFilter, handleFilter }) => {
  const filterItems = useMemo(() => {
    return [
      { label: "Todos", action: actions.SHOW_ALL },
      { label: "Finalizados", action: actions.SHOW_COMPLETED },
      { label: "A fazer", action: actions.SHOW_ACTIVE },
    ];
  }, []);

  return (
    <div>
      <h3>Mostrar</h3>
      {filterItems.map(({ label, action }) => (
        <FilterLink
          key={action}
          action={action}
          activeFilter={activeFilter}
          onClick={handleFilter(action)}
        >
          {label}
        </FilterLink>
      ))}
    </div>
  );
};

const mapStateToProps = ({ visibilityFilter }) => ({
  activeFilter: visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => (e) => {
    e.preventDefault();
    dispatch(setVisibilityFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
