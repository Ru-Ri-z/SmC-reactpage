import React from "react";
import { HashLink as Link } from 'react-router-hash-link'
import "./AboutCeo.scss";
import "../Button/Button.scss";
import imageCeo from "../../assets/imageCeo.png";
import cross from "../../assets/cross.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutCeo = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  const [ceoRef, ceoInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  return (
    <div className="about-section" ref={titleRef}>
      <div className="app__about-containerCeo" id="sebastian" ref={ceoRef}>
        <div className="app__about-container-imageCeo">
          <div>
            <img src={imageCeo} alt="ceo" />
            <motion.img
              initial={{ top: "0%", right: "30%", opacity: 0, rotate: 0 }}
              whileInView={{ top: "70%", right: "30%", opacity: 1 }}
              animate={{ rotate: 360 }}
              transition={{
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "linear",
                },
                default: { duration: 1.5, ease: "easeInOut" },
              }}
              src={cross}
              alt="ceo"
              className="cross"
            />
          </div>
        </div>
        <div className="app__about-container-dataCeo">
          <motion.h2
            ref={ceoRef}
            animate={{
              opacity: ceoInView ? 1 : 0,
              transform: ceoInView ? "translate(0%)" : "translate(10%)",
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            About <span>Sebastian</span>
          </motion.h2>
          <motion.p
            ref={ceoRef}
            animate={{ opacity: ceoInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span>
              Sebastian Cabello is the Founder and CEO of SmC+. He is an
              accomplished expert with vast experience driving collective
              action, public-private partnerships and technology and public
              policy advocacy in Latin America.
            </span>
          </motion.p>
          <motion.p
            ref={ceoRef}
            animate={{ opacity: ceoInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span>
              Sebastian founded SmC+ in 2020 that has established as a key
              provider of policy consulting services to global digital and ICT
              players as well as multilateral institutions in Latin America such
              as the Inter-American Bank (IDB), CAF Development Bank, UN
              Economic Commission on Latin America, the Latin American Internet
              Association (ALAI), and the Fiber Broadband Association.
            </span>
          </motion.p>
          <motion.p
            ref={ceoRef}
            animate={{ opacity: ceoInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span>
              Between 2010 and end-2018, he was Head of Latin America at the
              GSMA, the global association of the mobile industry, and led the
              organization’s advocacy activities in the region.
            </span>
          </motion.p>
          <motion.p
            ref={ceoRef}
            animate={{ opacity: ceoInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span>
              He holds a “Licenciado” degree in Economics and a Master in
              International Affairs from UC San Diego and has been a Fulbright
              scholar. He is also research fellow at the Center for Technology
              and Society (CeTyS) at Universidad de San Andres, Argentina.
            </span>
          </motion.p>
        </div>

      </div>
      <div className='buttonLink' >
        <Link to={`/our-team`} className='link'>Our Team</Link>
      </div>
    </div >
  );
};

export default AboutCeo;
