import React from "react";

const Item = ({ path, index, setFunction }) => {
  return (
    <div>
      <img
        src={`/character/${path}/${index}.png`}
        alt="Item"
        onClick={() => setFunction(index)}
        className="item"
      />
    </div>
  );
};

export default Item;
