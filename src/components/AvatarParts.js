import React from "react";

const AvatarParts = ({ path, index, zIndex }) => {
  return (
    <img
      className="avatar-part"
      src={`character/${path}/${index}.png`}
      alt=""
      style={{ zIndex }}
    />
  );
};

export default AvatarParts;
