import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Graphics from "./pages/Graphics";
import Carts from "./pages/Carts";
import Reaches from "./pages/Reaches";
import MainNavigation from "./components/layout/MainNavigation";
import MainFooter from "./components/layout/MainFooter";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/graphics" element={<Graphics />}></Route>
        <Route path="/carts" element={<Carts />}></Route>
        <Route path="/reaches" element={<Reaches />}></Route>
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
