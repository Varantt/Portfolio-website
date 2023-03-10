import React, { useRef, useState } from "react";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import emailjs from "emailjs-com";
export default function ContactInfo() {
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
    <section id="contact" className="fade-animation-3 overflow-x-hidden">
      <div className="flex flex-col contact md:flex-row justify-center items-center text-white w-full mt-12 md:mt-32  rounded-tl-full  ">
        {/* item 1 */}

        <div className="flex-col p-12 space-y-6 md:w-1/3 md:-ml-4">
          <div className="text-2xl md:text-4xl ">Get in touch</div>

          <div className="text-md contact-section  font-bold bg-transparent w-auto p-6 rounded-xl border-2 shadow-2xl hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer justify-center ">
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
        <form action="" ref={form} className="" onSubmit={handleSubmit}>
          <div className="flex  flex-col w-auto space-y-6 p-20 rounded bg-opacity-75 text-black  ">
            <input
              type="text"
              value={values.name}
              placeholder="Name"
              name="name"
              className="p-5 rounded shadow"
              ref={ref}
              onChange={handleChange}
            />

            <input
              type="email"
              value={values.email}
              placeholder="Email"
              name="email"
              className="p-5 rounded shadow"
              onChange={handleChange}
            />

            <label htmlFor="msg" className="text-white">
              Message:{" "}
            </label>
            <textarea
              className="rounded p-6"
              name="message"
              id="msg"
              cols="20"
              rows="5"
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
