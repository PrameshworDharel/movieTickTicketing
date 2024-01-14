import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen1 from "../src/components";
import ScreenTwo from "./components/Screentwo";
import ScreenThree from "./components/Screenthree";
import Invoice from "./components/invoice";
import Movies from "./components/concert/Concert";
import Adminpage from "./components/admin/";
import Post from "./components/admin/post";
import Order from "./components/admin/order";
import User from "./components/admin/user";
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

        <Route path="/adminpage" element={<Adminpage />} />

        <Route path="/addpost" element={<Post />} />
        <Route path="/adminepage" element={<Adminpage />}></Route>
        <Route path="/orderpage" element={<Order />}></Route>
        <Route path="/userpage" element={<User />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
