"use client";

import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { courseList } from "./[courseId]/courseData";

const LearnEnglishContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const openModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
    setTimeout(() => setIsLoading(false), 1500);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      document.body.style.overflow = "auto";
    }, 500);
  };

  const handleLearnMore = (courseTitle) => {
    const courseId = courseTitle.toLowerCase().replace(/ /g, "-");
    router.push(`/english/learn/${courseId}`);
  };

  return (
    <>
      {/* Offers Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center justify-center">
            <FaAngleDoubleRight className="mr-2" />
            OFFERS
          </h3>
          <p className="text-gray-500 mt-4">
            Discover our exclusive learning options to help you achieve fluency
            in English.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              imgSrc:
                "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fteacher-holding-english-class.jpg?alt=media&token=ae6daef5-ddd9-4c3c-b7b5-42f670c1b28a",
              title: "1-on-1 Lessons",
              description:
                "Find teachers from all over the world sharing their languages, dialects, and cultures.",
            },
            {
              imgSrc:
                "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fback-view-kids-writing-whiteboard%20(1).jpg?alt=media&token=6f3bb071-7dcc-4c8c-bf46-bd45e5eb5df3",
              title: "Group Class",
              description:
                "Join group classes to improve your language skills with peers.",
            },
            {
              imgSrc:
                "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fenglish-books-assortment.jpg?alt=media&token=ce9c7ca8-debb-44d5-a54a-621cc1f25441",
              title: "Practice for Free",
              description:
                "Access free practice materials to enhance your learning experience.",
            },
          ].map((offer, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={offer.imgSrc}
                alt={offer.title}
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mt-2">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section with Modal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmale-teacher-doing-english-lesson-online-his-students.jpg?alt=media&token=93f0c01b-53a1-47ae-bda1-75b5b7ee6881"
              alt="About Us"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center">
              <FaAngleDoubleRight className="mr-2" />
              ABOUT US
            </h3>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              We are Dedicated to the Best of English Course
            </h2>

            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Montes quisque urna
              molestie tincidunt aliquet quam.
            </p>

            <p className="text-gray-600 mb-6">
              Imperdiet at pellentesque vitae aliquet tempor eget rutrum tellus.
              Leo a luctus vitae urna nibh faucibus.
            </p>

            <button
              onClick={openModal}
              className="bg-[#65A662] text-white px-6 py-3 rounded-full hover:bg-[#4A944E] transition-colors"
            >
              ➤ LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-all duration-300 ease-in-out ${
            isClosing ? "fadeOut" : "fadeIn"
          }`}
        >
          <div
            className={`bg-gradient-to-r from-white via-gray-50 to-white rounded-lg shadow-2xl p-8 max-w-md w-full relative transition-all duration-500 transform ${
              isClosing ? "scaleDown" : "scaleUp"
            }`}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes className="text-2xl" />
            </button>

            {isLoading ? (
              <div className="text-center">
                <div className="animate-spin text-5xl text-blue-500 mb-4">
                  ⏳
                </div>
                <p className="text-gray-700">Loading formation details...</p>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Our Formation Details
                </h2>
                <p className="text-gray-600 mb-6">
                  We offer a range of courses designed to help you achieve
                  fluency in English. Our formations include 1-on-1 lessons,
                  group classes, and practice sessions tailored to your needs.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're a beginner or looking to refine your skills,
                  our expert teachers are here to guide you through an
                  interactive and engaging learning experience.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-[#65A662] text-white py-2 px-4 rounded hover:bg-green-600 transition-transform duration-300 mt-6"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Courses Section */}
      <section className="py-16 bg-white " id="OurCourses">
        <div className="container mx-auto text-center mb-12">
          <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center justify-center">
            <FaAngleDoubleRight className="ml-2" /> COURSES
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced and certified instructors is committed to
            helping you achieve fluency and confidence in English.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col relative p-6"
            >
              <img
                className="w-full h-48 object-cover rounded-t-xl mb-4"
                src={course.image}
                alt={course.title}
                loading="lazy"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button
                  onClick={() => handleLearnMore(course.title)}
                  className="bg-[#65A662] text-white px-6 py-2 rounded-full transition-colors hover:bg-[#4A944E]"
                >
                  ➤ LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto lg:flex lg:justify-between lg:items-center lg:space-x-8">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              className="rounded-lg shadow-md object-cover w-full h-[400px]"
              src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhappy-girl-gesturing-class%20(1).jpg?alt=media&token=91b705d1-2a46-456b-82d6-27769d74db02"
              alt="Why Inlingo English Courses"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 bg-[#65A662] text-white p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
            <h3 className="text-sm font-semibold mb-2">➤ WHY US</h3>
            <h2 className="text-4xl font-bold mb-4">
              Why Inlingo English Courses?
            </h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur. Montes quisque urna
              molestie tincidunt aliquet quam. Imperdiet at pellentesque vitae
              aliquet tempor eget rutrum tellus. Leo a luctus vitae urna nibh
              faucibus.
            </p>
            <p>
              A sagittis quisque ligula vitae dignissim vel nunc urna urna.
              Morbi luctus purus vitae neque vitae pellentesque ultrices.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              title: "Experienced Instructors",
              description:
                "Our team of certified and native-speaking teachers ensures an immersive learning experience.",
              iconPath:
                "M12 2c-2.761 0-5 2.239-5 5v5h-1c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2h-1v-5c0-2.761-2.239-5-5-5zm3 5v5h-6v-5c0-1.654 1.346-3 3-3s3 1.346 3 3zm-5 9h4v2h-4v-2z",
            },
            {
              title: "Interactive Learning",
              description:
                "Engage with interactive and hands-on materials for a more practical learning experience.",
              iconPath:
                "M20 2h-16c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2v9c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-9c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2zm-9 18h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm5-5h-14v-7h14v7z",
            },
            {
              title: "Personalized Learning",
              description:
                "Courses tailored to meet the specific needs and progress of every student.",
              iconPath:
                "M20.29 5.57l1.14-2.28a1.999 1.999 0 0 0-1.79-2.86h-15.5a1.998 1.998 0 0 0-1.79 2.86l1.14 2.28h-2.65v2h.992l2.73 10.26c.369 1.383 1.606 2.38 3.084 2.44h8.26c1.478-.06 2.715-1.057 3.084-2.44l2.73-10.26h.992v-2h-2.65zm-15.61-1.57h14.64l-.68 1.37h-13.28l-.68-1.37zm11.94 12.88h-8.26l-1.61-6.07h11.48l-1.61 6.07z",
            },
            {
              title: "Accredited Certifications",
              description:
                "Receive globally recognized certificates to boost your career opportunities.",
              iconPath:
                "M20 4h-4v-1.5c0-1.379-1.121-2.5-2.5-2.5h-3c-1.379 0-2.5 1.121-2.5 2.5v1.5h-4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-9 0v-1.5c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v1.5h-4z",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md flex"
            >
              <div className="flex-shrink-0 mr-4">
                <svg
                  className="w-12 h-12 text-[#65A662]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={benefit.iconPath} />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section: Header and Images */}
          <div className="text-left flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center">
              <FaAngleDoubleRight className="ml-2" /> TESTIMONIALS
            </h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Hear What Our Students Say
            </h2>
            <p className="text-gray-600 max-w-md mb-8">
              Montes quisque urna molestie tincidunt aliquet quam. Imperdiet at
              pellentesque vitae aliquet tempor eget rutrum tellus. Leo a luctus
              vitae urna sagittis quisque.
            </p>
            <a
              href="#"
              className="bg-[#65A662] text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 ease-in-out mb-6"
              style={{ width: "300px", textAlign: "center" }}
            >
              ➤ VIEW ALL TESTIMONIALS
            </a>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiley-little-boy-isolated-pink_23-2148984798.avif?alt=media&token=18f7385f-1572-4806-b2de-052acb9b06f5",
                  alt: "Student 1",
                },
                {
                  src: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpretty-clever-little-girl-child-with-blond-hairstyle-yellow-t-shirt-overalls-hold-something-palm-introduce-product-blank-white-copy-space-smiling-joyful-brag-what-she-got-b-day-present_176420-361.avif?alt=media&token=1ba15807-1cf8-4389-9596-e70e9cad4a39",
                  alt: "Student 2",
                },
              ].map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className="rounded-lg object-cover w-full h-48"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Right Section: Testimonials */}
          <div className="grid grid-cols-1 gap-8">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="relative bg-[#1f1f1f] text-white p-6 rounded-lg shadow-md"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#1f1f1f]"></div>
                </div>
                <div className="flex items-start">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiling-man-with-glasses_1308-174409.avif?alt=media&token=4e4a4e04-8b3f-4929-b332-2ad830621692"
                    alt="Student"
                    className="w-28 h-28 rounded-lg object-cover shadow-lg -mt-8 mr-6"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-[#65A662] mb-2 text-3xl">★★★★★</div>
                    <h3 className="text-2xl font-semibold">
                      Best English Courses Ever!
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Montes quisque urna molestie tincidunt aliquet quam.
                      Imperdiet at pellentesque vitae aliquet tempor eget rutrum
                      tellus.
                    </p>
                    <p className="mt-4 font-semibold">Samantha Williams</p>
                    <p className="text-gray-500">Business</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnEnglishContent;
