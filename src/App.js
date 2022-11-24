import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { TodoList } from "./components/todoList/todoList.component";

export const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};
