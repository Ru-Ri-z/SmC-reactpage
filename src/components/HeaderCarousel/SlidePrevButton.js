import { React } from "react";
import { useSwiper } from "swiper/react";
import "./HeaderCarousel.scss";
import { IoIosArrowDropleft } from "react-icons/io";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <div
      className="arrow-container-header-left"
      onClick={() => swiper.slidePrev()}
    >
      <IoIosArrowDropleft color="#fff" size={40} />
    </div>
  );
}
