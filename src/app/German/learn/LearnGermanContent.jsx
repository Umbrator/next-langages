"use client";

import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { courseList } from "./[courseId]/courseData";

const LearnGermanContent = () => {
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
    router.push(`/German/learn/${courseId}`);
  };

  return (
    <>
      {/* Offers Section */}
      <title>
        Learn German - Interactive Classroom Courses & Resources |
        OceanConnecting
      </title>
      <meta
        name="description"
        content="Learn German in the classroom with OceanConnecting! Our interactive courses, vocabulary tools, and grammar guides help you master German from beginner to advanced levels. Start speaking and writing confidently with OceanConnecting today."
      />

      <section className="py-16 bg-gradient-to-b bg-with">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center justify-center">
            <FaAngleDoubleRight className="mr-2 text-yellow-600" />
            German Language Learning Offers
          </h3>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Explore our exclusive German language learning options to boost your
            fluency in a structured, engaging, and efficient way.
          </p>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Offer Cards */}
          {[
            {
              title: "Personalized 1-on-1 German Lessons",
              description:
                "Take your German skills to the next level with private, 1-on-1 lessons tailored to your unique learning needs. Connect with certified German teachers who will guide you through each step, focusing on speaking, grammar, and vocabulary.",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpeople-education-learning-school-concept-happy-smiling-teenage-student-girl-with-books-backpack-german-flag-background_380164-112641.jpg?alt=media&token=b5b6026f-d3ce-4c77-88e3-7d18b3b229c0",
              altText: "German teacher conducting 1-on-1 private lessons",
            },
            {
              title: "Interactive Group German Classes",
              description:
                "Learn German in a dynamic group setting where you can interact with fellow learners and practice conversational skills. Our group classes are ideal for structured learning in a social environment, making language acquisition enjoyable.",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiling-teen-girl-hold-german-flag-workbook-schengen-countries-touristic-visa-back-school_545934-34674.jpg?alt=media&token=568aff7c-5f27-4567-8cab-fafd8898a568",
              altText: "Students participating in a German group class",
            },
            {
              title: "Free German Practice Resources",
              description:
                "Access a variety of free German language materials and practice sessions to supplement your learning journey. Our resources help you strengthen vocabulary, grammar, and pronunciation at your own pace.",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpeople-education-learning-school-concept-happy-student-girl-with-folders-pointing-finger-german-flag-background_380164-112358.jpg?alt=media&token=518f85de-5217-4e51-abf0-241832d466e8",
              altText: "German language learner practicing with free resources",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-black to-gray-900 shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-yellow-600"
            >
              <img
                className="w-full h-48 object-cover opacity-80"
                src={card.imageSrc}
                alt={card.altText}
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-500">
                  {card.title}
                </h3>
                <p className="text-gray-300 mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-with">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Image on the left */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhappy-winking-child-hold-german-flag-yellow-background-showing-ok-gesture-education-abroad_545934-1400.jpg?alt=media&token=71d5645f-7b0b-4f12-bb18-283a19474d0e"
              alt="Young girl studying German with colorful books at table"
              loading="lazy"
            />
          </div>

          {/* Text Content on the Right */}
          <div>
            <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center">
              <FaAngleDoubleRight className="mr-2 text-black" /> ABOUT US
            </h3>
            <h2 className="text-3xl font-bold text-black mb-4">
              Excellence in German Language Courses
            </h2>
            <p className="text-gray-800 mb-6">
              Our German language courses are designed to provide an exceptional
              learning experience. With structured lessons and expert
              instructors, we help students master German through engaging,
              high-quality instruction.
            </p>
            <p className="text-gray-800 mb-6">
              From beginners to advanced levels, our program supports your
              journey to fluency, offering comprehensive resources and
              personalized guidance for your success in German language mastery.
            </p>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-yellow-500 to-red-600 text-black px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors"
            >
              ➤ LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 transition-all duration-300 ease-in-out ${
            isClosing ? "fadeOut" : "fadeIn"
          }`}
        >
          <div
            className={`bg-gradient-to-r from-white via-gray-50 to-white rounded-lg shadow-2xl p-8 max-w-md w-full relative transition-all duration-500 transform ${
              isClosing ? "scaleDown" : "scaleUp"
            }`}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="text-center">
              {isLoading ? (
                <>
                  <div className="animate-spin text-5xl text-yellow-500 mb-4">
                    ⏳
                  </div>
                  <p className="text-gray-700">Loading course details...</p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-black mb-4">
                    German Course Details
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Explore our curated German language courses designed for all
                    proficiency levels. We offer personalized 1-on-1 lessons,
                    engaging group classes, and practice sessions to match your
                    goals.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Join our interactive sessions with expert instructors,
                    whether you are a beginner or advanced learner, and
                    experience a tailored approach to achieving German fluency.
                  </p>
                  <button
                    onClick={closeModal}
                    className="bg-gradient-to-r from-yellow-500 to-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-transform duration-300 mt-6"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Courses Section */}
      <section className="py-16 bg-white" id="OurCourses">
        <div className="container mx-auto text-center mb-12">
          <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center justify-center">
            <FaAngleDoubleRight className="ml-2 text-yellow-600" />
            COURSES
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced and certified instructors is committed to
            helping you achieve fluency and confidence in German.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out cursor-pointer ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${0.2 * index}s` }}
              onClick={() => handleLearnMore(course.title)} // Makes the entire card clickable
            >
              <div className="pb-12 w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>
              <div className="w-full flex justify-start">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLearnMore(course.title);
                  }}
                  className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-2 rounded-full inline-block text-center absolute -translate-y-1/2 z-10 transition-transform duration-300 hover:bg-red-700"
                  aria-label={`Learn more about ${course.title}`}
                >
                  ➤ LEARN MORE
                </button>
              </div>
              <img
                className="w-full h-48 object-cover transition-opacity duration-700 ease-out"
                src={course.image}
                alt={`${course.title} - German language course`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center mb-12">
          <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center justify-center">
            <FaAngleDoubleRight className="ml-2 text-yellow-600" />
            WHY US
          </h3>
        </div>

        <div className="container mx-auto lg:flex lg:justify-between lg:items-center lg:space-x-8">
          {/* Left Image with no hover effect */}
          <div className="lg:w-1/2">
            <img
              className="rounded-lg shadow-md object-cover w-full h-[400px]"
              src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fyoung-student-caucasian-man-studying-german-isolated-white-standing-with-outstretched-hand-showing-stop-sign-preventing-you_1187-152830.jpg?alt=media&token=3e6aa1db-1a04-4383-915a-4eeb03e88087"
              alt="Why OceanConnecting German Courses - Happy student in class"
              loading="lazy"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:w-1/2 bg-gradient-to-r from-yellow-500 to-red-600 text-white p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
            <h3 className="text-sm font-semibold mb-2">➤ WHY US</h3>
            <h2 className="text-4xl font-bold mb-4">
              Why Ocean German Courses?
            </h2>
            <p className="mb-6">
              Ocean German courses are designed with your success in mind. Our
              programs adapt to your individual pace and learning style, whether
              you're a beginner aiming for conversational fluency or an advanced
              student refining complex language skills.
            </p>
            <p>
              With experienced instructors, interactive sessions, and
              personalized support, we provide a structured and engaging path to
              mastering German, empowering you to thrive in both social and
              professional German-speaking environments.
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
                  className="w-12 h-12 text-red-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
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
        {/* Heading Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center">
              <FaAngleDoubleRight className="ml-2 text-yellow-500" />
              TESTIMONIALS
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hear What Our Students Say
            </h2>
            <p className="text-gray-700 max-w-md mb-8">
              Our German courses have empowered students to achieve fluency,
              enhance their career opportunities, and gain confidence in
              real-world conversations. Discover their stories below.
            </p>
            <a
              href="#"
              className="bg-gradient-to-r from-yellow-500 to-red-600 text-black px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 ease-in-out mb-6"
              style={{ width: "300px", textAlign: "center" }}
            >
              ➤ VIEW ALL TESTIMONIALS
            </a>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiley-little-boy-isolated-pink_23-2148984798.avif?alt=media&token=18f7385f-1572-4806-b2de-052acb9b06f5"
                alt="Student testimonial image 1"
                className="rounded-lg object-cover w-full h-48"
                loading="lazy"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpretty-clever-little-girl-child-with-blond-hairstyle-yellow-t-shirt-overalls-hold-something-palm-introduce-product-blank-white-copy-space-smiling-joyful-brag-what-she-got-b-day-present_176420-361.avif?alt=media&token=1ba15807-1cf8-4389-9596-e70e9cad4a39"
                alt="Student testimonial image 2"
                className="rounded-lg object-cover w-full h-48"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {[
              {
                imageSrc:
                  "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiling-man-with-glasses_1308-174409.avif?alt=media&token=4e4a4e04-8b3f-4929-b332-2ad830621692",
                rating: "★★★★★",
                title: "Excellent German Course!",
                feedback:
                  "This course has given me the confidence to speak German fluently. The instructors are exceptional, and the learning experience is both structured and fun.",
                name: "Samantha Williams",
                course: "Business German",
              },
              {
                imageSrc:
                  "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiling-man-with-glasses_1308-174409.avif?alt=media&token=4e4a4e04-8b3f-4929-b332-2ad830621692",
                rating: "★★★★★",
                title: "Highly Recommended!",
                feedback:
                  "A truly effective course that has transformed my German skills. The interactive sessions and practical exercises made it easy to learn and retain.",
                name: "Alex Johnson",
                course: "Conversational German",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-black text-white p-6 rounded-lg shadow-md"
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
                  <div className="w-4 h-4 bg-black"></div>
                </div>
                <div className="flex items-start">
                  <img
                    src={testimonial.imageSrc}
                    alt={`${testimonial.name}'s testimonial`}
                    className="w-28 h-28 rounded-lg object-cover shadow-lg -mt-8 mr-6"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-yellow-500 mb-2 text-3xl">
                      {testimonial.rating}
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {testimonial.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{testimonial.feedback}</p>
                    <p className="mt-4 font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.course}</p>
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
export default LearnGermanContent;