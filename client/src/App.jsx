import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/page";
import Project from "./pages/Project/page";
import WIP from "./pages/WIP/page";
import Error from "./pages/Error/page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Project} />
        <Route path="/contact" Component={WIP} />
        <Route path="*" Component={Error} />
      </Routes>
    </>
  );
}

export default App;
