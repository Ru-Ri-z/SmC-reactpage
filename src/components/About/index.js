import React from "react";
import "../AboutCeo/AboutCeo.scss";
import "../Button/Button.scss";
import Monitor from "../../assets/svgs/about/Monitor";
import Pencil from "../../assets/svgs/about/Pencil";
import Eye from "../../assets/svgs/about/Eye";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <div className="app__about-container" id="about" ref={titleRef}>
      <div className="app__about-container-data">
        <motion.h2
          ref={titleRef}
          animate={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translate(0%)" : "translate(-10%)",
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          About <span>us</span>
        </motion.h2>
        <motion.p
          ref={titleRef}
          animate={{ opacity: titleInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <span>
            SmC+ is a digital policy strategy firm focused and based in Latin
            America. SmC+ is today serving global technology companies and
            international organizations to understand and act in the complex
            regional policy scene.{" "}
          </span>
        </motion.p>
        <motion.a
          className="button"
          ref={titleRef}
          animate={{ opacity: titleInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          href="https://twitter.com/search?q=%23SurfTheLatamDigitalPolicyScene&src=typed_query"
          rel="nooponer noreferrer"
          target="_blank"
        >
          Follow #SurfTheLatamDigitalPolicyScene
        </motion.a>
      </div>
      <div className="app__about-container-description">
        <motion.div
          ref={titleRef}
          animate={{ opacity: titleInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            ref={titleRef}
            animate={{
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? 'translate(0%)' : 'translate(10%))'
            }}
            transition={{ duration: 0.9, delay: 1.0 }}
          >
            <span>
              <Monitor />
            </span>
            <p>
              <span>
                Experts in digital public affairs with high-level access to
                regional decision- makers on public policy and strategy
              </span>
            </p>
          </motion.div>
          <motion.div
            ref={titleRef}
            animate={{
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? 'translate(0%)' : 'translate(10%)'
            }}
            transition={{ duration: 1.2, delay: 1.4 }}
          >
            <span>
              <Pencil />
            </span>
            <p>
              <span>
                Brief and visual reports supported by the possibility to
                access to exclusive primary information
              </span>
            </p>
          </motion.div>
          <motion.div
            ref={titleRef}
            animate={{
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? 'translate(0%)' : 'translate(10%)'
            }}
            transition={{ duration: 1.6, delay: 1.8 }}
          >
            <span>
              <Eye />
            </span>
            <p>
              <span>
                High experience in managing the public agenda of national
                trade associations and multilateral organizations
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
