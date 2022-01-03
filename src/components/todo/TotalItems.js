import React from "react";
import { useSelector } from "react-redux";

const TotalItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.value.filter((todo) => todo.completed === true)
  );

  return <div>Total completed items: {completedTodos.length} </div>;
};

export default TotalItems;
