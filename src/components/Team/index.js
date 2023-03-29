import React from "react";
import "./Team.scss";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import SlideNextButton from "./SlideNextButton";
// import SlidePrevButton from "./SlidePrevButton";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSurfContext } from '../../context'

const Team = () => {
  const { ourTeam } = useSurfContext()
  const { width } = useWindowDimensions();
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  return (
    <div className="app__team-container" id='ourteam'>
      <div className="app__team-title-container">
        <motion.h2
          ref={titleRef}
          animate={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translate(0%)" : "translate(-10%)",
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our <span>team</span>
        </motion.h2>
      </div>

      <div className="app__team-slider-container">
        {ourTeam?.map((item, idx) => (
          <div className="app__team-slider-card" key={idx}>
            <div className="app__team-slider-card-img">
              <img src={item.url} alt={item.nombre} />
            </div>
            <div className="app__team-slider-card-data">
              <h3 className={`app__team-slider-card-data-title`}>
                {item.nombre}
              </h3>
              <p
                className={`app__team-slider-card-data-desc show-slider-desc`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
