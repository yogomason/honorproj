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
      <Frame />
      <Toolbox open={Open} openFunction={openToolbox}/>
    </div>
  );
}

export default App;
