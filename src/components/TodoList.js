import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList(props) {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    //  console.log(todo,...todos)
  };

  React.useEffect(() => {
    const data = window.localStorage.getItem("SAVED_TODOS");

    if (data) {
      setTodos(JSON.parse(data));
      console.log("data", data);
    }
  }, []);

  React.useEffect(() => {
    if (todos?.length) {
      window.localStorage.setItem("SAVED_TODOS", JSON.stringify(todos));
    }
  }, [todos]);

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className={props.darkMode ? "todolist-dark" : null}>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} darkMode={props.darkMode} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        darkMode={props.darkMode}
      />
    </div>
  );
}

export default TodoList;
