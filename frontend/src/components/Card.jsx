import React from "react";

function Card({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-2 hover:scale-105 duration-200 ">
        <div className="card bg-base-100 w-90 shadow-sm  dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              className="h-40"
              alt="books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>
            {item.description}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-600 hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
