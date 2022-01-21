import logo from "./logo.svg";
import "./App.css";
import { addTask, deleteTask, doneTask } from "./JS/actions/ActionTask";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const [text, settext] = useState();
  const dispatch = useDispatch();
  const listetomap = useSelector((state) => state.todolist);

  return (
    <div className="App">
      <div>
        <div className="titre">
          <h1 >
            TODO LIST
          </h1>
        </div>
        <div className="add">
        <input
          type="text"
          placeholder="add new task"
          onChange={(e) => settext(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(addTask({ id: Math.random(), text: text, isDOne: false }))
          }
        >
          Add
        </button>
        </div>
      </div>
      {listetomap.map((el) => (
        <div className="liste">
          <h1
            onClick={() => dispatch(doneTask(el.id))}
            className={el.isDone ? "green" : "red"}
          >
            {el.text}{" "}
          </h1>
          <p>{el.isDone ? "Done" : "Not Dane"}</p>
          <button onClick={() => dispatch(deleteTask(el.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
