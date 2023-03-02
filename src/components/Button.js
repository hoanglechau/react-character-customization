import React from "react";

const Button = ({ randomize }) => {
  return (
    <div className="button-wrapper">
      <button className="button" onClick={() => randomize()}>
        Randomize!
      </button>
    </div>
  );
};

export default Button;
