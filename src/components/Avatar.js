import React from "react";
import AvatarParts from "./AvatarParts";

const Avatar = (
  {
    body,
    hair,
    eyes,
    eyebrows,
    mouth,
    facialHair,
    glasses,
    earrings,
    necklace,
    hats,
    clothing1,
    clothing2,
    clothing3,
  },
  ref
) => {
  return (
    <div className="avatar">
      <AvatarParts path="body" index={body} zIndex={0} />
      <AvatarParts path="hair" index={hair} zIndex={6} />
      <AvatarParts path="eyes" index={eyes} zIndex={1} />
      <AvatarParts path="eyebrows" index={eyebrows} zIndex={4} />
      <AvatarParts path="noses" index={0} zIndex={4} />
      <AvatarParts path="mouths" index={mouth} zIndex={4} />
      <AvatarParts path="facial_hair" index={facialHair} zIndex={7} />
      <AvatarParts path="accessories/glasses" index={glasses} zIndex={8} />
      <AvatarParts path="accessories/earrings" index={earrings} zIndex={8} />
      <AvatarParts path="accessories/necklace" index={necklace} zIndex={5} />
      <AvatarParts path="accessories/hats" index={hats} zIndex={9} />
      <AvatarParts path="clothes/layer_1" index={clothing1} zIndex={2} />
      <AvatarParts path="clothes/layer_2" index={clothing2} zIndex={3} />
      <AvatarParts path="clothes/layer_3" index={clothing3} zIndex={4} />
    </div>
  );
};

export default Avatar;
