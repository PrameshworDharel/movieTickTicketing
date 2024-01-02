import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen1 from "../src/components";
import ScreenTwo from "./components/Screentwo";
import ScreenThree from "./components/Screenthree";
import Invoice from "./components/invoice";
import Movies from "./components/concert/Concert";
import RegisterPage from "./components/Login/register";
import LoginPage from "./components/Login/login";
import Adminpage from "./components/admin/adminpage";
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
          path="/invoice/:id/:ticketQuantity/:totalAmount/:fullName/:address/:city/:country"
          element={<Invoice />}
        />
        <Route path="/concerts" element={<Movies />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/adminpage" element={<Adminpage />} />
      </Routes>
    </Router>
  );
}

export default App;
