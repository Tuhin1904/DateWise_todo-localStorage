import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    getTodos: (state, action) => {
      return action.payload;
    },
  }
});

export const { getTodos, addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;