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

  return (
    <div>
      <Frame children={FrameItems} />
      <Toolbox
        open={Open}
        openFunction={openToolbox}
        addFrameItems={addFrameItem}
      />
    </div>
  );
}

export default App;
