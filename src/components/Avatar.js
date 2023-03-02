import React from "react";
import AvatarPart from "./AvatarPart";

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
      <AvatarPart path="body" index={body} zIndex={0} />
      <AvatarPart path="hair" index={hair} zIndex={6} />
      <AvatarPart path="eyes" index={eyes} zIndex={1} />
      <AvatarPart path="eyebrows" index={eyebrows} zIndex={4} />
      <AvatarPart path="noses" index={0} zIndex={4} />
      <AvatarPart path="mouths" index={mouth} zIndex={4} />
      <AvatarPart path="facial_hair" index={facialHair} zIndex={7} />
      <AvatarPart path="accessories/glasses" index={glasses} zIndex={8} />
      <AvatarPart path="accessories/earrings" index={earrings} zIndex={8} />
      <AvatarPart path="accessories/necklace" index={necklace} zIndex={5} />
      <AvatarPart path="accessories/hats" index={hats} zIndex={9} />
      <AvatarPart path="clothes/layer_1" index={clothing1} zIndex={2} />
      <AvatarPart path="clothes/layer_2" index={clothing2} zIndex={3} />
      <AvatarPart path="clothes/layer_3" index={clothing3} zIndex={4} />
    </div>
  );
};

export default Avatar;
