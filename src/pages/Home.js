import React, { useEffect } from "react";
import About from '../components/About'
import AboutCeo from "../components/AboutCeo";
import Banner from "../components/Banner";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import FeaturedReport from "../components/FeaturedReports";
import Header from "../components/Header";
import HeaderCarousel from "../components/HeaderCarousel";
import NewReport from "../components/NewReports";
import Services from "../components/Services";
import SuccesStories from '../components/SuccesStories'
// import ServicesAnimation from "../components/servicesSvg";
import SocialMedia from "../components/SocialMedia";
import Video from "../components/Video";
import useWindowDimensions from "../hooks/useWindowsDimensions";
import featuredReport from "../utils/constants/featuredReport";
import newReport from "../utils/constants/newReport";
import './Home.scss'

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="home">
      {/* {width < 1024 && <Header />} */}
      {/* {width < 1024 && <Video />} */}
      {/* {width > 1024 && <HeaderCarousel />} */}
      <HeaderCarousel />
      <Banner />
      <About />
      {/* {width > 1024 && <ServicesAnimation />} */}
      <Services />
      <AboutCeo />
      <NewReport />
      <FeaturedReport />
      <SuccesStories />
      <SocialMedia />
      {/* {width > 1024 && <RecentPublications />} */}
      <Clients />
      <Contact />
    </div>
  );
};

export default Home;
