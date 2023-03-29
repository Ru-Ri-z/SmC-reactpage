import React, { useState } from "react";
import "./NewReports.scss";
import cross from "../../assets/cross-green.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ShareButtons from "../ShareMediaButtons";
import { useSurfContext } from '../../context'

const NewReport = () => {
  const { newReport } = useSurfContext();
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-10px 0px",
  });
  const [paraRef, paraInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const [share, setShare] = useState(false);

  const handlerDownload = (report) => {
    const link = document.createElement("a");
    link.rel = "noopener noreferrer"
    link.target = "_blank"
    link.href = report?.pdfUrl;
    link.download = report?.title;
    link.click();
  }

  return (
    <div className="app__highlighted-reports-container" id="reports">
      <motion.img
        className="app__highlighted-reports-cross"
        src={cross}
        alt="cross"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            repeatDelay: 0,
          },
        }}
      />
      <div className="app__highlighted-reports-title">
        <motion.h2
          ref={titleRef}
          animate={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translate(0%)" : "translate(-10%)",
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          New <span>Report</span>
        </motion.h2>
      </div>
      <div className="app__slider-container-reports">
        <div className="app__highlighted-reports-slider">
          <div className="app__highlighted-reports-slider-frame">
            <img
              src={newReport?.imageUrl}
              width="295"
              height="412"
              allow="autoplay"
              title={`new report`}
              loading="lazy"
              alt='new report'
            />
          </div>
          <motion.div
            className="app__highlighted-reports-slider-paragraphs"
            ref={paraRef}
            animate={{ opacity: paraInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3>{newReport?.title}</h3>
            <p>{newReport?.paragraph}</p>
            <div className="button-more-reports">
              <img alt='download' src={require('../../assets/download-button.png')} onClick={() => handlerDownload(newReport)} />
              <img alt='share' src={require('../../assets/share-button.png')} onClick={() => setShare(!share)} />
              {share && (
                <ShareButtons item={newReport} setShare={setShare} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NewReport;
