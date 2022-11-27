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
    <div className="container">
      <div className="toDos">
        <span className="toDos__heading">Active task</span>
        {toDo.map((todo) => (
          <SingleToDo
            toDo={todo}
            toDos={toDo}
            setToDos={setToDo}
            key={todo.id}
          />
        ))}
      </div>
      <div className="toDos remove">
        <span className="toDos__heading">Complete task</span>
        {toDo.map((todo) => (
          <SingleToDo
            toDo={todo}
            toDos={toDo}
            setToDos={setToDo}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
}
