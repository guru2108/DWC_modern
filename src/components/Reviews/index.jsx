import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import './index.css'
const Reviews = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);


  return (
    <div className="mt-[80px] w-screen"> 
    <div className="flex items-center text-center justify-center text-[14px] text-[#EA3A60]"
    style={{letterSpacing:"2px"}}>HOW WE PLAY THE GAME</div>
    <div className="text-[20px] md:text-[32px] lg:text-[36px] flex items-center text-center justify-center"
    style={{letterSpacing:"0.5px"}}>Testimonials</div>

  
<div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <div className="flex items-center justify-center text-center">
              <img src={image} alt={name} className="person-img flex items-center justify-center text-center" />
              </div>
              <h4 className="text-[#EA3A60]">{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <div className="flex items-center justify-center text-center">
              <FaQuoteRight className="icon text-purple-700" />
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>

    </div>
  )
}

export default Reviews