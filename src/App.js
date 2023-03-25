import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Charts from "./pages/Charts";
import Carts from "./pages/Carts";
import Others from "./pages/Others";
import MainNavigation from "./components/layout/MainNavigation";
import MainFooter from "./components/layout/MainFooter";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/charts" element={<Charts />}></Route>
        <Route path="/carts" element={<Carts />}></Route>
        <Route path="/others" element={<Others />}></Route>
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
