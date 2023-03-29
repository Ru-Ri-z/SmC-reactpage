import { React } from "react";
import { useSwiper } from "swiper/react";
import "./Team.scss";
import { IoIosArrowDropright } from "react-icons/io";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div className="arrow-container-right" onClick={() => swiper.slideNext()}>
      <IoIosArrowDropright color="#483c9a" size={40} />
    </div>
  );
}
