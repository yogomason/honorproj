import { useState } from "react";
import Button from "./lib/Button/Button";
import Frame from "./lib/Frame/Frame";
import { FrameItemProps } from "./types";



function App() {
  const [Open, setOpen] = useState(true)
  const [key, setKey] = useState(1)
  const [FrameItems, setFrameItems] = useState<FrameItemProps[]>([{child: <div></div>, key: 0}])
  
    const deleteFrameItem = (key: number) => {
      setFrameItems(FrameItems.filter((item) => item.key !== key))
    }
  
  const openToolbox = () => {
    setOpen(!Open)
  }

  const addFrameItem = (item: string) => {
    if (item === "BUTTON") {
    setFrameItems([...FrameItems, {child: <Button keyprop={key} deleteItem={deleteFrameItem}/>, key: key}])
    setKey(key + 1)
  }
}

  return (
    <div>
      <Frame children={FrameItems} open={Open} openFunction={openToolbox} addFrameItems={addFrameItem} deleteFrameItem={deleteFrameItem} />
    </div>
  );
}

export default App;
