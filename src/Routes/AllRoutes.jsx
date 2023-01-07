import React from "react";
import { Route, Routes } from "react-router-dom";
import All from "../Pages/All";
import Html from "../Pages/Html";
import Css from "../Pages/Css";
import JavaScript from "../Pages/JavaScript";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<JavaScript />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;