import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen1 from "../src/components";
import ScreenTwo from "./components/Screentwo";
import ScreenThree from "./components/Screenthree";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen1 />}></Route>
        <Route path="/screen2/:eventId" element={<ScreenTwo />} />
        <Route path="/chechout/screen3" element={<ScreenThree />} />
      </Routes>
    </Router>
  );
}

export default App;
