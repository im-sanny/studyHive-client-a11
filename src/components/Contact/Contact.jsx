/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ast14f7", "template_sdkoue5", form.current, {
        publicKey: "iKl1QgFgeS2Tn53SFp4Oa",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Mail sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("failed to send to message");
        }
      );
  };
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-base-300 mb-10">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's connect!
            </h2>
            <p>
              Have questions, need info, or want to share feedback? Fill out the
              form, and we'll get back to you ASAP!
            </p>
            <div className="w-full"></div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            noValidate=""
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                className="w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                name="message"
                className="w-full p-3 rounded dark:bg-gray-100"
                data-gramm="false"
                wt-ignore-input="true"
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Send Message
            </button>
          </form>
        </div>
        <img
          src={"https://i.ibb.co/Q9bDb08/2885557.jpg"}
          alt=""
          className="h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default Contact;
