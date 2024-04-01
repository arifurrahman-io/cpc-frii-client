import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import photo from "../../assets/contact.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ec0xkus", "template_unex95l", form.current, {
        publicKey: "Lcimx4msdAoqf2wvI",
      })
      .then(
        () => {
          toast.success("The message has been sent successfully!");
          window.location.reload();
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="h-screen px-5 max-w-[1280px] mx-auto mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={photo} alt="contact" className="w-[75%] mx-auto" />
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col my-auto">
          <h2 className="text-3xl font-semibold font-courgette">Contact Me</h2>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="border-2 p-2 my-2"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="border-2 p-2 my-2"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="border-2 p-2 my-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="border-2 p-2 h-24 my-2"
          />
          <input
            type="submit"
            value="Send"
            className="btn btn-primary btn-sm my-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
