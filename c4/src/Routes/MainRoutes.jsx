import React from "react";
import {Route, Routes} from "react-router-dom"

import About from "../components/About";
import Home from "../components/Home";
import Kids from "../components/Kids";
import Men from "../components/Men";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Women from "../components/Women";

const MainRoutes = () => {
  return <>
  {/* Navbar and all the routes */}
  
  <Navbar/>
  <Routes>
    <Route path = "home" element={<Home/>}/>
    <Route path = "about" element={<About/>}/>
    <Route path = "product" element={<Products/>}/>

    <Route path = "men" element={<Men/>}/>
    <Route path = "women" element={<Women/>}/>
    <Route path = "Kids" element={<Kids/>}/>

  </Routes>
  </>;
};
export { MainRoutes };
