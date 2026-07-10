// 3. MAIN APP COMPONENT
// Combines everything together

import React from "react";
import Head from "../components/Head";
import Counter from "../components/Counter";
import Event_Handling from "../Events/Event_Handling";
import Form_Input from "../Events/Form_Input";
import Form_Submission from "../Events/Form_Submission";
import Condition_01 from "../Conditionally_Render/condition_01";
import Condition_02 from "../Conditionally_Render/Condition_02";
import Condition_03 from "../Conditionally_Render/Condition_03";
import Condition_04 from "../Conditionally_Render/Condition_04";
import List_Items from "../components/List_Items";
import ShoppingCart from "../components/ShoppingCart";
import Button from "../components/Button";

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
      <Form_Input />
      <Form_Submission />
      <Condition_01 />
      <Condition_02 />
      <Condition_03 />
      <Condition_04 />
      <List_Items />
      <ShoppingCart />
      <Button />
      <h1>From App.js</h1>
      <h1 className="">Implementation of React with Vite & TailwindCss</h1>
    </div>
  );
};

export default App;
