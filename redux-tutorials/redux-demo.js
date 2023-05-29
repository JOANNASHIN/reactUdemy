const redux = require('redux');

//#region reducer
/**
 * reducer
 */
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
    
};

const store = redux.createStore(counterReducer);
//#endregion

// node redux-demo.js로 찍어보면 // 1
console.log(store.getState());


//#region subscriber
/**
 * subscriber
 */
const counterSubscripber = () => {
    const latestStore = store.getState();
    console.log(latestStore);
};

store.subscribe(counterSubscripber);
//#endregion


//#region action
/**
 * action
 */
store.dispatch({ type: 'decrement' });
//#endregion