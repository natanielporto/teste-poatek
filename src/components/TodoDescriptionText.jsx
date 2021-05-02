import React from 'react';
import PropTypes from 'prop-types';

const TodoDescriptionText = props => {
  const { todo } = props;
  const { value, done } = todo;
  const textColor = done ? 'green' : 'red';

  return <div className={textColor}>{value}</div>;
};

TodoDescriptionText.propTypes = {
  todo: PropTypes.shape({
    value: PropTypes.string,
    done: PropTypes.bool
  }).isRequired
};

export default TodoDescriptionText;
