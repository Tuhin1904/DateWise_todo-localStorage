import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';

// i am doing default import 

export default configureStore({
  reducer: {
    todos: todosReducer
  }
});