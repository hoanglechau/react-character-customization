import { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Button from "./components/Button";
import Header from "./components/Header";
import ItemWrapper from "./components/ItemWrapper";
import Shortcuts from "./components/Shortcuts";

// Object containing all the selectable items with their total pictures available
const collection = {
  body: 17,
  eyes: 24,
  hair: 73,
  facialHair: 17,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  earrings: 32,
  necklace: 18,
  hats: 28,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

const App = () => {
  // States
  const [body, setBody] = useState(0);
  const [hair, setHair] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [eyebrows, setEyebrows] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [facialHair, setFacialHair] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [earrings, setEarrings] = useState(0);
  const [necklace, setNecklace] = useState(0);
  const [hats, setHats] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);

  // Function: generate random numbers from input number
  const generateRandom = (number) => Math.floor(Math.random() * number);

  // Function: randomize the items
  const randomize = () => {
    setBody(generateRandom(collection.body));
    setHair(generateRandom(collection.hair));
    setEyes(generateRandom(collection.eyes));
    setEyebrows(generateRandom(collection.eyebrows));
    setMouth(generateRandom(collection.mouth));
    setFacialHair(generateRandom(collection.facialHair));
    setGlasses(generateRandom(collection.glasses));
    setEarrings(generateRandom(collection.earrings));
    setNecklace(generateRandom(collection.necklace));
    setHats(generateRandom(collection.hats));
    setClothing1(generateRandom(collection.clothing1));
    setClothing2(generateRandom(collection.clothing2));
    setClothing3(generateRandom(collection.clothing3));
  };

  // Side effect: the randomize function is run when the page is initially rendered
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="avatar-wrapper">
          <Avatar
            body={body}
            hair={hair}
            eyes={eyes}
            eyebrows={eyebrows}
            mouth={mouth}
            facialHair={facialHair}
            glasses={glasses}
            earrings={earrings}
            necklace={necklace}
            hats={hats}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
          />
          <Button randomize={randomize} />
        </div>
        <div className="selections">
          <Shortcuts />
          <ItemWrapper
            collection={collection}
            setBody={setBody}
            setHair={setHair}
            setEyes={setEyes}
            setEyebrows={setEyebrows}
            setMouth={setMouth}
            setFacialHair={setFacialHair}
            setGlasses={setGlasses}
            setEarrings={setEarrings}
            setNecklace={setNecklace}
            setHats={setHats}
            setClothing1={setClothing1}
            setClothing2={setClothing2}
            setClothing3={setClothing3}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
