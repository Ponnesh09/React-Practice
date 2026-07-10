// simple example, Here is a straightforward example demonstrating how to map over a simple array of strings.

import React from "react";

const List_Items = () => {
  // A static list of strings
  const arr = ["apple", "banana", "orange", "mango"];

  return (
    <div>
      <h1>kye & list </h1>
      <h1>my favorite fruits</h1>

      <ul>
         {/* We use map() to turn the array into a list of <li> elements */}
        {arr.map((fruit, index) => (
          // Using index here because the list is completely static
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default List_Items;



