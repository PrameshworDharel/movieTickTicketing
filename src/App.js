import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen1 from "../src/components";
import ScreenTwo from "./components/Screentwo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen1 />}></Route>
        <Route path="/screen2/:eventId" element={<ScreenTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
