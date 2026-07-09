import React from "react";

const Event_Handling = () => {

// 1. Define the handler function
  const handleClick = () => {
    alert("button was clicked");
    console.log("button clicked console message");
  };



  return (
    <div>
      {/* <button onClick={()=>{handleClick()}}>Click me</button> ❌❌❌ */}
      
      // 2. Pass the reference to the onClick prop
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Event_Handling;
