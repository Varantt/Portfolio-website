import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import {
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { ContentWrapper } from "./contentWrapper/ContentWrapper";

const NAV_LINKS = [
  { to: "/#about", text: "About" },
  { to: "/#portfolio", text: "Projects" },
  { to: "/#experience", text: "Experience" },
  { to: "/#skills", text: "Skills" },
];

const SOCIAL_LINKS = [
  {
    to: "https://www.linkedin.com/in/varant-kalemkerian-b76b40200/",
    icon: AiOutlineLinkedin,
    ariaLabel: "LinkedIn Profile",
  },
  {
    to: "https://wa.me/96178947084",
    icon: AiOutlineWhatsApp,
    ariaLabel: "WhatsApp Contact",
  },
  {
    to: "https://mail.google.com/mail/?view=cm&fs=1&to=varantkalemkerian@gmail.com",
    icon: AiOutlineMail,
    ariaLabel: "Email Contact",
  },
];

const FooterLink = ({ to, children }) => (
  <HashLink
    to={to}
    className="hover:pl-2 transition-all duration-300 font-medium"
  >
    {children}
  </HashLink>
);

const SocialLink = ({ to, icon: Icon, ariaLabel }) => (
  <Link
    to={to}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer social-link"
    aria-label={ariaLabel}
  >
    <Icon size={25} />
  </Link>
);

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-col space-y-4 md:p-6 mt-6 text-blackRaisin dark:text-offWhite bg-offWhite dark:bg-blackRaisin"
    >
      <ContentWrapper>
        <div className="footer-container gap-8 md:gap-0 flex flex-col md:flex-row justify-between items-start">
          <nav className="flex flex-col gap-4 w-full md:w-1/3">
            <h2 className="text-xl text-lightBlue font-bold">Navigate</h2>
            {NAV_LINKS.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.text}
              </FooterLink>
            ))}
          </nav>

          <div className="flex flex-col gap-4 footer-item">
            <h2 className="text-xl text-lightBlue font-bold">Contact</h2>
            <div className="social-icons flex flex-row gap-4">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink key={link.to} {...link} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-start md:justify-end overflow-x-hidden 2xl:max-w-[1500px] xl:max-w-[1230px] md:max-w-none md:py-8 pt-4 m-auto w-full items-center">
          &copy;{new Date().getFullYear()} Varant Kalemkerian
        </div>
      </ContentWrapper>
    </footer>
  );
}
