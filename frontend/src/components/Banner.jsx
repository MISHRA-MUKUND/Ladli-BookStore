import React from "react";
import Banner1 from "../../public/banner3.png"
import "./style.css"
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 md:mt-28 mt-12 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Welcome to read books at{" "}
              <span className="text-pink-600">Ladli BookStore!!!</span>
            </h1>
            <p className="text-xl">
              Welcome to Ladli Bookstore. A world of stories awaits you! With
              Lala & Ladli's blessings, explore our handpicked collection of
              books that inspire, educate, and entertain. Find your next great
              read today!
            </p>
            <label className="input  flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-5">Get Started</button>
        </div>
        <div className="w-full md:w-1/2 order-1" >
        <img src={Banner1} alt="" className="w-94 h-full " />
        </div>
      </div>
    </>
  );
}

export default Banner;
