import React from "react";
import "../Style/InputField.css";

interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputField({ todo, setToDo }: Props): JSX.Element {
  return (
    <form className="input">
      <input
        onChange={(e) => setToDo(e.target.value)}
        type="text"
        value={todo}
        placeholder="Enter a task"
        className="input__box"
      />
      <input type="submit" value="Go" className="input__submit" />
    </form>
  );
}
