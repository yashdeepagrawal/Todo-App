import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";

function App() {
  const [darkMode, setdarkMode] = React.useState(false);

  function toggleDarkMode() {
    setdarkMode((prevMode) => !prevMode);
  }
  return (
    <div>
      <button className="toggle-button" onClick={toggleDarkMode}>
        Theme
      </button>

      <div className={darkMode ? "todo-app-dark" : "todo-app"}>
        <TodoList darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
