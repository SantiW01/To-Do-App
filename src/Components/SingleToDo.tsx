import React, { useState } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(toDo.ToDo);
  const handleDone = (id: number) => {
    setToDos(
      toDos.map((todo) =>
        toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setToDos(toDos.filter((todo) => toDo.id !== todo.id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setToDos(
      toDos.map((todo) => (todo.id === id ? { ...todo, ToDo: editToDo } : todo))
    );
    setEdit(false);
  };

  return (
    <form
      action=""
      onSubmit={(e) => handleEdit(e, toDo.id)}
      className="toDos__single"
    >
      {edit ? (
        <input
          value={editToDo}
          type="text"
          onChange={(e) => setEditToDo(e.target.value)}
          className="toDos__single--text"
        />
      ) : toDo.isDone ? (
        <s className="toDos__single--text">{toDo.ToDo}</s>
      ) : (
        <span className="toDos__single--text">{toDo.ToDo}</span>
      )}
      <span>
        <div
          className="icon"
          onClick={() => {
            if (!edit && !toDo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </div>
        <div className="icon" onClick={() => handleDelete(toDo.id)}>
          <AiFillDelete />
        </div>
        <div className="icon" onClick={() => handleDone(toDo.id)}>
          <MdDone />
        </div>
      </span>
    </form>
  );
}
