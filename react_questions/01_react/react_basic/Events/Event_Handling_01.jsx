import React from "react";

const Event_Handling = () => {

// - Define the handler function Click Events (onClick)
  const handleClick = () => {
    alert("button was clicked");
    console.log("button clicked console message");
  };



  return (
    <div>
      {/* <button onClick={()=>{handleClick()}}>Click me</button> ❌❌❌ */}

      {/* - Pass the reference to the onClick prop */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Event_Handling;
