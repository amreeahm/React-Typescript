import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item}>
      <span>{props.text}</span>
      <button className={classes.button} onClick={props.onRemoveTodo}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
