import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import "./Navbar.css";
export default function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const nav = useRef(null);
  const location = useLocation();

  const handleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleScroll = () => {
    const navHeight = nav.current.getBoundingClientRect().height;
    if (window.scrollY > navHeight) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    setIsBurgerOpen(false);
  }, [location]);

  useEffect(() => {
    const body = document.body;

    if (isBurgerOpen) {
      body.style.overflow = "hidden";
      body.style.overflowX = "hidden";
    } else {
      body.style.overflow = "scroll";
      body.style.overflowX = "hidden";
    }

    return () => {
      body.style.overflow = "scroll";
    };
  }, [isBurgerOpen]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [window]);

  return (
    <div className={`header`}>
      <nav
        id="nav"
        ref={nav}
        className={` ${showNavbar ? "show-navbar" : ""} transition
  `}
      >
        <div
          className={
            "flex h-12 items-center justify-between 2xl:max-w-[1500px] xl:max-w-[1230px] md:max-w-none md:p-8 p-4 sm:p-4 m-auto w-full`}"
          }
        >
          <div className=" text-3xl  font-thin text-white cursor-pointer ">
            <Link to="/"> VK</Link>
          </div>
          <div className="hidden link-items flex-row space-x-12 items-center text-white md:flex">
            <HashLink to="/#home" className=" link-nav transition-all">
              Home{"  "}
            </HashLink>
            <HashLink to="/#about" className=" link-nav transition-all">
              About
            </HashLink>
            <HashLink to="/#portfolio" className=" link-nav transition-all">
              Projects
            </HashLink>
            <HashLink to="/#experience" className=" link-nav transition-all">
              Experience
            </HashLink>
            <HashLink to="/#skills" className=" link-nav transition-all">
              Skills
            </HashLink>
          </div>

          {/* hamburger */}

          <div className="md:hidden ">
            <div
              onClick={handleBurger}
              className={`text-white text-xl transition-all cursor-pointer relative z-50 `}
            >
              {isBurgerOpen ? "X " : <RxHamburgerMenu size={25} />}
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`navbar   text-center w-full text-white   md:hidden ${
          isBurgerOpen ? "burger-animation" : "burger-animation-back"
        }  `}
      >
        <nav
          className={` menu-open  flex  flex-col justify-center space-y-4 items-center p-20 bg-lightBlue rounded  md:hidden ${
            showNavbar ? "show-navbar " : ""
          }   `}
        >
          <HashLink to="/">Home</HashLink>
          <HashLink to="/#about">About</HashLink>
          <HashLink to="/#portfolio">Projects</HashLink>
          <HashLink to="/#experience">Experience</HashLink>
          <HashLink to="/#skills">Skills</HashLink>
        </nav>
      </div>
      {/* <hr /> */}
    </div>
  );
}
