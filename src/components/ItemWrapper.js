import React from "react";
import ItemCollection from "./ItemCollection";

const ItemWrapper = ({
  collection,
  setBody,
  setHair,
  setEyes,
  setEyebrows,
  setMouth,
  setFacialHair,
  setGlasses,
  setEarrings,
  setNecklace,
  setHats,
  setClothing1,
  setClothing2,
  setClothing3,
}) => {
  return (
    <div className="item-wrapper">
      <ItemCollection
        title={"Body"}
        path={"body"}
        collectionLength={collection.body}
        setFunction={setBody}
      />
      <ItemCollection
        title={"Hair"}
        path={"hair"}
        collectionLength={collection.hair}
        setFunction={setHair}
      />
      <ItemCollection
        title={"Eyes"}
        path={"eyes"}
        collectionLength={collection.eyes}
        setFunction={setEyes}
      />
      <ItemCollection
        title={"Eyebrows"}
        path={"eyebrows"}
        collectionLength={collection.eyebrows}
        setFunction={setEyebrows}
      />
      <ItemCollection
        title={"Mouth"}
        path={"mouths"}
        collectionLength={collection.mouth}
        setFunction={setMouth}
      />
      <ItemCollection
        title={"Facial Hair"}
        path={"facial_hair"}
        collectionLength={collection.facialHair}
        setFunction={setFacialHair}
      />
      <ItemCollection
        title={"Glasses"}
        path={"accessories/glasses"}
        collectionLength={collection.glasses}
        setFunction={setGlasses}
      />
      <ItemCollection
        title={"Earrings"}
        path={"accessories/earrings"}
        collectionLength={collection.earrings}
        setFunction={setEarrings}
      />
      <ItemCollection
        title={"Necklace"}
        path={"accessories/necklace"}
        collectionLength={collection.necklace}
        setFunction={setNecklace}
      />
      <ItemCollection
        title={"Hats"}
        path={"accessories/hats"}
        collectionLength={collection.hats}
        setFunction={setHats}
      />
      <ItemCollection
        title={"Clothes 1"}
        path={"clothes/layer_1"}
        collectionLength={collection.clothing1}
        setFunction={setClothing1}
      />
      <ItemCollection
        title={"Clothes 2"}
        path={"clothes/layer_2"}
        collectionLength={collection.clothing2}
        setFunction={setClothing2}
      />
      <ItemCollection
        title={"Clothes 3"}
        path={"clothes/layer_3"}
        collectionLength={collection.clothing3}
        setFunction={setClothing3}
      />
    </div>
  );
};

export default ItemWrapper;
