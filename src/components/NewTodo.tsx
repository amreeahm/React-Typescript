import { ChangeEvent, FormEvent, useRef, useState } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const [enteredText, setEnteredText] = useState<string>("");

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    return setEnteredText(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);

    setEnteredText("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">
        Explore TypeScript with React (Todo: string[])
      </label>
      <input
        type="text"
        id="text"
        value={enteredText}
        onChange={inputHandler}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
