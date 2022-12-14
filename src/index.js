import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestBae from "./TestFile/TestBae";
import SubDetailMan from "./sub_detail/SubDetailMan";
import Join from "./Page/Join";
import WGDP from "./Page/WGDP";
import MGDP from "./Page/MGDP";
import RGDP from "./Page/RGDP";
import RSBP from "./Page/RSBP";
import WSBP from "./Page/WSBP";
import KSBP from "./Page/KSBP";
import KGDP from "./Page/KGDP";
import BuyWoman from "./buy/BuyWoman";
import BuyKids from "./buy/BuyKids";
import BuyRing from "./buy/BuyRing";
import BuyMan from "./buy/BuyMan";
import Carousel from "./components/Carousel";
import ScrollToTop from "./components/ScrollToTop";
import SearchPage from "./Page/SearchPage";
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/TestBae" element={<TestBae />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/" element={<App />} />
          <Route path="/RGDP" element={<RGDP />} />
          <Route path="/KIDS" element={<KGDP />} />
          <Route path="/BuyMan" element={<BuyMan />} />
          <Route path="/BuyWoman" element={<BuyWoman />} />
          <Route path="/BuyWoman/:prdId" element={<BuyWoman />} />
          <Route path="/BuyKids" element={<BuyKids />} />
          <Route path="/BuyRing" element={<BuyRing />} />
          <Route path="/MGDP" element={<MGDP />} />
          <Route path="/SubDetailMan" element={<SubDetailMan />} />
          <Route path="/KSBP" element={<KSBP />} />
          <Route path="/WSBP" element={<WSBP />} />
          <Route path="/RSBP" element={<RSBP />} />
          <Route path="/WGDP" element={<WGDP />} />
          <Route path="/WGDP/:number" element={<WGDP />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Carousel" element={<Carousel />} />
        </Routes>
        <ScrollToTop /> {/* ?????? ????????? ??? ????????? ?????? */}
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
