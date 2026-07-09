import React from "react";

const Event_Handling = () => {

  const handleClick = () => {
    alert("button was clicked");
    console.log("button clicked console message");
  };



  return (
    <div>
      {/* <button onClick={()=>{handleClick()}}>Click me</button> ❌❌❌ */}

      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Event_Handling;
