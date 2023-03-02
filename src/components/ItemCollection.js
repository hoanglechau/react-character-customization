import React from "react";
import Item from "./Item";

const ItemCollection = ({ title, path, collectionLength, setFunction }) => {
  return (
    <div>
      <h2 className="item-title" id={title}>
        {title}
      </h2>
      <div className="item-collection">
        {Array(collectionLength)
          .fill(0)
          .map((element, index) => (
            <Item
              key={index}
              path={path}
              index={index + 1}
              setFunction={setFunction}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemCollection;
