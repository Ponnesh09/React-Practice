import React from "react";
import { ThemeProvider } from "./Context/ThemeProvider";
import ToolBar from "./Components/ToolBar";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <div className="app-container">
          <h1>Welcome to my App</h1>
          <ToolBar />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
