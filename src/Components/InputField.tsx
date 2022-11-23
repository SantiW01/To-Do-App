import React from "react";
import "../Style/InputField.css";

export default function InputField() {
  return (
    <form className="input">
      <input
        type="text"
        name=""
        placeholder="Enter a task"
        className="input__box"
      />
      <input type="submit" value="Go" className="input__submit" />
    </form>
  );
}
