import React from "react";
import "./Services.scss";
import Brain from "../../assets/svgs/services/Brain";
import Table from "../../assets/svgs/services/Table";
import Waves from "../../assets/svgs/services/Waves";
import Surf from "../../assets/svgs/services/Surf";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const navigate = useNavigate();
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <div className="app__services-container" id="services">
      <div className="app__services-container-center">
        <div className="app__services-container-title">
          <motion.h2
            ref={titleRef}
            animate={{
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? "translate(0%)" : "translate(-10%)",
            }}
            transition={{ duration: 0.5 }}
          >
            A set of services <span>designed for you</span>
          </motion.h2>
        </div>
        <div className="app__services-container-cards">
          <div
            className="app__services-container-card"
            onClick={() => navigate("/services/insights-regional-intelligence")}
          >
            <div>
              <Brain />
            </div>
            <h3>Insights & regional intelligence</h3>
          </div>
          <div
            className="app__services-container-card"
            onClick={() => navigate("/services/coaching")}
          >
            <div>
              <Table />
            </div>
            <h3>Coaching</h3>
          </div>
          <div
            className="app__services-container-card"
            onClick={() => navigate("/services/localized-advocacy-support")}
          >
            <div>
              <Waves />
            </div>
            <h3>Localized advocacy support</h3>
          </div>
          <div
            className="app__services-container-card"
            onClick={() => navigate("/services/positioning-strategy")}
          >
            <div>
              <Surf />
            </div>
            <h3>Positioning strategy</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
