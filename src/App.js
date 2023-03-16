import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Graphics from "./pages/Graphics";
import Carts from "./pages/Carts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/graphics" element={<Graphics />}></Route>
        <Route path="/carts" element={<Carts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
