import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Archivepage from "./pages/Archivepage";
import Aboutpage from "./pages/Aboutpage";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/archive' element={<Archivepage />} />
        <Route path='/about' element={<Aboutpage />} />
      </Routes>
    </BrowserRouter>
  );
}
