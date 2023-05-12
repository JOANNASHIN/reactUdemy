import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  /**
   * todo 추가 이벤트
   * 
   * @param todoText 입력한 text
   */
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
