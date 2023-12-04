import React, { useState, useEffect } from 'react';
import "./todoStyles.css";

function Todo() {
  const [todos, setTodos] = useState(() => {
    
    //checking of any todo is present
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : {};
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Save todos to local storage whenever todos or selectedDate change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, selectedDate]);

  const handlePrevDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDate = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const dateTodos = todos[formattedDate] || [];
      const updatedTodos = { ...todos, [formattedDate]: [...dateTodos, { id: Date.now(), title: newTodo }] };
      setTodos(updatedTodos);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (date, id) => {
    const dateTodos = todos[date] || [];
    const updatedTodos = { ...todos, [date]: dateTodos.filter(todo => todo.id !== id) };
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="prevNextButton">
        <button onClick={handlePrevDate}>Previous Date</button>
        <span>Today - {selectedDate.toDateString()}</span>
        <button onClick={handleNextDate}>Next Date</button>
      </div>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="todos">
        <ol className="todoItems">
          {todos[selectedDate.toISOString().split('T')[0]]?.map((todo,i) => (
            <li key={todo.id}>
            <b>{i+1}.</b>
              {todo.title}
              <button className="delete" onClick={() => handleDeleteTodo(selectedDate.toISOString().split('T')[0], todo.id)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Todo;
