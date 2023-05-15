import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

/**
 * FC 는 functional component라는 뜻
 * v18 부터는 children이 필요한지 명확하게 나타내기 위해서 children 필요하면 명시해주어야함
 */
const Todos:React.FC = () => {
    const {items, removeTodo} = useContext(TodosContext);

    return <ul>
        {items && items.map(item => (
          <TodoItem 
            item={item} 
            key={item.id}
            onRemoveTodo={removeTodo.bind(null, item.id)}
        />
        ))}
    </ul>
}

export default Todos;