import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Screen1 from "../src/components";
import ScreenTwo from "./components/Screentwo";
import ScreenThree from "./components/Screenthree";
import Invoice from "./components/invoice";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen1 />}></Route>
        <Route path="/screen2/:eventId" element={<ScreenTwo />} />
        <Route
          path="/chechout/:id/:ticketQuantity/:totalAmount"
          element={<ScreenThree />}
        />
        <Route
          path="/invoice/:id/:ticketQuantity/:totalAmount"
          element={<Invoice />}
        />
      </Routes>
    </Router>
  );
}

export default App;
