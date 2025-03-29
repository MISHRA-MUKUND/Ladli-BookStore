import React from "react";

const AboutInfo = () => {
  return (
    <div className="container mx-auto p-6 min-h-[70vh] flex flex-col justify-center dark:bg-slate-900 dark:text-white">
      <h1 className="text-4xl font-extrabold text-center text-blue-500">About Us</h1>
      <p className="text-center mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
        This website is created for learning purposes to understand the MERN stack.
        Our goal is to build practical projects while mastering MongoDB, Express, React, and Node.js.
      </p>
    </div>
  );
};

export default AboutInfo;
