import React, { useState } from "react";
import Todo from "../models/todo";

interface TodosContextObj {
    items: Todo[];
    addTodo: (todoText: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id) => {}
});

interface Props {
    children: React.ReactNode;
}

const TodosContextProvider: React.FC<Props> = (props) => {
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
  
    /**
     * todo 삭제 이벤트
     */
    const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id !== todoId);
      });
    }

   
    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;