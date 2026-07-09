// 3. MAIN APP COMPONENT
// Combines everything together

import React from "react";
import Head from "../components/Head";
import Counter from "../components/Counter";
import Event_Handling from "../Events/Event_Handling_01";

const App = () => {
  return (
    <div>
      {/* Passing data down as props to the Head component */}
      <Head
        title="Welcome to react"
        subtitle="JSX, Components, Props, and State in one file."
      />

      <Counter />

      <Event_Handling />

      <h1>From App.js</h1>
      <h1 className="">Implementation of React with Vite & TailwindCss</h1>
    </div>
  );
};

export default App;
