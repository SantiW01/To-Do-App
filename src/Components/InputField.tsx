import React from "react";
import "../Style/InputField.css";

interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export default function InputField({
  todo,
  setToDo,
  handleAdd,
}: Props): JSX.Element {
  return (
    <form className="input" onSubmit={handleAdd}>
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
