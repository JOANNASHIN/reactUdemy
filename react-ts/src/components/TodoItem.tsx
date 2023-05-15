import Todo from "../models/todo";
import classes from './TodoItem.module.css';

interface Props {
    item: Todo;
    onRemoveTodo: () => void;
}

const TodoItem: React.FC<Props> = (props) => {
    return <li 
        className={classes.item}
        onClick={props.onRemoveTodo}
    > {props.item?.text} </li>
}

export default TodoItem;