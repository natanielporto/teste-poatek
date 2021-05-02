import React from 'react';
import PropTypes from 'prop-types';
import MasterInput from './Form';
import HeaderTodo from './Header';
import ListOfTasks from './TasksList';

function UpperLayout(props) {
  const { create } = props;

  return (
    <>
      <div className="row">
        <HeaderTodo />
        <MasterInput create={create} />
        <ListOfTasks />
      </div>
    </>
  );
}

UpperLayout.propTypes = {
  create: PropTypes.func.isRequired
};

export default UpperLayout;
