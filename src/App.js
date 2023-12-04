import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className='App bg-slate-200'>
      <h1 className="text-4xl my-6 text-purple-950">ToDo App</h1>

      <Todo />
    </div>
  );
}

export default App;
