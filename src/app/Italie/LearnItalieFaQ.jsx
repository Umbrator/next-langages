import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What levels of Italian courses do you offer?",
      answer:
        "We offer Italian courses for all proficiency levels, from beginner to advanced. Our courses are designed to cater to learners with varying language abilities."
    },
    {
      question: "Are your instructors certified and experienced?",
      answer:
        "Yes, all our instructors are certified professionals with extensive experience in teaching Italian and guiding students to fluency."
    },
    {
      question: "What teaching methods and materials do you use?",
      answer:
        "Our courses combine traditional and interactive teaching methods, including engaging materials, online resources, and real-life scenarios to enhance learning."
    },
    {
      question: "Can I join an Italian course if I have a busy schedule?",
      answer:
        "Absolutely! We offer flexible scheduling options, including evening and weekend classes, to accommodate your schedule."
    },
    {
      question: "Is there any age restriction for enrolling in Italian courses?",
      answer:
        "No, we welcome learners of all ages. Our Italian courses are designed to support both students and professionals."
    }
  ];
  

  return (
    <section className="py-16 bg-gray-100">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
    {/* Image Section */}
    <div className="relative flex items-center">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fstudent-holding-notepad-against-italy-flag-grunge-effect_1134-52826.jpg?alt=media&token=a4ec3d4d-e837-4341-a1d8-e2584735890f"
        alt="Italian language learning - students collaborating in class"
        className="w-full h-full rounded-lg shadow-md object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-0 right-0 flex space-x-1">
        <div className="w-4 h-4 bg-white"></div>
        <div className="w-4 h-4 bg-gray-300"></div>
      </div>
    </div>
    
    {/* FAQ Section */}
    <div className="text-left flex flex-col justify-center">
      <h3 className="text-sm font-semibold text-green-700 mb-2 flex items-center">
        <FaAngleDoubleRight className="ml-2 text-red-700" />
        Frequently Asked Questions
      </h3>
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Learn More About Our Italian Courses
      </h2>
      <ul className="text-gray-800 space-y-4">
        {faqData.map((faq, index) => (
          <li key={index} className="border-b border-gray-300 py-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="font-semibold">{faq.question}</span>
              <span
                className={`text-xl transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45 text-red-700" : "text-green-700"
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              id={`faq-content-${index}`}
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

