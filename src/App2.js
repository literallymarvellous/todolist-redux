import React from "react";
import AddTodoForm from "./components/todo/AddTodoForm";
import TodoList from "./components/todo/TodoList";
import TotalItems from "./components/todo/TotalItems";

const App2 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalItems />
    </div>
  );
};

export default App2;
