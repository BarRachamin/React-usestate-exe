import React from "react";

export const WorkItem = ({ id, text, handleDelete }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">Task</div>
        <div className="card-body">
          <h5 className="card-text">{text}</h5>
          <button className="btn btn-primary" onClick={() => handleDelete(id)}>
            Done
          </button>
        </div>
      </div>
    </>
  );
};
