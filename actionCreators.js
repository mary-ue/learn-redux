import { createStore } from 'redux';

let nextTodoId = 0;

// persist - сохранение чего-то
const defaultValues = [
  { id: 0, title: 'hello', completed: false },
  { id: 1, title: 'hello 1', completed: false }
]

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,

        {
          id: ++nextTodoId,
          title: action.title,
          completed: false,
        },
      ];
    }

    case 'TOGGLE_TODO': {
      return state.map((todo) =>
        todo.id === action.todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    }

    default: {
      return state;
    }
  }
};

const store = createStore(todos, defaultValues);

// action creators
const addTodo = (title) => ({
  type: 'ADD_TODO',
  title,
  payload: { title },
});

const toggleTodo = (todoId) => ({
  type: 'TOGGLE_TODO',
  todoId,
});

// using 
console.log(store.getState());
// store.dispatch(addTodo('Learn React'));
// console.log(store.getState());
// store.dispatch(addTodo('Learn Redux'));
// console.log(store.getState());
// store.dispatch(toggleTodo(1));
// console.log(store.getState());
