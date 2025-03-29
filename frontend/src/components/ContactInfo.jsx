import React from "react";

const ContactInfo = () => {
  return (
    <div className="container mx-auto p-6 dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <p className="text-center mt-2">
        This website is created to learn the MERN stack.
      </p>
      <form className="max-w-md mx-auto mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactInfo;
