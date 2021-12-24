import { useState } from "react";
import Frame from "./lib/Frame/Frame";
import Toolbox from "./lib/toolbox/Toolbox";

function App() {
  const [Open, setOpen] = useState(true)

  const openToolbox = () => {
    setOpen(!Open)
  }

  return (
    <div>
      <Toolbox open={Open} openFunction={openToolbox}/>
      <Frame />
    </div>
  );
}

export default App;
