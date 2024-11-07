"use client";

import React from 'react';
import { FaCalendarAlt, FaUserGraduate } from 'react-icons/fa';
import { courseData } from './courseData';
import { use } from 'react';

const CourseDetails = ({ params }) => {
  const { courseId } = use(params);
  const course = courseData[courseId];

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className="container mx-auto p-8 lg:p-16 bg-white shadow-xl rounded-lg">
      {/* Header Section */}
      <div className="relative text-center mb-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg shadow-md p-6 lg:p-8 mt-0">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{course.title}</h1>
        <p className="text-lg text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">{course.description}</p>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-96 object-cover rounded-lg shadow-xl border-4 border-white"
        />
      </div>

      {/* Curriculum Breakdown */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
        {course.levels.map((item, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-2">{item.level}</h3>
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
          <FaUserGraduate className="text-red-600 text-2xl mr-2" />
          <h2 className="text-3xl font-bold text-red-600">Objetivos del Curso</h2>
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
          <FaCalendarAlt className="text-red-600 text-2xl mr-2" />
          <h2 className="text-3xl font-bold text-red-600">Horario y Precios</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-3">Día</th>
              <th className="p-3">Sesión</th>
              <th className="p-3">Hora</th>
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
          El costo del curso para cada nivel es de <strong>${course.fee}</strong>, incluyendo todos los materiales y acceso a nuestros recursos en línea.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Requisitos Previos</h2>
        <p className="text-gray-700">{course.prerequisites}</p>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Preguntas Frecuentes (FAQ)</h2>
        <div className="space-y-8">
          {course.faq.map((faq, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-red-600">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
