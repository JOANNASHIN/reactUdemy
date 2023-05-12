import Todo from "../models/todo";
import classes from './TodoItem.module.css';

interface Props {
    item: Todo;
}

const TodoItem: React.FC<Props> = ({ item }) => {
    return <li className={classes.item}> {item.text} </li>
}

export default TodoItem;