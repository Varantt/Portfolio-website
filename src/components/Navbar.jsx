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

  return (
    <React.Fragment>
      <nav id="nav" className="flex  h-12 items-center justify-between mx-4 md:mx-0 md:justify-around   ">
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

        <div className=" hamburger  top-16  md:hidden ">
          <div
            onClick={handleBurger}
            className={`text-white text-xl transition-all cursor-pointer ${
              isBurgerOpen && "hamburger-animation"
            } `}
          >
            {isBurgerOpen ? "X " : <RxHamburgerMenu size={25} />}
          </div>
        </div>
      </nav>

      <div
        className={`absolute text-center  w-full text-white transition-all duration-500  md:hidden ${
          isBurgerOpen || "hidden"
        }  `}
      >
        <div
          className={` navbar flex  flex-col justify-center space-y-4 items-center p-20 bg-lightBlack rounded-sm burger-animation  md:hidden ${
            isBurgerOpen && "burger-animation"
          }  `}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      {/* <hr /> */}
    </React.Fragment>
  );
}
