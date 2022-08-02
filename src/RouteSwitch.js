import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Homepage from "./pages/Homepage";
import Archivepage from "./pages/Archivepage";
import Aboutpage from "./pages/Aboutpage";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/archive' element={<Archivepage />} />
        <Route path='/about' element={<Aboutpage />} />
      </Routes>
    </BrowserRouter>
  );
}
