import React from "react";
import ToDo from "../Model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../Style/SingleToDo.css";

type Props = {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

export default function SingleToDo({
  toDo,
  toDos,
  setToDos,
}: Props): JSX.Element {
  return (
    <form action="" className="toDos__single">
      <span className="toDos__single--text">{toDo.ToDo}</span>
      <span>
        <div className="icon">
          <AiFillEdit />
        </div>
        <div className="icon">
          <AiFillDelete />
        </div>
        <div className="icon">
          <MdDone />
        </div>
      </span>
    </form>
  );
}
