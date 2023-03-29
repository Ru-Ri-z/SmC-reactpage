import React, { useState } from "react";
import "./FeaturedReports.scss";
// import pdfES from "../../assets/pdfs/nuevasdinamicasES.pdf";
// import pdfEN from "../../assets/pdfs/nuevasdinamicasEN.pdf";
// import pdfExPOR from "../../assets/pdfs/executivesumPor.pdf";
// import pdfExES from "../../assets/pdfs/executivesumES.pdf";
// import pdfExEn from "../../assets/pdfs/executivesumEN.pdf";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ShareButtons from "../ShareMediaButtons";
import { useSurfContext } from '../../context'

const FeaturedReport = () => {
  const { featuredReport } = useSurfContext();
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  const [paraRef, paraInView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const [share, setShare] = useState(false)

  const handlerDownload = (item) => {
    const link = document.createElement("a");
    link.rel = "noopener noreferrer";
    link.target = "_blank";
    link.href = item?.pdfUrl;
    link.download = item?.title;
    link.click();
  };

  return (
    <div className="app__featured-reports-container" id="featured">
      <div className="app__highlighted-reports-title">
        <motion.h2
          ref={titleRef}
          animate={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translate(0%)" : "translate(-10%)",
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Featured <span>Report</span>
        </motion.h2>
      </div>
      <div className="app__slider-container-reports">
        <div className="app__highlighted-reports-slider">
          <div className="app__highlighted-reports-slider-frame">
            <img
              src={featuredReport?.imageUrl}
              width="295"
              height="412"
              allow="autoplay"
              alt='featured report'
              loading="lazy"
            />
          </div>
          <motion.div
            className="app__highlighted-reports-slider-paragraphs"
            ref={paraRef}
            animate={{ opacity: titleInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3>{featuredReport?.title}</h3>
            <p>{featuredReport?.paragraph}</p>
            {/* <div> */}
            {/*   <a */}
            {/*     href={pdfES} */}
            {/*     target="_blank" */}
            {/*     rel="noopener noreferrer" */}
            {/*     download="nuevasdinamicasES.pdf" */}
            {/*   > */}
            {/*     Full report Spanish */}
            {/*   </a> */}
            {/*   <a */}
            {/*     href={pdfEN} */}
            {/*     target="_blank" */}
            {/*     rel="noopener noreferrer" */}
            {/*     download="nuevasdinamicasEN.pdf" */}
            {/*   > */}
            {/*     Full report English */}
            {/*   </a> */}
            {/*   <a */}
            {/*     href={pdfExPOR} */}
            {/*     target="_blank" */}
            {/*     rel="noopener noreferrer" */}
            {/*     download="nuevasdinamicasPOR.pdf" */}
            {/*   > */}
            {/*     Executive Summary Portuguese */}
            {/*   </a> */}
            {/*   <a */}
            {/*     href={pdfExES} */}
            {/*     target="_blank" */}
            {/*     rel="noopener noreferrer" */}
            {/*     download="executivesumES.pdf" */}
            {/*   > */}
            {/*     Executive Summary Spanish */}
            {/*   </a> */}
            {/*   <a */}
            {/*     href={pdfExEn} */}
            {/*     target="_blank" */}
            {/*     rel="noopener noreferrer" */}
            {/*     download="executivesumEN.pdf" */}
            {/*   > */}
            {/*     Executive Summary English */}
            {/*   </a> */}
            {/* </div> */}
            <div className="button-more-reports">
              <img
                alt="download"
                src={require("../../assets/download-button.png")}
                onClick={() => handlerDownload(featuredReport)}
              />
              <img
                alt="share"
                src={require("../../assets/share-button.png")}
                onClick={() => setShare(!share)}
              />
              {share && (
                <ShareButtons item={featuredReport} setShare={setShare} />
              )}
              <div>
                <Link className="link" to="/other-reports">
                  +
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReport;
