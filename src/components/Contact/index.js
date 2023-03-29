import React from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b0to3nn",
        "template_ie8pria",
        e.target,
        "pi2_KdqeIQz4RygTL"
      )
      .then((response) => {
        if (response.status === 200) {
          toast.success("¡Consulta enviada correctamente!");
          return;
        }
        throw new Error("Ocurrio un error");
      })
      .catch((error) => {
        console.log(error)
        toast.error("Ocurrio un error. Intente nuevamente.");
      });
  };

  return (
    <div className="app__contact-container" id="contact">
      <div className="app__contact-text-container">
        <div className='app__contact-faro'></div>
        <motion.h2
          ref={titleRef}
          animate={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'transale(0%)' : 'translate(10%)'
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='app__contact-faro-title'
        >
          We provide a forward looking view to anticipate new regulations and advocate for change
        </motion.h2>
      </div>
      {/* <div className="app__contact-container-image"></div> */}
      <div className="app__contact-container-data">
        <div className="app__contact-container-form">
          <motion.h2
            ref={titleRef}
            animate={{
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? "translate(0%)" : "translate(10%)",
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Contact
          </motion.h2>
          <form className="app__contact-form" onSubmit={onSubmit}>
            <input placeholder="Name" name="user_name" />
            <input placeholder="Mail" name="user_email" />
            <textarea placeholder="Leave us your query" name="message"></textarea>
            <div></div>
            <input type="submit" value="Send" style={{ cursor: "pointer" }} />
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
