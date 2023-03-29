import React, { useEffect } from "react";
import "./ServicesExtended.scss";
import '../Button/Button.scss'
import servicesExtended from "../../utils/constants/servicesExtended";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const ServicesExtended = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const filterService = servicesExtended.filter((item) => item.id === id);

  useEffect(() => {
    if (!filterService.length) {
      navigate("/");
    }
  }, [filterService, navigate]);

  return (
    <div>
      {filterService.map((item, idx) => (
        <div
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.backImage})`,
          }}
          key={idx}
          className="service-extended-container"
        >
          <div className='service-extended-subcontainer'>
            <div className="service-extended-title">
              <motion.h2
                animate={{
                  opacity: [0, 1],
                  transform: ["translate(-10%)", "translate(0%)"],
                }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {item.title}
              </motion.h2>
            </div>
            <div className="service-extended-descriptions">
              {item.descriptions.map((description, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    opacity: [0, 1],
                  }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <h5>{description.title}</h5>
                  <p>{description.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="button-link-services"
              animate={{
                opacity: [0, 1],
              }}
              transition={{ duration: 0.5, delay: 1}}
              >
              <Link to="/#services" className='services-link'>Back</Link>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesExtended;
