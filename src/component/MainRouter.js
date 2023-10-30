import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Pagenotfount from "./Pagenotfount";
import Tv from "./Tv";
import Sellcomportment from "./Sellcomportment";
import Todaydeal from "./Todaydeal";
import Selling from "./Selling";
import Buying from "./Buying";

export default function MainRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Pagenotfount />} />
          <Route path="minitv" element={<Tv />}></Route>
          <Route path="sell" element={<Sellcomportment />}>
            <Route path="selling" element={<Selling />}></Route>
            <Route path="buying" element={<Buying />}></Route>
          </Route>
          <Route path="todaydeal" element={<Todaydeal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
