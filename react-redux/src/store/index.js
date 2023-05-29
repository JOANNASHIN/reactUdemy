import { createStore } from 'redux';

const initialState = {
    counter: 0,
    showCounter: true,
}
const counterReducer = (state = initialState, action) => {
    const amount = typeof action.amount === 'number' ? action.amount : 1;

    switch(action.type) {
        case 'increment': 
            return {
                counter: state.counter + amount,
                showCounter: state.showCounter
            }
        case 'decrement': 
            return {
                counter: state.counter - amount,
                showCounter: state.showCounter
            }
        case 'toggle': 
            return {
                ...state,
                showCounter: !state.showCounter,
            }
        default: 
            return state;
    }
}

const store = createStore(counterReducer);

export default store;