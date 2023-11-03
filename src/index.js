import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchtodo } from "./redux/features/todoSlice";
import Todocontainer from "./Components/Todocontainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  if (state.todo.isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="App">
      <button
        style={{ marginTop: "30px", backgroundColor: "black", color: "white" }}
        onClick={(e) => dispatch(fetchtodo())}
      >
        Fetch Todos
      </button>
      {state.todo.data &&
        state.todo.data.map((item) => <Todocontainer item={item} />)}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
