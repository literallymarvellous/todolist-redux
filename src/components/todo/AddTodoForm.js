import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, addTodoAsync } from "../../redux-todo/todoSlice";

const AddTodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // async add todo
    dispatch(addTodoAsync({ title: todo }));

    // sync add todo
    // dispatch(addTodo({ title: todo }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-2/5">
      <input
        type="text"
        placeholder="Add todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border-2"
      />
      <button className="border-2 w-44 mt-2 bg-blue-500">Submit</button>
    </form>
  );
};

export default AddTodoForm;
