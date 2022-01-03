import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: 1, title: "play", completed: false },
    { id: 2, title: "wash", completed: false },
    { id: 3, title: "sweep", completed: false },
  ],
};

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    try {
      const response = await fetch("http://localhost:7000/todos");
      const todos = await response.json();
      return todos;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    try {
      const response = await fetch("http://localhost:7000/todos", {
        method: "POST",
        body: JSON.stringify({ title: payload.title }),
      });
      const todo = await response.json();
      return todo;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload) => {
    try {
      console.log(payload);
      const response = await fetch(
        `http://localhost:7000/todos/${payload.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: payload.completed }),
        }
      );
      const todo = await response.json();
      return { id: todo.id, completed: todo.completed };
    } catch (err) {
      console.log(err.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.value.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const index = state.value.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.value[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      const todos = state.value.filter((todo) => todo.id !== action.payload.id);
      state.value = todos;
    },
  },

  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log("fetching data...");
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log("fetching successful...");
      state.value = action.payload;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      console.log("fetching successful...");
      state.value.push(action.payload);
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      console.log("fetching successful toggle...");
      const index = state.value.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.value[index].completed = action.payload.completed;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
