import React from 'react';
import PropTypes from 'prop-types';

export default function Todo({ list: { id, heading, state }, finishedTask }) {
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
  list: PropTypes.shape({
    id: PropTypes.number.isRequired,
    heading: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  finishedTask: PropTypes.func,
};
