import React, { useState } from "react";
import { AddWorkItem } from "../addWorkItem/addWorkItem.component";
import { WorkItem } from "../workItem/workItem.component";

import "./style.css";

export const TodoList = (props) => {
  const [inputArr, setInput] = useState([]);
  //control the massge in the Task List
  const handleInput = (I) => {
    let input = { message: I, id: inputArr.length };
    setInput((prev) => [...prev, input]);
  };

  const handleDelete = (id) => {
    setInput(inputArr.filter((item) => item.id !== id));
    console.log(id);
  };

  return (
    <div>
      <h1>Today work items that should be done</h1>
      <AddWorkItem handleInput={handleInput} />
      {inputArr &&
        inputArr.map((m) => {
          return (
            <WorkItem
              key={m.id}
              id={m.id}
              text={m.message}
              handleDelete={handleDelete}
            ></WorkItem>
          );
        })}
    </div>
  );
};
