import React from "react";
import InputField from "./Components/InputField";
import "./Style/App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
