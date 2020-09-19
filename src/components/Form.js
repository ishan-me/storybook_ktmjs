import React from "react";

const Form = ({ inputValue, setValue, handleSubmit }) => {
  return (
    <div className="form">
      <input
        value={inputValue}
        onChange={e => setValue(e.target.value)}
        className="input"
        placeholder={"Type here..."}
      />
      <button onClick={handleSubmit} className="submit">
        Submit
      </button>
    </div>
  );
};

export default Form;
