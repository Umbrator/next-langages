"use client";
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import styles from '../css/Testimonials.module.css';

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Colette Daniel",
      role: "Student",
      text: "This program has significantly advanced my career! The hands-on projects and real-world applications were invaluable.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftesti-83S5W35.jpg?alt=media&token=fe18257d-1a4d-4bad-9781-0c7e4c71fd5a",
      rating: 5,
      subtitle: "Achieved her dream career through practical learning.",
    },
    {
      name: "John Doe",
      role: "Graduate",
      text: "The courses were in-depth, and the instructors were always available to support my learning journey. I highly recommend it.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftesti-83S5W35.jpg?alt=media&token=fe18257d-1a4d-4bad-9781-0c7e4c71fd5a",
      rating: 4,
      subtitle: "Gained a new job role thanks to the skills acquired.",
    },
    {
      name: "Colette Daniel",
      role: "Student",
      text: "This program has significantly advanced my career! The hands-on projects and real-world applications were invaluable.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftesti-83S5W35.jpg?alt=media&token=fe18257d-1a4d-4bad-9781-0c7e4c71fd5a",
      rating: 5,
      subtitle: "Achieved her dream career through practical learning.",
    },
    {
      name: "John Doe",
      role: "Graduate",
      text: "The courses were in-depth, and the instructors were always available to support my learning journey. I highly recommend it.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftesti-83S5W35.jpg?alt=media&token=fe18257d-1a4d-4bad-9781-0c7e4c71fd5a",
      rating: 4,
      subtitle: "Gained a new job role thanks to the skills acquired.",
    },
    {
      name: "Colette Daniel",
      role: "Student",
      text: "This program has significantly advanced my career! The hands-on projects and real-world applications were invaluable.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftesti-83S5W35.jpg?alt=media&token=fe18257d-1a4d-4bad-9781-0c7e4c71fd5a",
      rating: 5,
      subtitle: "Achieved her dream career through practical learning.",
    },
    {
      name: "John Doe",
      role: "Graduate",
      text: "The courses were in-depth, and the instructors were always available to support my learning journey. I highly recommend it.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftesti-83S5W35.jpg?alt=media&token=fe18257d-1a4d-4bad-9781-0c7e4c71fd5a",
      rating: 4,
      subtitle: "Gained a new job role thanks to the skills acquired.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState("");

  const handleSwitch = (nextIndex, direction) => {
    setSlide(direction);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setSlide("");
    }, 500);
  };

  const handleNext = () => {
    handleSwitch((currentIndex + 1) % testimonialData.length, styles.slideLeft);
  };

  const handlePrev = () => {
    handleSwitch(
      (currentIndex - 1 + testimonialData.length) % testimonialData.length,
      styles.slideRight
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section
      {...handlers}
      className="bg-gray-50 py-20 relative overflow-hidden min-h-screen cursor-grab"
    >
      <div className="container mx-auto">
      <h2 className="text-center text-indigo-500 font-semibold text-lg ">
          Testimonials
        </h2>
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-2">
          Happy Clients Feedbacks
        </h2>
        <p className="text-center text-gray-500 mb-12">
          We love clients with whom we work,
          from smaller local <br /> companies to larger multinational companies.
        </p>
        <div className={`${styles.card} ${slide}`}>
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 mx-auto max-w-4xl flex items-center space-x-6 md:space-x-8">
            <div className="relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md">
              <Image
                src={testimonialData[currentIndex].image}
                alt={testimonialData[currentIndex].name}
                fill
                sizes="(max-width: 768px) 100px, 150px"
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>

            <div className="text-left space-y-4" style={{ userSelect: "none" }} onContextMenu={(e) => e.preventDefault()}>
              <p className={`text-lg text-gray-700 italic font-light ${styles.noSelect}`}>
                "{testimonialData[currentIndex].text}"
              </p>
              <p className="text-sm text-gray-500">{testimonialData[currentIndex].subtitle}</p>
              <div className="flex items-center mt-4 space-x-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonialData[currentIndex].rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.19L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.57L5.82 21z" />
                  </svg>
                ))}
              </div>
              <h4 className="font-semibold text-xl text-gray-800">
                {testimonialData[currentIndex].name}
              </h4>
              <p className="text-gray-500 text-md">{testimonialData[currentIndex].role}</p>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full opacity-30 transform translate-x-20 -translate-y-20"></div>
          </div>
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSwitch(index, index > currentIndex ? styles.slideLeft : styles.slideRight)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index
                  ? "bg-indigo-500"
                  : "bg-indigo-300 opacity-50 hover:opacity-100"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;