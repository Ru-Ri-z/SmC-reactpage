import React from "react";
import "./RecentPublications.scss";
import imageRecent from "../../assets/recent-publications.png";
import cross from "../../assets/cross-green.png";
import { motion } from "framer-motion";
const RecentPublications = () => {
  return (
    <div className="recent-publication-container">
      <img
        src={imageRecent}
        alt="recent-publication"
        loading="lazy"
        className="image-recent-pub"
      />
      <motion.img
        src={cross}
        className="image-recent-pub-cross"
        alt="cross"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
          },
        }}
      />
    </div>
  );
};

export default RecentPublications;
