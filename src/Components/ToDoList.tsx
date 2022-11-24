import React from "react";
import ToDo from "../Model";
import "../Style/ToDoList.css";
import SingleToDo from "./SingleToDo";

interface Props {
  toDo: ToDo[];
  setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export default function ToDoList({ toDo, setToDo }: Props): JSX.Element {
  return (
    <div className="todos">
      {toDo.map((todo) => (
        <SingleToDo toDo={todo} key={todo.id} toDos={toDo} setToDos={setToDo} />
      ))}
    </div>
  );
}
