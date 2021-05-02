import React from 'react';
import PropTypes from 'prop-types';
import TodosState from './TodosState';

const TasksList = props => {
  const { todos, remove, toggleDone, toggleEdit, alterTodo, populate } = props;

  return (
    <>
      <div className="TasksList">
        <ul className="list m-0 p-0">
          {todos &&
            todos.map(todo => (
              <TodosState
                key={todo.id}
                todo={todo}
                remove={remove}
                toggleDone={toggleDone}
                toggleEdit={toggleEdit}
                todoTextInputForm={todos.edit}
                todoDescriptionText={todos.value}
                alterTodo={alterTodo}
                populate={populate}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

TasksList.defaultProps = {
  todos: [],
  remove: () => {},
  toggleDone: () => {},
  toggleEdit: () => {},
  alterTodo: () => {},
  populate: () => {}
};

TasksList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      done: PropTypes.bool,
      edit: PropTypes.bool
    })
  ),
  remove: PropTypes.func,
  toggleDone: PropTypes.func,
  toggleEdit: PropTypes.func,
  alterTodo: PropTypes.func,
  populate: PropTypes.func
};

export default TasksList;
