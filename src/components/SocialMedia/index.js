import React from "react";
import { Timeline } from 'react-twitter-widgets'
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import "./SocialMedia.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  const { width } = useWindowDimensions();
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <div className="app__social-media">
      <div className="app__highlighted-reports-title-h2-container">
        <motion.h2
          ref={titleRef}
          animate={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translate(0%)" : "translate(-10%)",
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="app__highlighted-reports-title-h2"
        >
          Follow <span>us</span>
        </motion.h2>
      </div>
      <div className="app__social-media-container">
        <div className="app__social-subcontainer">
          <FaTwitter
            size={60}
            color="#483c9a"
            style={{ marginBottom: "20px" }}
          />
          <Timeline
            dataSource={{
              sourceType: "url",
              url: "https://twitter.com/smcplus"
            }}
            options={{ height: width <= 400 ? '500' : '650', width: width < 768 ? "100%" : "504"}}
          />
        </div>
        <div className="app__social-subcontainer">
          <FaLinkedinIn
            size={60}
            color="#483c9a"
            style={{ marginBottom: "20px" }}
          />
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6952389094635155457"
            height="650"
            width={width < 768 ? "100%" : "504"}
            frameBorder="0"
            allowFullScreen=""
            title="Publicación integrada"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
