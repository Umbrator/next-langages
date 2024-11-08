"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";

const CardSection = () => {
  const cards = useMemo(
    () => [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
        title: "Expert Instructors",
        description: "Learn from industry-leading professionals with real-world experience.",
        gradient: "bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3468/3468144.png",
        title: "Personalized Learning",
        description: "Tailored courses designed to match your unique goals.",
        gradient: "bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
        title: "Certification",
        description: "Certifications that boost your resume and skills portfolio.",
        gradient: "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        title: "Community Support",
        description: "Engage with a supportive community throughout your journey.",
        gradient: "bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700",
      },
    ],
    []
  );

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Utiliser un intervalle progressif pour révéler les cartes progressivement
    cards.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-900">Why Choose Us</h2>
        <p className="text-gray-600 mt-2">Discover the benefits of learning with us</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center transition-all duration-500 transform ${
              visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } hover:scale-105 hover:shadow-2xl p-8 rounded-xl bg-white shadow-md`}
          >
            <div
              className={`w-20 h-20 flex items-center justify-center ${card.gradient} rounded-full mb-6 shadow-lg transition-transform duration-300 transform hover:rotate-6`}
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={40}
                height={40}
                className="object-contain"
                priority={index === 0}
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{card.title}</h3>
            <p className="text-base text-gray-600 mt-3">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
