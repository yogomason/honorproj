import { useEffect, useState } from "react";
import Button from "./lib/Button/Button";
import EditForm from "./lib/EditForm/EditForm";
import Frame from "./lib/Frame/Frame";
import { FrameItemProps } from "./types";



function App() {



  const [Open, setOpen] = useState(true)
  const [key, setKey] = useState(1)
  const [FrameItems, setFrameItems] = useState<FrameItemProps[]>([{child: <div></div>, key: 0}])
  const [currentItem , setCurrentItem] = useState<FrameItemProps>(FrameItems[0])

  
    const deleteFrameItem = (key: number) => {
      setFrameItems(FrameItems.filter((item) => item.key !== key))
    }

    // set current item to the item to be edited by getting the key of the item as a parameter and using it to find the item in the array
    const editFrameItem = (key: number) => {
      console.log(key)
      console.log(FrameItems)
    }


  
  const openToolbox = () => {
    setOpen(!Open)
  }

  const addFrameItem = (item: string) => {
    if (item === "BUTTON") {
      setFrameItems([...FrameItems, {child: <Button keyprop={key} deleteItem={deleteFrameItem} editItem={editFrameItem} />, key: key}])
      setFrameItems([...FrameItems, {child: <div></div>, key: 99999}])
      setKey(key + 1)
  }
}

useEffect(() => {
  console.log("App.tsx: useEffect()");
  console.log(FrameItems);
}, [FrameItems]);

  return (
    <div>
      <Frame children={FrameItems} open={Open} openFunction={openToolbox} addFrameItems={addFrameItem} />
      <EditForm element={currentItem}/>
    </div>
  );
}

export default App;
