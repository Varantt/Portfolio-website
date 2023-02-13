import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const location = useLocation();

  const handleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  useEffect(() => {
    setIsBurgerOpen(false);
  }, [location]);

  useEffect(() => {
    const body = document.body;
    const hero = document.querySelector("#hero");
    console.log(hero);
    if (isBurgerOpen) {
      body.style.overflow = "hidden";
      body.style.overflowX = "hidden";
      hero.style.opacity = "0.03"
    } else {
      body.style.overflow = "scroll";
      body.style.overflowX = "hidden";
      hero.style.opacity = "1";

    }

    return () => {
      // body.style.overflow = "scroll";
      body.style.overflowX = "hidden";
    };
  }, [isBurgerOpen]);

  return (
    <React.Fragment>
      <nav
        id="nav"
        className={`flex  h-12 items-center justify-between mx-4 md:mx-0 md:justify-around    `}
      >
        <div className=" text-3xl  font-bold text-white cursor-pointer ">
          <Link to="/"> VK</Link>
        </div>
        <div className="hidden link-items flex-row space-x-12 items-center text-white md:flex">
          <Link to="/" className=" link-nav transition-all">
            Home{"  "}
          </Link>
          <Link to="/about" className=" link-nav transition-all">
            About
          </Link>
          <Link to="/projects" className=" link-nav transition-all">
            Projects
          </Link>
          <Link to="/contact" className=" link-nav transition-all">
            Contact
          </Link>
        </div>

        {/* hamburger */}

        <div className="   top-16  md:hidden ">
          <div
            onClick={handleBurger}
            className={`text-white text-xl transition-all cursor-pointer relative z-10  `}
          >
            {isBurgerOpen ? "X " : <RxHamburgerMenu size={25} />}
          </div>
        </div>
      </nav>

      <div
        className={` navbar text-center w-full text-white transition-all duration-500 menu-open  md:hidden ${
          isBurgerOpen || "hidden"
        }  `}
      >
        <nav
          className={` menu-open flex  flex-col justify-center space-y-4 items-center p-20 bg-lightBlack rounded-sm   md:hidden   `}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      {/* <hr /> */}
    </React.Fragment>
  );
}
