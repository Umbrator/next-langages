"use client";

import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaUserGraduate } from 'react-icons/fa';
import { courseData } from './courseData';
import Navbar from '../../../header/navbar';
import Footer from '../../../header/Footer';
import Head from 'next/head';

const CourseDetails = ({ params }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      const resolvedParams = await params;
      const { courseId } = resolvedParams;
      setCourse(courseData[courseId]);
    }
    fetchCourse();
  }, [params]);

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <>
      {/* SEO and Page Title */}
      <Head>
        <title>{course.title} - OceanConnecting Course Details</title>
        <meta 
          name="description" 
          content={`Learn more about our ${course.title} course, including objectives, schedule, pricing, prerequisites, and FAQs. Perfect for anyone looking to master ${course.title}.`} 
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-8 lg:p-16 bg-white shadow-xl rounded-lg pt-20">
        
        {/* Course Header */}
        <div className="relative text-center mb-16 bg-gradient-to-r from-green-500 to-red-600 rounded-lg shadow-md p-6 lg:p-8 mt-0">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{course.title}</h1>
          <p className="text-lg text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">{course.description}</p>
          <img
            src={course.image}
            alt={`${course.title} course image`}
            className="w-full h-96 object-cover rounded-lg shadow-xl border-4 border-white"
          />
        </div>

        {/* Course Levels */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
          {course.levels.map((item, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{item.level}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {item.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Course Objectives */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
          <div className="flex items-center mb-4">
            <FaUserGraduate className="text-green-700 text-2xl mr-2" />
            <h2 className="text-3xl font-bold text-green-700">Course Objectives</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {course.objectives.map((objective, idx) => (
              <li key={idx}>{objective}</li>
            ))}
          </ul>
        </div>

        {/* Timetable and Pricing */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-green-700 text-2xl mr-2" />
            <h2 className="text-3xl font-bold text-green-700">Timetable and Pricing</h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="p-3">Day</th>
                <th className="p-3">Session</th>
                <th className="p-3">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              {course.schedule.map((session, idx) => (
                <tr key={idx}>
                  <td className="p-3 border-b">{session.day}</td>
                  <td className="p-3 border-b">{session.session}</td>
                  <td className="p-3 border-b">{session.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-gray-700 mt-6">
            The course fee for each level is <strong>${course.fee}</strong>, including all course materials and access to our online resources.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Prerequisites</h2>
          <p className="text-gray-700">{course.prerequisites}</p>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-8">
            {course.faq.map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold text-green-700">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseDetails;
