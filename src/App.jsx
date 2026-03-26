import { useState } from "react";
import Board from "./components/Board";
import "./App.css";

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      
      <header className="header">
        <h1>Task Manager</h1>
        <nav>
        <input type="text" placeholder="Search tasks" />
        </nav>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main>

      
      
        <Board />
      </main>

    </div>
  );
}