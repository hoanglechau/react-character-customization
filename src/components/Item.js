import React from "react";

const Item = ({ path, index, setFunction }) => {
  return (
    <>
      <img
        src={`/character/${path}/${index}.png`}
        alt="Item"
        onClick={() => setFunction(index)}
        className="item"
      />
    </>
  );
};

export default Item;
