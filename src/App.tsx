import { useState } from "react";
import Toolbox from "./lib/toolbox/Toolbox";

function App() {
  const [Open, setOpen] = useState(true)

  const openToolbox = () => {
    setOpen(!Open)
  }

  return (
    <div>
      <Toolbox open={Open} openFunction={openToolbox}/>
    </div>
  );
}

export default App;
