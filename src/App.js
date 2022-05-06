import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";

function App() {
  const [darkMode, setdarkMode] = React.useState(false);

  function toggleDarkMode() {
    setdarkMode((prevMode) => !prevMode);
  }
  

  darkMode ? document.body.style.backgroundColor = "#1c1f25":document.body.style.backgroundColor = "#e9ddb8";

  return (
    <div >
      <button className="toggle-button" onClick={toggleDarkMode}>
        Theme
      </button>

      <div className={darkMode ? "todo-app-dark" : "todo-app"} >

        <TodoList darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
