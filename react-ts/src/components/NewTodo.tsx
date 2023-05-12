import { ChangeEvent, useRef, useState } from 'react';
import classes from './NewTodo.module.css';

const NewTodo:React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const [ inputValue, setInputValue ] = useState<string>('');

    /**
     * update input value
     */
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue((event.target as HTMLInputElement)?.value ?? '');
    }

    /**
     * submit form
     */
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }

        // event 전달
        props.onAddTodo(enteredText);

        // input 값 reset
        setInputValue('');
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input 
                type="text"
                id='text'
                ref={todoTextInputRef}
                value={inputValue} 
                onChange={handleInputChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo;