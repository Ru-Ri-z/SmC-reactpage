import React from "react";
import backgroundImage from "../../assets/coverpageimg.webp";
import backgroundImageMobile from "../../assets/mobile.webp";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Header.scss";
import useWindowsDimensions from "../../hooks/useWindowsDimensions";
import SocialOne from "../../assets/svgs/social/SocialOne";
import SocialTwo from "../../assets/svgs/social/SocialTwo";
import SocialThree from "../../assets/svgs/social/SocialThree";
const Header = () => {
  const { width } = useWindowsDimensions();
  return (
    <div className="app__header-container" id="home">
      <picture style={{ margin: 0, padding: 0 }}>
        <source srcSet={backgroundImage} media="(min-width: 1024px)" />
        <img
          src={backgroundImageMobile}
          alt="MDN"
          className="app__header-image-big"
        />
      </picture>
      {width < 1024 && <h2>Surf the Latam Digital Policy Scene</h2>}
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
    </div>
  );
};

export default Header;
