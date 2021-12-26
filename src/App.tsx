import { useState } from "react";
import Frame from "./lib/Frame/Frame";
import Toolbox from "./lib/Toolbox/Toolbox";

function App() {
  const [Open, setOpen] = useState(true);
  const [FrameItems, setFrameItems] = useState<JSX.Element[]>([]);

  const openToolbox = () => {
    setOpen(!Open);
  };

  const addFrameItem = (item: JSX.Element) => {
    setFrameItems([...FrameItems, item]);
  };

  const currProp = (setText: any) => {
    setText("hello")
  }

  return (
    <div>
      <Frame children={FrameItems} />
      <Toolbox
        open={Open}
        openFunction={openToolbox}
        addFrameItems={addFrameItem}
        currProp={currProp}
      />
    </div>
  );
}

export default App;
