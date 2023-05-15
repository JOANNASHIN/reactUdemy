import { ReactNode } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

/**
 * FC 는 functional component라는 뜻
 * v18 부터는 children이 필요한지 명확하게 나타내기 위해서 children 필요하면 명시해주어야함
 */
interface Props {
    items: Todo[];
    children?: ReactNode;
    onRemoveTodo: (id: string) => void;
}

const Todos:React.FC<Props> = (props) => {
    return <ul>
        {props.items && props.items.map(item => (
          <TodoItem 
            item={item} 
            key={item.id}
            onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
        ))}
    </ul>
}

export default Todos;