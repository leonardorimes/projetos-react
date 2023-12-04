import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: JSON.parse(localStorage.getItem("todos")) || [],
    filter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });

      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      localStorage.clear();
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
    filterTodos: (state, action) => {
      state.filter = action.payload;
    },
    editTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
      state.list.push({
        id: action.payload.id,
        text: action.payload.input,
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.list));
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, filterTodos, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
