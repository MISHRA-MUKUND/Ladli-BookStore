import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";  
import axios from 'axios';

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:3000/book");
        
        // Small delay to ensure proper rendering
        setTimeout(() => {
          setBook(response.data);
        }, 200);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getBook();
  }, []);

  const FilterList = book.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='text-xl font-semibold pb-2'>Free Course</h1>
        <p>
          Explore a wide collection of free books covering various topics and expand your knowledge without any cost. 
          Whether you're looking to learn something new or enhance your skills, our free section offers valuable resources 
          to help you get started effortlessly.
        </p>
      </div>
      <div className="slider-container">
        <Slider key={book.length} {...settings}>
          {FilterList.map((item) => (
            <Card item={item} key={item.id} />  
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
