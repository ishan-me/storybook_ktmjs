import React from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

export default function Todo({ todo: { id, heading, state }, finishedTask }) {
  return (
    <div className="todoListing">
      <input
        type="checkbox"
        defaultChecked={state === 'TODO_COMPLETED'}
        disabled={true}
        name="checked"
      />
      <span onClick={() => finishedTask(id)} />
      <input type="text" value={heading} readOnly={true} />
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    heading: PropTypes.string.isRequired,
    state: PropTypes.string,
  }),
  finishedTask: PropTypes.func,
};
