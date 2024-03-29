import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
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
    if (window.pageYOffset > navHeight) {
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
    <React.Fragment>
      <nav
        id="nav"
        ref={nav}
        className={`flex  h-12 items-center justify-between px-4 md:px-0 md:justify-around ${
          showNavbar ? "show-navbar" : ""
        }    `}
      >
        <div className=" text-3xl  font-bold text-white cursor-pointer ">
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
          <HashLink to="/#contact" className=" link-nav transition-all">
            Contact
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
      </nav>

      <div
        className={`navbar   text-center w-full text-white   md:hidden ${
          isBurgerOpen ? "burger-animation" : "burger-animation-back"
        }  `}
      >
        <nav
          className={` menu-open  flex  flex-col justify-center space-y-4 items-center p-20 bg-lightBlack rounded-sm   md:hidden ${
            showNavbar ? "show-navbar " : ""
          }   `}
        >
          <HashLink to="/">Home</HashLink>
          <HashLink to="/#about">About</HashLink>
          <HashLink to="/#portfolio">Projects</HashLink>
          <HashLink to="/#contact">Contact</HashLink>
        </nav>
      </div>
      {/* <hr /> */}
    </React.Fragment>
  );
}
