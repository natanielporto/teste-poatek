import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class MasterInput extends Component {
  constructor(props) {
    super(props);

    this.titleInput = React.createRef();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { create } = this.props;

    if (this.titleInput.current.value) {
      const title = this.titleInput.current.value;
      const todo = {
        id: new Date().getTime(),
        value: title,
        done: false,
        edit: false
      };
      create(todo);
      this.titleInput.current.value = '';
    }
  };

  handleKeyDown(event) {
    if (event.keyCode === 13) this.handleClick();
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <InputGroup>
          <Input
            type="text"
            name="title"
            placeholder="What needs to be done?"
            onKeyDown={this.handleKeyDown}
            innerRef={this.titleInput}
          />
          <InputGroupAddon addonType="append">
            <Button color="secondary" type="button" onClick={this.handleClick}>
              Create
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default MasterInput;
