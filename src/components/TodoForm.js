import React from "react";

function TodoForm(props) {
  const [input, setInput] = React.useState(props.edit ? props.edit.value : "");

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  },[]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className={
              props.darkMode ? "todo-input-dark edit" : "todo-input edit"
            }
            type="text"
            value={input}
            placeholder="Update your item"
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            className={props.darkMode ? "todo-input-dark" : "todo-input"}
            type="text"
            value={input}
            placeholder="Add a todo"
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
