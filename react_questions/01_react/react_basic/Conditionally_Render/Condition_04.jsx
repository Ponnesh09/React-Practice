// 4. Returning null to Hide Components
// If you want a component to completely vanish under certain criteria, 
// returning null tells React to mount nothing to the DOM


import React from "react";

const Condition_04 = ({ warn }) => {
  if (!warn) {
    return null; // Component does not render anything
  }

  return (
    <div className="warningMess">
      <h1>Attention! Action required.</h1>
    </div>
  );
};

export default Condition_04;
