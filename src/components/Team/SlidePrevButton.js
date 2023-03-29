import { React } from "react";
import { useSwiper } from "swiper/react";
import "./Team.scss";
import { IoIosArrowDropleft } from "react-icons/io";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <div className="arrow-container-left" onClick={() => swiper.slidePrev()}>
      <IoIosArrowDropleft color="#483c9a" size={40} />
    </div>
  );
}
