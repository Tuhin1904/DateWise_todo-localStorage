import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {},
  selectedDate: new Date(),
  newTodo: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setNewTodo: (state, action) => {
      state.newTodo = action.payload;
    },
  },
});

export const { setTodos, setSelectedDate, setNewTodo } = todoSlice.actions;

export default todoSlice.reducer;
