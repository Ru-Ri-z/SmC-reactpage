import React, { useLayoutEffect, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import { Home, Services } from "../pages";
import OtherReportsPage from "../pages/OtherReportsPage";
import SuccessStories from "../pages/SuccessStories";
import Upload from '../pages/Upload'

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

const Navigation = () => {

  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="services/:id" element={<Services />} />
            <Route path="other-reports" element={<OtherReportsPage />} />
            <Route path="our-team" element={<Team />} />
            <Route path='success-stories' element={<SuccessStories />} />
            <Route path='upload' element={<Upload />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  )
};

export default Navigation;
