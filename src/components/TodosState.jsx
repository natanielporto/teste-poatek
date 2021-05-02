/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import TodoTextInputForm from './TodoTextInputForm';
import TodoDescriptionText from './TodoDescriptionText';
import ButtonEdit from './ButtonEdit';
import ButtonSave from './ButtonSave';

const TodosState = props => {
  const { todo, toggleDone, remove } = props;
  const { done, edit, id } = todo;

  const getBtnDoneClass = () => (done ? 'btn btn-success' : 'btn btn-danger');

  const getDoneClass = () => (done ? 'Done' : 'Undone');

  return (
    <div className="item row mt-2 mb-2">
      <div className="col-4 offset-3">
        {edit ? <TodoTextInputForm {...props} /> : <TodoDescriptionText {...props} />}
      </div>
      <div>
        <button
          onClick={() => toggleDone(id)}
          type="button"
          name="done"
          className={getBtnDoneClass()}
        >
          {getDoneClass()}
        </button>
      </div>
      <div>
        {edit ? <ButtonSave {...props} /> : <ButtonEdit {...props} />}
        <button
          onClick={() => remove(id)}
          type="button"
          name="delete"
          className="btn btn-primary ml-5"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

TodosState.defaultProps = {
  todo: {
    id: '',
    done: false,
    edit: false
  }
};

TodosState.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    edit: PropTypes.bool
  }),
  remove: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired
};

export default TodosState;
