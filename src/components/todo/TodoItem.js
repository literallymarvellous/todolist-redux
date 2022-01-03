import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleComplete,
  toggleCompleteAsync,
} from "../../redux-todo/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    // sync
    // dispatch(toggleComplete({ id: todo.id, completed: !todo.completed }));

    // async
    dispatch(toggleCompleteAsync({ id: todo.id, completed: !todo.completed }));
  };

  const handleClick = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <div className="flex justify-between items-center py-2 px-5 border-2 my-2">
      <div className="flex items-center justify-center">
        <input
          className="mr-4"
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        />
        <div className="text-black">{todo.title}</div>
      </div>

      <button
        onClick={handleClick}
        className=" bg-red-500 py-2 px-3 text-white rounded-lg"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
