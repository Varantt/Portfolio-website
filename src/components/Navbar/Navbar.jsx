import React, { useEffect, useRef, useState, useCallback } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useLocation } from "react-router-dom";

import "./Navbar.css";

const NAV_LINKS = [
  { to: "/#about", text: "About" },
  { to: "/#portfolio", text: "Projects" },
  { to: "/#experience", text: "Experience" },
  { to: "/#skills", text: "Skills" },
];

export default function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const nav = useRef(null);
  const location = useLocation();

  const handleDarkMode = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  }, [isDarkMode]);

  const handleBurger = useCallback(() => {
    setIsBurgerOpen((prevState) => !prevState);
  }, []);

  const handleScroll = useCallback(() => {
    if (nav.current) {
      const navHeight = nav.current.getBoundingClientRect().height;
      setShowNavbar(window.scrollY > navHeight);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    setIsBurgerOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isBurgerOpen ? "hidden" : "scroll";
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isBurgerOpen]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const renderNavLinks = (isMobile = false) =>
    NAV_LINKS.map(({ to, text }) => (
      <HashLink
        key={to}
        to={to}
        className={isMobile ? "" : "link-nav transition-all font-medium"}
      >
        {text}
      </HashLink>
    ));

  return (
    <div className="header">
      <nav
        id="nav"
        ref={nav}
        className={`${showNavbar ? "show-navbar" : ""} transition`}
      >
        <div className="flex h-12 items-center justify-between 2xl:max-w-[1500px] xl:max-w-[1230px] lg:max-w-[1100px] md:max-w-none md:p-8 p-4 m-auto w-full">
          <div className="text-3xl font-normal text-blackRaisin dark:text-offWhite cursor-pointer">
            <Link to="/">VK</Link>
          </div>
          <div className="hidden link-items flex-row space-x-12 items-center text-blackRaisin dark:text-offWhite md:flex">
            {renderNavLinks()}
          </div>
          <div className="dark-mode cursor-pointer" onClick={handleDarkMode}>
            {isDarkMode ? (
              <MdOutlineDarkMode color="white" size={20} />
            ) : (
              <MdOutlineLightMode size={20} />
            )}
          </div>
          <div className="md:hidden">
            <div
              onClick={handleBurger}
              className="text-blackRaisin dark:text-offWhite text-xl transition-all w-[25px] text-center cursor-pointer relative z-50"
            >
              {isBurgerOpen ? "X" : <RxHamburgerMenu size={25} />}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`navbar text-center w-full text-offWhite md:hidden ${
          isBurgerOpen ? "burger-animation" : "burger-animation-back"
        }`}
      >
        <nav
          className={`menu-open flex flex-col justify-center space-y-4 items-center p-20 bg-lightBlue  md:hidden ${
            showNavbar ? "show-navbar" : ""
          }`}
        >
          {renderNavLinks(true)}
        </nav>
      </div>
    </div>
  );
}
