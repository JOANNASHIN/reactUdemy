import Todo from "../models/todo";

interface Props {
    item: Todo;
}

const TodoItem: React.FC<Props> = ({ item }) => {
    return <li> {item.text} </li>
}

export default TodoItem;