import React from "react";
import "./Clients.scss";
import clientsImg from "../../assets/clientes.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Clients = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  return (
    <div className="clients-container">
      <motion.h2
        ref={titleRef}
        animate={{
          opacity: titleInView ? 1 : 0,
          transform: titleInView ? "translate(0%)" : "translate(-10%)",
        }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Some of the<span> clients we served</span>
      </motion.h2>
      <div className="clients-container-image">
        <img src={clientsImg} alt="clients" />
      </div>
    </div>
  );
};

export default Clients;
