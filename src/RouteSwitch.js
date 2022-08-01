import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Archivepage from "./pages/Archivepage";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/archive' element={<Archivepage />} />
      </Routes>
    </BrowserRouter>
  );
}
