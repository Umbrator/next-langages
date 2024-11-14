import React from 'react';
import Navbar from './header/navbar';
import Carousel from './header/Carousel';
import Card from './header/CardSection';
import Courses from './header/CourseSection';
import WhyLearnWithUs from './header/WhyLearnWithUs';
import Testimonials from './header/Testimonials';
import Contact from './header/Contact';
import Footer from './header/Footer';
import OfflineChat from './header/OfflineChat'

const Page = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Carousel Section */}
      <Carousel />

      {/* Card Section */}
      <Card />

      {/* Courses Section */}
      <Courses />

      {/* Why Learn With Us Section */}
      <WhyLearnWithUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      <Footer />

      <OfflineChat/>

    </div>
  );
};

export default Page;
