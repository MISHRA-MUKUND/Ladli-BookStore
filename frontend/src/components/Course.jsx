import React, { useState,useEffect } from "react";
import Card from "./card";
import {Link} from "react-router-dom";
import axios from "axios";
function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const data=await axios.get("http://localhost:3000/book");
        //console.log(data);
        setBook(data.data);
      } catch (error) {
        console.log("Error:",error);
      }
    };
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 text-center my-5 space-y-8">
        <h1 className="text-2xl md:text-4xl font-semibold">Radhe Radhe in our <span className="text-pink-500">bookstore !:)</span> </h1>
        <p className="text-xl">Welcome to Ladli Bookstore. You are now logged in to your account. Explore our collection of books, manage your orders, save your favorite titles, and enjoy personalized recommendations. Stay updated with exclusive discounts, new arrivals, and special offers tailored just for you. Happy reading!</p>
        <Link to="/">
        <button className="bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-300 px-4 py-2 my-5">Back</button>
        </Link>
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4">
      {book.map((item) => { return <Card item={item} key={item.id}/> })}
      </div>
    </>
  );
}

export default Course;
