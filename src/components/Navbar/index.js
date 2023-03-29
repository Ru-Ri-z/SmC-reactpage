import React, { useState } from "react";
import "./Navbar.scss";
import NavbarList from "./NavbarList";
import Logo from "../../assets/svgs/logo/Logo";
import { Squash as Hamburger } from "hamburger-react";
import useGetScrollPosition from "../../hooks/useGetScrollPosition";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {

  const [displayReports, setDisplayReports] = useState(false);
  const [displayAbout, setDisplayAbout] = useState(false)
  const [displayServices, setDisplayServices] = useState(false)
  const [isOpen, setOpen] = useState(false);
  const scroll = useGetScrollPosition();
  const location = useLocation();

  return (
    <nav
      className={`app__navbar ${scroll > 30 && "scroll-navbar"} ${location?.pathname === "/other-reports" && "scroll-navbar"
        } ${location?.pathname === '/our-team' ||
        location?.pathname === '/success-stories' ||
        location?.pathname === '/upload'
        && 'our-team'}`}
    >
      <div className="app__navbar-logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ul className="app__navbar-links ">
        <li className="app__flex p-text app__li-nav">
          <Link to={`/`}>Home</Link>
        </li>
        <div
          onMouseEnter={() => setDisplayAbout(true)}
          onMouseLeave={() => setDisplayAbout(false)}
          className="app__li-report"
        >
          <li className="app__flex p-text app__li-nav">
            <Link to={`/#about`}>ABOUT</Link>
          </li>
          {displayAbout && (
            <div className={`app__li-report-dropdown`}>
              <li className='app__flex p-text app__li-nav' style={{ margin: 0 }}>
                <Link
                  to={`/#sebastian`}
                  style={{ color: `${scroll > 30 ? "#483c9a" : "#fff"}` }}
                >
                  ABOUT SEBASTIAN
                </Link>
              </li>
              <li className='app__flex p-text app__li-nav' style={{ margin: 0 }}>
                <Link
                  to={`/our-team`}
                  style={{ color: `${scroll > 30 ? "#483c9a" : "#fff"}` }}
                >
                  OUR TEAM
                </Link>
              </li>
            </div>
          )}
        </div>
        <li className="app__flex p-text app__li-nav">
          <Link to={`/success-stories`}>Success Stories</Link>
        </li>
        <div
          onMouseEnter={() => setDisplayServices(true)}
          onMouseLeave={() => setDisplayServices(false)}
          className="app__li-report"
        >
          <li className="app__flex p-text app__li-nav">
            <Link to={`/#services`}>Services</Link>
          </li>
          {displayServices && (
            <div className={`app__li-report-dropdown`}>
              <li className='app__flex p-text app__li-nav' style={{ margin: 5 }}>
                <Link
                  to={`/services/insights-regional-intelligence`}
                  style={{ color: `${scroll > 30 ? "#483c9a" : "#fff"}` }}
                >
                  Insights & regional inteligence
                </Link>
              </li>
              <li className='app__flex p-text app__li-nav' style={{ margin: 5 }}>
                <Link
                  to={`/services/coaching`}
                  style={{ color: `${scroll > 30 ? "#483c9a" : "#fff"}` }}
                >
                  Coaching
                </Link>
              </li>
              <li className='app__flex p-text app__li-nav' style={{ margin: 5 }}>
                <Link
                  to={`/services/localized-advocacy-support`}
                  style={{ color: `${scroll > 30 ? "#483c9a" : "#fff"}` }}
                >
                  Localized advocacy support
                </Link>
              </li>
              <li className='app__flex p-text app__li-nav' style={{ margin: 5 }}>
                <Link
                  to={`/services/positioning-strategy`}
                  style={{ color: `${scroll > 30 ? "#483c9a" : "#fff"}` }}
                >
                  Positioning strategy
                </Link>
              </li>
            </div>
          )}
        </div>
        <div
          onMouseEnter={() => setDisplayReports(true)}
          onMouseLeave={() => setDisplayReports(false)}
          className="app__li-report"
        >
          <li className="app__flex p-text app__li-nav">
            <Link to={`/#reports`}>Reports</Link>
          </li>
          {displayReports && (
            <div className={`app__li-report-dropdown`}>
              <li className='app__flex p-text app__li-nav' style={{ margin: 0 }}>
                <Link
                  to={`/#reports`}
                  style={{ color: `${scroll > 30 ? "#483c9a" : "#fff"}` }}
                >
                  NEW
                </Link>
              </li>
              <li className='app__flex p-text app__li-nav' style={{ margin: 0 }}>
                <Link
                  to={`/#featured`}
                  style={{ color: `${scroll > 30 ? '#483c9a' : '#fff'}` }}
                >
                  Featured
                </Link>
              </li>
              <li className='app__flex p-text app__li-nav' style={{ margin: 0 }}>
                <Link
                  to="/other-reports"
                  style={{ color: `${scroll > 30 ? "#483c9a" : "#fff"}` }}
                >
                  ALL
                </Link>
              </li>
            </div>
          )}
        </div>
        <li className="app__flex p-text app__li-nav">
          <Link to={`/#contact`}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger-container">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={32}
          color={isOpen ? "#ffffff" : "#ffffff"}
        />
      </div>
      <div
        className="app__navbar-menu"
        style={{ right: `${isOpen ? "0" : "-100%"}` }}
      >
        <ul>
          {NavbarList.map((item) => (
            <li key={item}>
              <Link to={item === 'success stories' ? '/success-stories' : `/#${item}`} onClick={() => setOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
