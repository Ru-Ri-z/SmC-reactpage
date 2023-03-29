import React from "react";
import backgroundImage from "../../assets/coverpageimg.webp";
import backgroundImageMobile from "../../assets/mobile.webp";
import bannernewreport from "../../assets/bannernewreport.jpeg";
import "./HeaderCarousel.scss";
import useWindowsDimensions from "../../hooks/useWindowsDimensions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import video2 from "../../assets/video1.mov";
import SlidePrevButton from "./SlidePrevButton";
import SlideNextButton from "./SlideNextButton";
import SocialOne from "../../assets/svgs/social/SocialOne";
import SocialTwo from "../../assets/svgs/social/SocialTwo";
import SocialThree from "../../assets/svgs/social/SocialThree";
import pdf from "../../assets/pdfs/compraspublicas.pdf";
import { useSurfContext } from '../../context'

const HeaderCarousel = () => {
  const { width } = useWindowsDimensions();
  const { newReport } = useSurfContext();
  const handlerDownload = () => {
    var link = document.createElement('a');
    link.rel = 'noopener noreferrer'
    link.target = '_blank'
    link.href = pdf
    link.download = 'compraspublicas.pdf'
    link.click();
  }

  return (
    <div className="app__header-container" id="home">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "100%" }}>
          {width > 768 ?
            <img
              src={backgroundImage}
              alt="MDN"
              className="app__header-image-big-carousel"
            />
            :
            <img
              src={require('../../assets/fondo-home-mobile.jpg')}
              alt='MDN'
              className='app__header-image-big-carousel'
            />
          }
          <div className="app__social-media-icons">
            <a href="mailto:smcconsultingweb@gmail.com">
              <SocialOne />
            </a>
            <a
              href="https://www.linkedin.com/company/smcplus/"
              rel="nooponer noreferrer"
              target="_blank"
            >
              <SocialTwo />
            </a>
            <a
              href="https://twitter.com/SMCplus"
              rel="nooponer noreferrer"
              target="_blank"
            >
              <SocialThree />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <video
            src={video2}
            autoPlay={true}
            controls
            loop
            muted
            className='videoHeader'
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className='app__container_report'>
            <h2 className='report-title'>New <span>report</span></h2>
            <h2 className='title'>{newReport?.title}</h2>
            <h2 className='date'>{newReport?.date}</h2>
            <a
              href={newReport?.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={newReport?.title}
              className="button-download"
            >
              Download
            </a>
            <img
              src={newReport?.imageUrl}
              title={`new report`}
              loading="lazy"
              alt='new report'
            />
          </div>
        </SwiperSlide>
        <SlidePrevButton />
        <SlideNextButton />
      </Swiper>
    </div>
  );
};

export default HeaderCarousel;
