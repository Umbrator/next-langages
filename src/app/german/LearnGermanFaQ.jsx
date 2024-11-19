import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What levels of German courses do you offer?",
      answer:
        "We offer German courses for all proficiency levels, from beginner to advanced. Our courses are tailored to meet the needs of learners at varying levels of language proficiency."
    },
    {
      question: "Are your instructors certified and experienced in teaching German?",
      answer:
        "Yes, all our instructors are highly certified and bring years of experience in teaching German as a foreign language."
    },
    {
      question: "What teaching methods and materials do you use in German courses?",
      answer:
        "We use a blend of traditional and modern teaching methods, including interactive exercises, online resources, and real-world scenarios to make learning engaging and effective."
    },
    {
      question: "Can I join a German course if I have a busy schedule?",
      answer:
        "Absolutely! We offer flexible scheduling options, including weekend and evening classes, to accommodate even the busiest schedules."
    },
    {
      question: "Is there any age restriction for enrolling in German courses?",
      answer:
        "No, we welcome learners of all ages. Whether you're a student, professional, or retiree, we have a course that suits your needs."
    }
  ];
  

  return (
    <section className="py-16 bg-white">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
      {/* Image Section for SEO and accessibility */}
      <div className="relative flex items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fconcept-lack-knowledge-misunderstanding-falling-far-classmates_123211-3726.jpg?alt=media&token=17c8c21d-f1e6-4d8f-95ba-4be2ea37ba86"
          alt="Smiling students learning German together in a supportive classroom environment"
          className="w-full h-full rounded-lg shadow-md object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 right-0 flex space-x-1">
          <div className="w-4 h-4 bg-yellow-500"></div> {/* German flag accent */}
          <div className="w-4 h-4 bg-red-600"></div> {/* German flag accent */}
        </div>
      </div>
  
      {/* FAQ Section for SEO keywords */}
      <div className="text-left flex flex-col justify-center">
        <header>
          <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center">
            <FaAngleDoubleRight className="ml-2 text-yellow-500" /> FAQ
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About German Courses
          </h2>
        </header>
        <ul className="text-gray-800 space-y-4">
          {faqData.map((faq, index) => (
            <li key={index} className="border-b border-gray-300 py-4">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span
                  className={`text-xl transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  

  );
};

export default FAQSection;

