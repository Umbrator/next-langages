"use client";
import ContactUs from "./ContactUs";
import OfflineChat from "./OfflineChat";
import { motion } from 'framer-motion';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const IndexdPage = () => {
  // Navbar States
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted successfully!');
  };

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Slide Data
  const slides = [
    {
      title: "Learn New Languages and Move Forward",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://www.upload.ee/image/17258013/image-JA74V7F-768x1054.png",
      button1: "Get Started",
      button2: "Watch Intro",
    },
  ];

  // Card Section Data
  const cards = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
      title: "Online Tutoring",
      color: "bg-indigo-100",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/747/747394.png",
      title: "50+ Courses",
      color: "bg-green-100",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png",
      title: "Lifetime Access",
      color: "bg-yellow-100",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/747/747377.png",
      title: "Activate Learning",
      color: "bg-blue-100",
    },
  ];

  // Courses Section Data
  const courses = [
    {
      image: "https://www.upload.ee/image/17257067/home-bg-1-1.jpg",
      price: "$120",
      title: "English For Beginner",
      description: "Learn essential English language skills for beginners.",
      lessons: 26,
      students: 20,
      rating: 4.6,
      countryFlag:
        "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg", // English flag
      link: "/courses/english-beginner",
    },
    {
      image: "https://www.upload.ee/image/17257068/home-bg-6.jpg",
      price: "$140",
      title: "Spanish For Intermediate",
      description: "Improve your Spanish with interactive exercises.",
      lessons: 16,
      students: 18,
      rating: 4.8,
      countryFlag:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", // Spanish flag
      link: "/courses/spanish-intermediate",
    },
    {
      image: "https://www.upload.ee/image/17257069/home-bg-4-1.jpg",
      price: "$160",
      title: "German Intensive Course",
      description: "Master German with our intensive language program.",
      lessons: 18,
      students: 14,
      rating: 4.7,
      countryFlag:
        "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg", // German flag
      link: "/courses/german-intensive",
    },
    {
      image: "https://www.upload.ee/image/17257067/home-bg-1-1.jpg",
      price: "$130",
      title: "Italian Beginner Course",
      description: "Start speaking Italian from day one.",
      lessons: 22,
      students: 15,
      rating: 4.5,
      countryFlag:
        "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg", // Italian flag
      link: "/courses/italian-beginner",
    },
    {
      image: "https://www.upload.ee/image/17257068/home-bg-6.jpg",
      price: "$150",
      title: "French Intermediate Course",
      description: "Elevate your French language skills.",
      lessons: 20,
      students: 18,
      rating: 4.9,
      countryFlag:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg", // French flag
      link: "/courses/french-intermediate",
    },
  ];

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const revealCards = () => {
      courses.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 200);
      });
    };
    revealCards();
  }, [courses]);

  // WhyLearnWithUs Section State
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  // Testimonials State
  const testimonialData = [
    {
      name: "Colette Daniel",
      role: "Student",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://www.upload.ee/image/17260469/testi-83S5W35.jpg", // Updated image URL
      rating: 5,
    },
    {
      name: "John Doe",
      role: "Graduate",
      text: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "https://www.upload.ee/image/17260469/testi-83S5W35.jpg", // Using the same image for this example
      rating: 4,
    },
  ];

  const [currentIndexTestimonial, setCurrentIndexTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexTestimonial((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialData.length]);

  // Stats Data
  const statsInitialData = [
    {
      number: 1250,
      label: "Activate Students",
      iconPath: "M5 13l4 4L19 7",
      iconBgColor: "purple-100",
      iconColor: "purple-500",
    },
    {
      number: 60,
      label: "Interactive Courses",
      iconPath: "M4 6h16M4 12h16m-7 6h7",
      iconBgColor: "green-100",
      iconColor: "green-500",
    },
    {
      number: 3210,
      label: "Graduate Students",
      iconPath: "M5 13l4 4L19 7",
      iconBgColor: "yellow-100",
      iconColor: "yellow-500",
    },
    {
      number: 30,
      label: "Certified Teachers",
      iconPath: "M12 4v16m8-8H4",
      iconBgColor: "blue-100",
      iconColor: "blue-500",
    },
  ];

  const [statsData, setStatsData] = useState(
    statsInitialData.map((stat) => ({ ...stat, currentNumber: 0 }))
  );

  useEffect(() => {
    const startCounting = (targetValue, index) => {
      let startValue = 0;
      const duration = 2000;
      const increment = targetValue / (duration / 16);

      return new Promise((resolve) => {
        const counter = setInterval(() => {
          startValue += increment;
          if (startValue >= targetValue) {
            startValue = targetValue;
            clearInterval(counter);
            resolve(startValue);
          }
          setStatsData((prevStats) =>
            prevStats.map((stat, statIndex) =>
              statIndex === index
                ? { ...stat, currentNumber: Math.ceil(startValue) }
                : stat
            )
          );
        }, 16);
      });
    };

    statsInitialData.forEach((stat, index) => {
      startCounting(stat.number, index);
    });
  }, []);

  // MapSection State
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    const fetchLocationData = async () => {
      const data = [
        {
          address: "Jl. Sunset Road No.815, Kuta",
          phone: "+1234567890",
          email: "support@domain.com",
          workingHours: "Mon - Fri: 9 AM - 6 PM",
          // description:
          //   "Feel free to visit us for any inquiries or support. We look forward to helping you.",
        },
      ];

      setTimeout(() => {
        setLocationData(data);
      }, 1000);
    };

    fetchLocationData();
  }, []);

  return (
    <div>
      {/* Navbar Section */}
      <nav className="bg-white shadow-lg fixed w-full z-50 transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center py-3 md:py-4">
            <div className="flex items-center space-x-2">
              <Link href="/" passHref>
                <Image
                  src="/ocean.png"
                  alt="Logo"
                  width={70}
                  height={70}
                  className="object-contain cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </Link>
            </div>

            <div
              className={`hidden md:flex space-x-8 items-center transition-all duration-500 ease-in-out ${
                searchOpen
                  ? "opacity-0 invisible translate-y-2"
                  : "opacity-100 visible translate-y-0"
              }`}
            >
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Blog
              </Link>

              <div className="relative group">
                <button className="text-gray-600 hover:text-blue-600 flex items-center transition duration-300 ease-in-out">
                  Learn
                  <svg
                    className="w-5 h-5 ml-1 transform group-hover:rotate-180 transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out">
                  <Link
                    href="/language/spanish"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Spanish
                  </Link>
                  <Link
                    href="/language/french"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    French
                  </Link>
                  <Link
                    href="/language/german"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    German
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {!searchOpen ? (
                <button
                  className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
                  onClick={() => setSearchOpen(true)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              ) : (
                <div className="relative w-full md:w-64 transition-all duration-500 ease-in-out">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border border-gray-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-transform duration-300 ease-in-out"
                      placeholder="Enter keywords"
                    />
                    <svg
                      className="absolute left-3 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <button
                      className="ml-2 text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out absolute right-2"
                      onClick={() => setSearchOpen(false)}
                    >
                      &#10006;
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden flex flex-col items-start space-y-2 bg-white shadow-lg p-4 transition-all duration-300 ease-in-out">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
              >
                Blog
              </Link>
              <Link
                href="/learn"
                className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
              >
                Learn
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Carousel Section */}
      <section className="relative bg-blue-50 py-16 overflow-hidden h-[700px]">
        <div className="absolute inset-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full"
          >
            <path
              fill="#e0f2ff"
              fillOpacity="1"
              d="M0,64L40,80C80,96,160,128,240,154.7C320,181,400,203,480,202.7C560,203,640,181,720,176C800,171,880,181,960,186.7C1040,192,1120,192,1200,186.7C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight relative overflow-hidden">
              <span className="block animate-typing">
                {slides[currentIndex].title.split(" ").map((word, i) => {
                  if (word === "Languages" || word === "Move") {
                    return (
                      <span
                        key={i}
                        className="italic underline decoration-blue-500 inline-block animate-underline"
                      >
                        {word}{" "}
                      </span>
                    );
                  }
                  return word + " ";
                })}
              </span>
            </h1>

            <p className="text-gray-600 text-lg italic animate-fade-in">
              {slides[currentIndex].subtitle}
            </p>

            <div className="flex space-x-4 mt-6 animate-fade-in-delayed">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 hover:scale-105 shadow-lg transform transition duration-300">
                {slides[currentIndex].button1}
              </button>
              <button className="flex items-center text-blue-900 font-medium py-3 px-6 hover:text-blue-700 hover:scale-105 transform transition duration-300">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.555.832v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11.5A7.5 7.5 0 114.5 11.5"
                  ></path>
                </svg>
                {slides[currentIndex].button2}
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center animate-fade-up-delayed">
            <div className="absolute w-[420px] h-[420px] bg-indigo-200 rounded-full bottom-0 right-0 z-0 animate-pulse-slow"></div>
            <div className="absolute w-[300px] h-[300px] bg-indigo-400 rounded-full top-10 right-12 z-0 animate-pulse-slow"></div>

            <Image
              src={slides[currentIndex].image}
              alt="Learn Languages"
              width={350}
              height={450}
              className="object-contain relative z-10 transition-transform duration-700 ease-in-out transform scale-100"
            />

            <div className="absolute top-5 right-0 w-[180px] p-4 bg-white rounded-lg shadow-lg z-20 transition-all transform hover:scale-105 hover:shadow-2xl animate-fade-up delay-[500ms]">
              <p className="text-blue-900 font-bold">60+</p>
              <p className="text-gray-500">Interactive Courses</p>
            </div>
            <div className="absolute bottom-16 left-0 w-[180px] p-4 bg-white rounded-lg shadow-lg z-20 transition-all transform hover:scale-105 hover:shadow-2xl animate-fade-up delay-[800ms]">
              <p className="text-blue-900 font-bold">1250+</p>
              <p className="text-gray-500">Activate Students</p>
            </div>
            <div className="absolute bottom-5 right-0 w-[220px] p-4 bg-white rounded-lg shadow-lg z-20 transition-all transform hover:scale-105 hover:shadow-2xl animate-fade-up delay-[1100ms]">
              <p className="text-blue-900 font-bold">Get 20% Disc Off</p>
              <p className="text-gray-500">On Every Course</p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4">
          {cards.map((card, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div
                className={`w-16 h-16 flex items-center justify-center ${card.color} rounded-full`}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-medium text-blue-900">{card.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4 text-center">
            Language Courses
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Explore our top language courses, designed to help you master new
            languages with ease.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Link href={course.link} key={index} passHref>
                <div
                  className={`bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <Image
                        src={course.countryFlag}
                        alt={`${course.title} Flag`}
                        width={30}
                        height={20}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-blue-600 font-extrabold text-lg">
                        {course.price}/Lifetime
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {course.description}
                    </p>

                    <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p>{course.lessons} Lessons</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zM12 14c-4.42 0-8 1.79-8 4v1h16v-1c0-2.21-3.58-4-8-4z" />
                        </svg>
                        <p>{course.students} Students</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 text-sm text-yellow-500">
                      {Array.from(
                        { length: Math.floor(course.rating) },
                        (_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.19L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.57L5.82 21z" />
                          </svg>
                        )
                      )}
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhyLearnWithUs Section */}
      <section className="relative bg-blue-50 pt-12 pb-0 overflow-hidden">
        {/* SVG Wave Background */}
        <div className="absolute inset-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full"
          >
            <path
              fill="#e0f2ff"
              fillOpacity="1"
              d="M0,64L40,80C80,96,160,128,240,154.7C320,181,400,203,480,202.7C560,203,640,181,720,176C800,171,880,181,960,186.7C1040,192,1120,192,1200,186.7C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image with Circles and Animation */}
          <div className="relative flex justify-center items-center animate-fade-up-delayed">
            {/* Larger Circle Behind Image */}
            <div className="absolute w-[420px] h-[420px] bg-indigo-200 rounded-full bottom-0 right-0 z-0 animate-pulse-slow"></div>
            {/* Smaller Circle Behind Image */}
            <div className="absolute w-[300px] h-[300px] bg-indigo-400 rounded-full top-10 right-12 z-0 animate-pulse-slow"></div>

            {/* Image centered on top of the circles */}
            <Image
              src="https://www.upload.ee/image/17259690/imagee-6CHT7KZ-768x1133.png"
              alt="Why Learn With Us"
              width={350}
              height={450}
              className={`object-contain relative z-10 transition-transform duration-700 ease-in-out transform ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            />
          </div>

          {/* Right Side: Content */}
          <div
            className={`space-y-4 transition-opacity duration-700 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-blue-600 font-semibold text-md ">
              Join With Us
            </h3>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight ">
              Find Out Why You Should Learn With Us
            </h1>
            <p className="text-gray-600 text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-blue-900">
                      Create Account
                    </h4>
                    <p className="text-gray-600 text-xs ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-blue-900">
                      Select Course
                    </h4>
                    <p className="text-gray-600 text-xs ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-blue-900">
                      Learn Your Skill
                    </h4>
                    <p className="text-gray-600 text-xs ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-blue-900">
                      Success Story
                    </h4>
                    <p className="text-gray-600 text-xs ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-blue-600 font-semibold text-md italic">
            Testimonials
          </h3>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            What Did Our Students Say About Us?
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="bg-indigo-50 rounded-lg shadow-lg p-12 mb-12 relative">
            {testimonialData.length > 0 ? (
              <div className="flex items-center space-x-6">
                <div className="relative flex-shrink-0">
                  <Image
                    src={testimonialData[currentIndexTestimonial].image}
                    alt={testimonialData[currentIndexTestimonial].name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="text-left">
                  <p className="text-gray-600 italic">
                    {testimonialData[currentIndexTestimonial].text}
                  </p>
                  <div className="flex items-center mt-2">
                    {Array.from({
                      length: testimonialData[currentIndexTestimonial].rating,
                    }).map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.19L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.57L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="font-semibold text-blue-900">
                    {testimonialData[currentIndexTestimonial].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonialData[currentIndexTestimonial].role}
                  </p>
                </div>
              </div>
            ) : (
              <p>No testimonials available</p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div key={index} className="flex items-center justify-center">
                <div
                  className={`p-4 bg-${stat.iconBgColor} rounded-full flex items-center justify-center`}
                >
                  <svg
                    className={`w-6 h-6 text-${stat.iconColor}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={stat.iconPath}
                    />
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <p className="text-2xl font-bold text-blue-900">
                    + {stat.currentNumber}
                  </p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br bg-indigo-50 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Visit Our Office</h2>
            <p className="text-gray-700 text-base mb-4">
              We are here to assist you with any inquiries or support.
            </p>
            {locationData.length > 0 ? (
              locationData.map((location, index) => (
                <div key={index} className="space-y-3 border-b border-gray-200 pb-3 mb-3">
                  <div className="flex items-center space-x-2 text-blue-900">
                    <FaMapMarkerAlt className="text-xl" />
                    <p className="text-base font-medium">{location.address}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-900">
                    <FaPhoneAlt className="text-xl" />
                    <p className="text-base">{location.phone}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-900">
                    <FaEnvelope className="text-xl" />
                    <p className="text-base">{location.email}</p>
                  </div>
                  {/* <div className="flex items-center space-x-2 text-blue-900">
                    <FaClock className="text-xl" />
                    <p className="text-base">{location.workingHours}</p>
                  </div> */}
                  <p className="text-gray-600 text-sm">{location.description}</p>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </motion.div>

          <motion.div 
            className="bg-white p-3 rounded-xl shadow-lg h-56 lg:h-72"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.737494673451!2d115.16684251533124!3d-8.695548293749306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd25c17f795f307%3A0x3ab07a5fbb5286bc!2sJl.%20Sunset%20Road%20No.815%2C%20Kuta%2C%20Kabupaten%20Badung%2C%20Bali%2080321%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1633340748969!5m2!1sen!2sid"
              loading="lazy"
              allowFullScreen=""
              title="Office Location"
            ></iframe>
          </motion.div>
        </div>
        <motion.div 
  className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-500 transform hover:-translate-y-1 h-full flex flex-col justify-between"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
>
  <h3 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h3>

  <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
    <div className="flex-grow space-y-6">
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 transition"
          placeholder="Full Name"
          required
        />
        <label 
          htmlFor="name" 
          className="absolute left-0 -top-3 text-gray-600 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all duration-200"
        >
          Full Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 transition"
          placeholder="Email Address"
          required
        />
        <label 
          htmlFor="email" 
          className="absolute left-0 -top-3 text-gray-600 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all duration-200"
        >
          Email Address
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 transition"
          placeholder="Subject"
          required
        />
        <label 
          htmlFor="subject" 
          className="absolute left-0 -top-3 text-gray-600 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all duration-200"
        >
          Subject
        </label>
      </div>

      <div className="relative">
      <textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="3"
  className="peer min-h-[200px] w-full border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 transition"
  placeholder="Message"
  required
></textarea>

        <label 
          htmlFor="message" 
          className="absolute left-0 -top-3 text-gray-600 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all duration-200"
        >
          Message
        </label>
      </div>
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800"
    >
      Send Message
    </button>
  </form>
</motion.div>
      </div>
    </section>
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-indigo-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Ocean</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-400"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-400"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b-2 border-indigo-600 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Teacher
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b-2 border-indigo-600 pb-2">
              Useful Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b-2 border-indigo-600 pb-2">
              Stay Connected
            </h4>
            <form className="flex space-x-2 mb-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="p-2 rounded-l-full bg-gray-100 text-gray-800 w-full focus:outline-none"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-full hover:bg-indigo-500">
                Send
              </button>
            </form>
            <div className="text-gray-300">
              <p className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7V7h2v4h2l-3 3-3-3h2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Jl. Sunset Road No.815, Kuta</span>
              </p>
              <p className="flex items-center space-x-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884l8 4.8a1 1 0 001.005 0l8-4.8A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-7.5 4.5V17H9v-4.382l-7.5-4.5L2 6.882l8 4.8 8-4.8 1 .118z" />
                </svg>
                <span>support@domain.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left text-gray-500 mt-12">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="mb-2 md:mb-0">Ocean Connecting 2024</p>
            <p>Copyright © 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* <ContactUs/> */}
      <OfflineChat/>
    </div>
  );
};
export default IndexdPage;