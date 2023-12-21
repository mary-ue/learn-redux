import { createStore, applyMiddleware } from "redux";

const counter = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  if (action.type === "RESET") {
    return 0;
  }

  return state;
};


// create middleware
// store будет содержать все доступные ему методы: .getState, .dispatch, etc
// next(action) обязательно должен быть вызывн внутри 
const myLogger = (store) => (next) => (action) => {
  console.log('dispatched an action ', action.type);
  next (action);
  console.log('updated state is', store.getState());
} 

// передаем 2 или 3 параметром
const store = createStore(counter, applyMiddleware(myLogger));

const increment = {
  type: "INCREMENT",
};

const decrement = {
  type: "DECREMENT",
};

const reset = {
  type: "RESET",
};



const count = document.createElement("div");
count.innerText = store.getState();
count.id = "count";
document.body.append(count);

const decBtn = document.createElement("button");
decBtn.innerText = "-";
decBtn.onclick = () => store.dispatch(decrement);
document.body.append(decBtn);

const incBtn = document.createElement("button");
incBtn.innerText = "+";
incBtn.onclick = () => store.dispatch(increment);
document.body.append(incBtn);

const resetBtn = document.createElement("button");
resetBtn.innerText = "reset";
resetBtn.onclick = () => store.dispatch(reset);
document.body.append(resetBtn);

const render = () => {
  document.getElementById("count").innerText = store.getState();
};

// subscribe - подписка
store.subscribe(render)