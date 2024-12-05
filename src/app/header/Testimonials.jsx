"use client";
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import styles from '../css/Testimonials.module.css';

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Amina El Alaoui (أمينة العلوي)",
      role: "Student",
      text: "This program transformed my career trajectory! The hands-on projects and real-world applications allowed me to build practical skills that directly contributed to my success.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Ftesti-83S5W35.jpg?alt=media&token=fe18257d-1a4d-4bad-9781-0c7e4c71fd5a",
      rating: 5,
      subtitle: "Realized her career goals through skill-focused training.",
    },
    {
      name: "Youssef Bennani (يوسف بناني)",
      role: "Graduate",
      text: "The courses were comprehensive, and the instructors were incredibly supportive throughout my journey. The skills I gained helped me secure an exciting new role in my field.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpremium_photo-1671656349218-5218444643d8.avif?alt=media&token=5883d568-bb6a-4b5e-b600-a2284b4b3b45",
      rating: 4,
      subtitle: "Transitioned into a new role, leveraging the expertise gained.",
    },
    {
      name: "Fatima Zahra Boujemaa (فاطمة الزهراء بوجمعة)",
      role: "Student",
      text: "This program has been instrumental in advancing my career! Every project felt like real-world experience, equipping me with skills that made a tangible difference in my job prospects.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fimages.jpeg?alt=media&token=953c9149-5bc9-4d29-9aa1-7bae45700341",
      rating: 5,
      subtitle: "Career-advancing skills through hands-on learning.",
    },
    {
      name: "Mohamed Amrani (محمد العمراني)",
      role: "Graduate",
      text: "The curriculum was detailed and engaging, and the instructors provided consistent guidance. I’m grateful for the practical skills that I’ve already applied in my new job.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fphoto-1535713875002-d1d0cf377fde.avif?alt=media&token=d5408834-1075-47fe-a5b2-91e6e54a7804",
      rating: 4,
      subtitle: "Applied new skills effectively in a professional role.",
    },
    {
      name: "Sara El Kadi (سارة القاضي)",
      role: "Student",
      text: "This learning experience was exceptional! The hands-on projects aligned perfectly with industry standards, making it easier to transition smoothly into my career.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fdownload%20(1).jpeg?alt=media&token=992b6c40-8ff4-4b95-97f5-68e7a5f50b8c",
      rating: 5,
      subtitle: "Successfully transitioned to her career with confidence.",
    },
    {
      name: "Ahmed Idrissi (أحمد الإدريسي)",
      role: "Graduate",
      text: "I highly recommend this program. The detailed lessons and projects not only prepared me for my current role but also gave me the confidence to excel professionally.",
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpremium_photo-1689977927774-401b12d137d6.avif?alt=media&token=57628a16-0c68-4a80-bf2a-c1a9d8f6fcf3",
      rating: 4,
      subtitle: "Enhanced his professional skill set and confidence.",
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
    handleSwitch((currentIndex + 2) % testimonialData.length, styles.slideLeft);
  };

  const handlePrev = () => {
    handleSwitch(
      (currentIndex - 2 + testimonialData.length) % testimonialData.length,
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
    id="testimonials"
      {...handlers}
      className="bg-gray-50 py-20 relative overflow-hidden min-h-screen cursor-grab"
    >
      <div className="container mx-auto">
        <h2 className="text-center text-indigo-500 font-semibold text-lg">
          Testimonials
        </h2>
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-2">
          Happy Clients Feedbacks
        </h2>
        <p className="text-center text-gray-500 mb-12">
          We love clients with whom we work, from smaller local
          <br /> companies to larger multinational companies.
        </p>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${styles.card} ${slide}`}>
          {[0, 1].map((offset) => {
            const testimonialIndex = (currentIndex + offset) % testimonialData.length;
            const testimonial = testimonialData[testimonialIndex];

            return (
              <div 
                key={testimonialIndex} 
                className="relative bg-white rounded-xl shadow-lg p-8 mx-auto max-w-lg"
                style={{ userSelect: "none" }} // Disable text selection
                onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
              >
                {/* Profile image positioned at the top-left */}
                <div className="absolute -top-10 left-8 w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md bg-white">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="(max-width: 768px) 100px, 150px"
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="text-left mt-8 space-y-4">
                  <p className="text-lg text-gray-700 italic font-light">
                    "{testimonial.text}"
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.subtitle}</p>
                  {/* Rating stars aligned to the right */}
                  <div className="flex items-center justify-end mt-4 space-x-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${
                          index < testimonial.rating
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
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-md">{testimonial.role}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {Array.from({ length: Math.ceil(testimonialData.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleSwitch(index * 2, index * 2 > currentIndex ? styles.slideLeft : styles.slideRight)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index * 2
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
