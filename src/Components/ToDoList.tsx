import React from "react";
import ToDo from "../Model";
import "../Style/ToDoList.css";

interface Props {
  toDo: ToDo[];
  setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export default function ToDoList({ toDo, setToDo }: Props): JSX.Element {
  return (
    <div className="todos">
      {toDo.map((todo, id) => (
        <li key={id}>{todo.ToDo}</li>
      ))}
    </div>
  );
}
