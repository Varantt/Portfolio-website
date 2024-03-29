import React, { useRef, useState } from "react";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import emailjs from 'emailjs-com';
import useScroll from "../hooks/useScroll";

export default function Contact() {
  const isVisible = useScroll("#contact");
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const ref = useRef(null);

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_wr38wju",
      "template_39rbfk9",
      form.current,
      "bXQK0o-7V-kRbDiXx"
    );
    window.location.replace("/message");
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className={`${isVisible ? "contact-animation " : ""} mt-8 mb-8 md:mb-0 md:mt-32`}
    >
      <div className="flex flex-col px-16 md:p-[25px] md:w-full  contact md:flex-row justify-center items-center text-white rounded-tl-full  ">
        {/* item 1 */}

        <div className="flex-col space-y-4 md:w-1/3 md:-ml-4">
          <div className="text-2xl md:text-4xl text-center md:text-justify">Get in touch</div>

          <div className="text-md contact-section  font-bold bg-transparent md:w-auto p-8 md:p-6 rounded-xl border-2 shadow-2xl hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer justify-center ">
            <MdOutlineEmail />
            <p className="md:text-md">
              Email : <br />
              varantkalemkerian@gmail.com <br />
            </p>
          </div>

          <div className="text-sm font-semibold bg-transparent p-6  rounded-xl border-2 shadow-2xl hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer justify-center ">
            <MdOutlinePhone />
            Phone Number: <br /> +961 78 947 084
          </div>
        </div>

        {/* item-2 */}
        <form action="" className="w-full md:w-auto " ref={form} onSubmit={handleSubmit}>
          <div className="flex  flex-col w-full md:w-auto space-y-3 md:p-12 mt-8 md:mt-0 rounded bg-opacity-75 text-black  ">
            <input
              type="text"
              value={values.name}
              placeholder="Name"
              name="name"
              className="p-3 rounded box-shadow"
              ref={ref}
              required
              onChange={handleChange}
            />

            <input
              type="email"
              value={values.email}
              placeholder="Email"
              name="email"
              required
              className="p-3 rounded "
              onChange={handleChange}
            />

            <label htmlFor="msg" className="m-0 text-white">
              Message:{" "}
            </label>
            <textarea
              className="rounded p-2 box-shadow outline-none "
              id="msg"
              cols="20"
              rows="3"
              placeholder="Leave your message here"
            ></textarea>

            <button
              type="submit"
              className="p-2 rounded bg-white text-black hover:text-white hover:bg-black border-2 border-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
