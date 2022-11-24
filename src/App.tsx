import React, { useState } from "react";
import InputField from "./Components/InputField";
import ToDoList from "./Components/ToDoList";
import ToDo from "./Model";
import "./Style/App.css";

function App(): JSX.Element {
  const [todo, setToDo] = useState<string>("");
  const [arrayToDos, setTArrayToDos] = useState<ToDo[]>([]);
  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (todo) {
      setTArrayToDos([
        ...arrayToDos,
        { id: Date.now(), ToDo: todo, isDone: false },
      ]);
      setToDo("");
    }
  }
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList toDo={arrayToDos} setToDo={setTArrayToDos} />
    </div>
  );
}

export default App;
