import React from 'react';
import PropTypes from 'prop-types';

const ButtonEdit = props => {
  const { todo, toggleEdit } = props;
  const { id } = todo;

  return (
    <button
      onClick={() => toggleEdit(id)}
      type="button"
      name="edit"
      className="btn btn-primary ml-5 mr-2"
    >
      Edit
    </button>
  );
};

ButtonEdit.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    done: PropTypes.bool,
    edit: PropTypes.bool
  }).isRequired,
  toggleEdit: PropTypes.func.isRequired
};

export default ButtonEdit;
