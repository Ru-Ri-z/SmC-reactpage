import { React } from "react";
import { useSwiper } from "swiper/react";
import "./HeaderCarousel.scss";
import { IoIosArrowDropright } from "react-icons/io";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div
      className="arrow-container-header-right"
      onClick={() => swiper.slideNext()}
    >
      <IoIosArrowDropright color="#fff" size={40} />
    </div>
  );
}
