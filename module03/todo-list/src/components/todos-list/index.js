import React, { useCallback } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../../redux-flow/reducers/todos/action-creators";
import * as filterActions from "../../redux-flow/reducers/visibility-filter/actions";

const TodoList = ({ todos, activeFilter, handleToggleTodo }) => {
  const getVisibilityTodos = useCallback((todos, activeFilter) => {
    const filteriItems = {
      [filterActions.SHOW_ALL]: todos,
      [filterActions.SHOW_COMPLETED]: todos.filter((todo) => todo.completed),
      [filterActions.SHOW_ACTIVE]: todos.filter((todo) => !todo.completed),
    };

    return filteriItems[activeFilter];
  }, []);

  return (
    <ul>
      {getVisibilityTodos(todos, activeFilter).map(
        ({ id, text, completed }) => (
          <li
            key={id}
            style={{
              textDecoration: completed ? "line-through" : "none",
            }}
            onClick={() => handleToggleTodo(id)}
          >
            {text}
          </li>
        )
      )}
    </ul>
  );
};

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos,
  activeFilter: visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => {
    dispatch(toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
