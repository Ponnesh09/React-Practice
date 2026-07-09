// 1. COMPONENT & PROPS
// This is a functional component that accepts "props" (properties) from its parent.
// It uses JSX to describe what the UI should look like.

import React from "react";

const Head = (props) => {
  return (
    <div>
      <h1>From Head.jsx</h1>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Head;
