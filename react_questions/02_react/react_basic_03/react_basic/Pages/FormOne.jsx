// Single Input Field Example
import React, { useState } from "react";

const FormOne = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
        <h1>1st method of react form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormOne;
