import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input } from 'reactstrap';

class TodoTextInputForm extends Component {
  constructor(props) {
    super(props);

    this.titleInput = React.createRef();
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = (event, alterTodo, todo, id) => {
    const newValue = this.titleInput.current.value;
    alterTodo(id, newValue);
    if (event.keyCode === 13) {
      this.toggleEdit(this.id);
    }
  };

  render() {
    const { alterTodo, todo } = this.props;
    const { id } = todo;

    return (
      <div>
        <Input
          defaultValue={this.value}
          type="text"
          name="title"
          placeholder="Type here to change your todo"
          innerRef={this.titleInput}
          onKeyDown={event => this.handleTextChange(event, alterTodo, todo, id)}
          style={{ width: 300 }}
        />
      </div>
    );
  }
}

TodoTextInputForm.propTypes = {
  alterTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    edit: PropTypes.bool
  }).isRequired
};
export default TodoTextInputForm;
