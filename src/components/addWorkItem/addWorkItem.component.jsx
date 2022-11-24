import React, { useState } from "react";
import "./style.css";

export const AddWorkItem = ({ handleInput }) => {
  const [input, setInput] = useState("");

  const handleAdding = () => {
    handleInput(input);
    setInput("");
  };

  const handleTxt = (T) => {
    setInput(T.target.value);
  };

  return (
    <>
      <div className="input-group mb-3 todo">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleTxt}
          value={input}
        />
        <button
          className="btn btn-secondary"
          type="button"
          id="button-addon2"
          onClick={handleAdding}
        >
          Add task
        </button>
      </div>
    </>
  );
};
