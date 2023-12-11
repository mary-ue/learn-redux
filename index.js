import { combineReducers, createStore } from "redux";

const counterReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  return state;
}

const todosReducer = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    return [...state, 'Learn Redux'];
  }

  return state;
}

// для 1 редьюсера
// const store = createStore(reducer); 

// для 2 редьюсеров
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer);

console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });

console.log(store.getState());