import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const incrementHandler = (amount) => {
    dispatch({ 
      type: 'increment',
      amount,
    });
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement'});
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{ counter }</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={event => incrementHandler(5)}>increment + 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
