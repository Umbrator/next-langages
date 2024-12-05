"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Import components
import Navbar from './header/navbar';
import Carousel from './header/Carousel';
import Card from './header/CardSection';
import Courses from './header/CourseSection';
import WhyLearnWithUs from './header/WhyLearnWithUs';
import Testimonials from './header/Testimonials';
import Contact from './header/Contact';
import OfflineChat from './header/OfflineChat';

import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
// Dynamically load Footer with no SSR
const Footer = dynamic(() => import('./header/Footer'), { ssr: false });

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
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

      {/* Dynamically Loaded Footer */}
      <Suspense fallback={<div className="text-center py-4">Loading footer...</div>}>
        <Footer />
      </Suspense>

      {/* Offline Chat */}
      <OfflineChat />
        <GoogleAnalytics gaId="G-4F7NDLC4B4" />
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-4F7NDLC4B4`}
            strategy="afterInteractive"
        />
        <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4F7NDLC4B4', {
              page_path: window.location.pathname,
            });
          `,
            }}
        />
    </div>
  );
};

export default Page;
