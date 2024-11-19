"use client";

import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { courseList } from "./[courseId]/courseData";

const LearnItalieContent = () => {
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
    router.push(`/italie/learn/${courseId}`);
  };

  return (
    <>
      {/* Offers Section */}
      <title>
        Learn Italian - Interactive Classroom Courses & Resources |
        OceanConnecting
      </title>
      <meta
        name="description"
        content="Learn Italian in the classroom with OceanConnecting! Our interactive courses, vocabulary tools, and grammar guides help you master Italian from beginner to advanced levels. Start speaking and writing confidently with OceanConnecting today."
      />

<section className="py-16 bg-gradient-to-b bg-gray-100">
  <div className="text-center mb-12">
    <h3 className="text-sm font-semibold text-green-700 mb-2 flex items-center justify-center">
      <FaAngleDoubleRight className="mr-2 text-red-700" />
      Italian Language Learning Offers
    </h3>
    <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
      Explore our exclusive Italian language learning options tailored to boost
      your fluency in a structured, enjoyable way.
    </p>
  </div>

  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Offer Cards */}
    {[
      {
        title: "Personalized 1-on-1 Italian Lessons",
        description:
          "Take your Italian skills to the next level with private, 1-on-1 lessons tailored to your unique learning needs. Connect with certified Italian teachers who will guide you through each step, focusing on speaking, grammar, and vocabulary.",
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fyoung-student-holding-tablet-flag-classroom-with-world-map_922936-29969.jpg?alt=media&token=1552d6c4-6fdd-4f17-8a5d-9dc9bec5ef16",
        altText: "Italian teacher conducting 1-on-1 private lessons",
      },
      {
        title: "Interactive Group Italian Classes",
        description:
          "Learn Italian in a dynamic group setting where you can interact with fellow learners and practice conversational skills. Our group classes are ideal for structured learning in a social environment, making language acquisition enjoyable.",
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fbusiness-woman-holding-italian-flag_556177-558.jpg?alt=media&token=d69de56d-3cc4-44fc-a23e-bb707ea75136",
        altText: "Students participating in an Italian group class",
      },
      {
        title: "Free Italian Practice Resources",
        description:
          "Access a variety of free Italian language materials and practice sessions to supplement your learning journey. Our resources help you strengthen vocabulary, grammar, and pronunciation at your own pace.",
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fyoung-man-wearing-glasses-holding-books-with-flag-italy-learn-studying_877288-2813.jpg?alt=media&token=72dc663e-f7cb-4236-acc8-9e5c11ceee5a",
        altText: "Italian language learner practicing with free resources",
      },
    ].map((offer, index) => (
      <div
        key={index}
        className="bg-gradient-to-br from-gray-900 to-gray-700 shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-red-700"
      >
        <img
          className="w-full h-48 object-cover opacity-80"
          src={offer.imageSrc}
          alt={offer.altText}
          loading="lazy"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-red-500">{offer.title}</h3>
          <p className="text-gray-300 mt-2">{offer.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


<section className="py-16 bg-gradient-to-b bg-gray-100">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    {/* Image Section */}
    <div className="overflow-hidden rounded-lg">
      <img
        className="w-full h-full object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fyouth-female-student-with-flag-italy-background_341862-678.jpg?alt=media&token=3931d535-553a-4f03-87cd-f700ac818cec"
        alt="Student proudly holding Italian flag"
        loading="lazy"
      />
    </div>

    {/* Text Content Section */}
    <div>
      <h3 className="text-sm font-semibold text-green-700 mb-2 flex items-center">
        <FaAngleDoubleRight className="mr-2 text-red-700" />
        ABOUT US
      </h3>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Our Commitment to Excellence in Italian Courses
      </h2>
      <p className="text-gray-800 mb-6">
  At OceanConnecting, we offer high-quality Italian courses that engage learners at all levels, helping you build confidence and proficiency.
</p>
<p className="text-gray-800 mb-6">
  Whether you're new to Italian or refining advanced skills, our courses provide expert guidance, interactive tools, and cultural immersion.
</p>

      <button
        onClick={openModal}
        className="bg-gradient-to-r from-green-500 to-red-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-red-700 transition-colors"
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
        className="absolute top-3 right-3 text-gray-600 hover:text-green-600 transition-colors"
        onClick={closeModal}
        aria-label="Close modal"
      >
        <FaTimes className="text-2xl" />
      </button>

      {isLoading ? (
        <div className="text-center">
          <div className="animate-spin text-5xl text-green-500 mb-4">⏳</div>
          <p className="text-gray-700">Loading course details...</p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Italian Course Details
          </h2>
          <p className="text-gray-600 mb-6">
            Discover a variety of Italian courses to help you achieve fluency, including 1-on-1 lessons, group classes, and personalized practice sessions.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you're a beginner or refining advanced skills, our expert instructors ensure a dynamic and interactive learning experience.
          </p>
          <button
            onClick={closeModal}
            className="bg-gradient-to-r from-green-500 to-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-transform duration-300 mt-6"
          >
            Close
          </button>
        </div>
      )}
    </div>
  </div>
)}

      {/* Courses Section */}
      <section className="py-16 bg-gray-100" id="OurCourses">
  <div className="container mx-auto text-center mb-12">
    <h3 className="text-sm font-semibold text-green-700 mb-2 flex items-center justify-center">
      <FaAngleDoubleRight className="ml-2 text-red-700" />
      COURSES
    </h3>
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Our team of experienced and certified instructors is committed to
      helping you achieve fluency and confidence in Italian.
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
              e.stopPropagation(); // Prevents double-trigger if button is clicked
              handleLearnMore(course.title);
            }}
            className="bg-gradient-to-r from-green-500 to-red-500 text-white px-6 py-2 rounded-full inline-block text-center absolute -translate-y-1/2 z-10 transition-transform duration-300 hover:from-red-600 hover:to-green-600"
          >
            ➤ LEARN MORE
          </button>
        </div>
        <img
          className={`w-full h-48 object-cover transition-opacity duration-700 ease-out`}
          src={course.image}
          alt={course.title}
          loading="lazy"
        />
      </div>
    ))}
  </div>
</section>


      {/* Why Us Section */}
      <section className="py-16 bg-gray-100">
  <div className="container mx-auto text-center mb-12">
    <h3 className="text-sm font-semibold text-green-700 mb-2 flex items-center justify-center">
      <FaAngleDoubleRight className="ml-2 text-red-700" />
      WHY CHOOSE OUR ITALIAN COURSES?
    </h3>
  </div>

  <div className="container mx-auto lg:flex lg:justify-between lg:items-center lg:space-x-8">
    {/* Image on the left */}
    <div className="lg:w-1/2">
      <img
        className="rounded-lg shadow-md object-cover w-full h-[400px]"
        src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fstudent-studying-from-folders-against-italy-flag-grunge-effect_1134-52825.avif?alt=media&token=cef6bfca-3170-4481-be08-5f60f055792b"
        alt="Student enjoying Italian language class"
        loading="lazy"
      />
    </div>

    {/* Text on the right */}
    <div className="lg:w-1/2 bg-gradient-to-r from-green-500 to-red-600 text-white p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
      <h3 className="text-sm font-semibold mb-2">➤ WHY US</h3>
      <h2 className="text-4xl font-bold mb-4">
        Why Choose OceanConnecting Italian Courses?
      </h2>
      <p className="mb-6">
        Our Italian courses are tailored to guide students from beginner to advanced levels, adapting to individual goals and proficiency. Each program provides a supportive and immersive environment.
      </p>
      <p>
        With interactive sessions, expert guidance, and cultural insights, our curriculum is crafted to help you master Italian with confidence and real-world application.
      </p>
    </div>
  </div>

  {/* Benefits Grid */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
    {/* Benefit 1 */}
    <div className="bg-gray-50 p-6 rounded-lg shadow-md flex">
      <div className="flex-shrink-0 mr-4">
        <svg className="w-12 h-12 text-green-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c-2.761 0-5 2.239-5 5v5h-1c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2h-1v-5c0-2.761-2.239-5-5-5zm3 5v5h-6v-5c0-1.654 1.346-3 3-3s3 1.346 3 3zm-5 9h4v2h-4v-2z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Experienced Instructors</h3>
        <p className="text-gray-600 mt-2">Our certified instructors provide an immersive and effective learning experience.</p>
      </div>
    </div>

    {/* Benefit 2 */}
    <div className="bg-gray-50 p-6 rounded-lg shadow-md flex">
      <div className="flex-shrink-0 mr-4">
        <svg className="w-12 h-12 text-red-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2h-16c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2v9c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-9c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2zm-9 18h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm5-5h-14v-7h14v7z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Interactive Learning</h3>
        <p className="text-gray-600 mt-2">Engage with practical, hands-on materials for an enhanced learning experience.</p>
      </div>
    </div>

    {/* Benefit 3 */}
    <div className="bg-gray-50 p-6 rounded-lg shadow-md flex">
      <div className="flex-shrink-0 mr-4">
        <svg className="w-12 h-12 text-green-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.29 5.57l1.14-2.28a1.999 1.999 0 0 0-1.79-2.86h-15.5a1.998 1.998 0 0 0-1.79 2.86l1.14 2.28h-2.65v2h.992l2.73 10.26c.369 1.383 1.606 2.38 3.084 2.44h8.26c1.478-.06 2.715-1.057 3.084-2.44l2.73-10.26h.992v-2h-2.65zm-15.61-1.57h14.64l-.68 1.37h-13.28l-.68-1.37zm11.94 12.88h-8.26l-1.61-6.07h11.48l-1.61 6.07z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Personalized Learning</h3>
        <p className="text-gray-600 mt-2">Tailored courses to meet each student's unique progress and goals.</p>
      </div>
    </div>

    {/* Benefit 4 */}
    <div className="bg-gray-50 p-6 rounded-lg shadow-md flex">
      <div className="flex-shrink-0 mr-4">
        <svg className="w-12 h-12 text-red-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4h-4v-1.5c0-1.379-1.121-2.5-2.5-2.5h-3c-1.379 0-2.5 1.121-2.5 2.5v1.5h-4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-9 0v-1.5c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v1.5h-4z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Accredited Certifications</h3>
        <p className="text-gray-600 mt-2">Earn globally recognized certificates to advance your career.</p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    <div className="text-left flex flex-col justify-center">
      <h3 className="text-sm font-semibold text-green-700 mb-2 flex items-center">
        <FaAngleDoubleRight className="ml-2 text-red-700" />
        TESTIMONIALS
      </h3>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Hear What Our Students Say
      </h2>
      <p className="text-gray-700 max-w-md mb-8">
        Discover how our Italian courses have helped students gain confidence,
        fluency, and success in learning Italian. Here are their stories.
      </p>
      <a
        href="#"
        className="bg-gradient-to-r from-green-500 to-red-500 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-green-600 transition duration-300 ease-in-out mb-6"
        style={{ width: "300px", textAlign: "center" }}
      >
        ➤ VIEW ALL TESTIMONIALS
      </a>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiley-little-boy-isolated-pink_23-2148984798.avif?alt=media&token=18f7385f-1572-4806-b2de-052acb9b06f5"
          alt="Italian language student testimonial 1"
          className="rounded-lg object-cover w-full h-48"
          loading="lazy"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpretty-clever-little-girl-child-with-blond-hairstyle-yellow-t-shirt-overalls-hold-something-palm-introduce-product-blank-white-copy-space-smiling-joyful-brag-what-she-got-b-day-present_176420-361.avif?alt=media&token=1ba15807-1cf8-4389-9596-e70e9cad4a39"
          alt="Italian language student testimonial 2"
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
          title: "Excellent Italian Course!",
          feedback:
            "This course helped me feel confident speaking Italian. The instructors are supportive and knowledgeable.",
          name: "Samantha Williams",
          course: "Business Italian",
        },
        {
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiling-man-with-glasses_1308-174409.avif?alt=media&token=4e4a4e04-8b3f-4929-b332-2ad830621692",
          rating: "★★★★★",
          title: "Highly Recommended!",
          feedback:
            "An effective and enjoyable course that transformed my Italian skills. I feel more fluent than ever.",
          name: "Alex Johnson",
          course: "Conversational Italian",
        },
      ].map((testimonial, index) => (
        <div key={index} className="relative bg-black text-white p-6 rounded-lg shadow-md">
          <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
            <div className="w-4 h-4 bg-black"></div>
          </div>
          <div className="flex items-start">
            <img
              src={testimonial.imageSrc}
              alt={`${testimonial.name}'s Italian course testimonial`}
              className="w-28 h-28 rounded-lg object-cover shadow-lg -mt-8 mr-6"
              loading="lazy"
            />
            <div>
              <div className="text-green-500 mb-2 text-3xl">
                {testimonial.rating}
              </div>
              <h3 className="text-2xl font-semibold">{testimonial.title}</h3>
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

export default LearnItalieContent;
