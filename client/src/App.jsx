import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/page";
import WIP from "./pages/WIP/page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={WIP} />
        <Route path="/keyboards" Component={WIP} />
        <Route path="/contact" Component={WIP} />
        <Route path="*" Component={WIP} />
      </Routes>
    </>
  );
}

export default App;
