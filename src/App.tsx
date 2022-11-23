import React, { useState } from "react";
import InputField from "./Components/InputField";
import "./Style/App.css";

function App(): JSX.Element {
  const [todo, setToDo] = useState<string>("");
  console.log(todo);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setToDo={setToDo} />
    </div>
  );
}

export default App;
