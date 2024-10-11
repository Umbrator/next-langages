// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// // import LanguageSwitcher from "./LanguageSwitcher";
// // import img from './ocean3.png';
// // import { useTranslation } from "react-i18next";
// import { RiArrowDropDownLine } from "react-icons/ri";
// // import { motion } from "framer-motion";

// // Function to load client data based on language
// const loadClientData = async (lang) => {
//   try {
//     switch (lang) {
//       case 'fr':
//         const { serviceDataFR, blogDataFR, NavbarFR } = await import('./locales/fr/translation');
//         return { navbar: NavbarFR, serviceData: serviceDataFR, blogData: blogDataFR };
//       case 'ar':
//         const { serviceDataAR, blogDataAR, NavbarAR } = await import('./locales/ar/translation');
//         return { navbar: NavbarAR, serviceData: serviceDataAR, blogData: blogDataAR };
//       case 'en':
//       default:
//         const { serviceDataEN, blogDataEN, NavbarEN } = await import('./locales/en/translation');
//         return { navbar: NavbarEN, serviceData: serviceDataEN, blogData: blogDataEN };
//     }
//   } catch (error) {
//     console.error(`Failed to load client data for language ${lang}`, error);
//     return { navbar: [], serviceData: [], blogData: [] };
//   }
// };

// // Hook to detect if the device is mobile
// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 992);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => {
//       window.removeEventListener('resize', checkMobile);
//     };
//   }, []);

//   return isMobile;
// };

// export default function Navbar() {
//   const [scroll, setScroll] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdowns, setDropdowns] = useState(null);
//   const { i18n, t } = useTranslation();
//   const [navbar, setNavbar] = useState([]);
//   const [serviceData, setServiceData] = useState([]);
//   const [blogData, setBlogData] = useState([]);
//   const isMobile = useIsMobile();
//   const router = useRouter();
//   const isHomePage = router.pathname === '/';

//   // Load data based on language
//   useEffect(() => {
//     const fetchData = async () => {
//       const { navbar, serviceData, blogData } = await loadClientData(i18n.language);
//       setNavbar(navbar);
//       setServiceData(serviceData);
//       setBlogData(blogData);
//     };
//     fetchData();
//   }, [i18n.language]);

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScroll(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Toggle dropdown state
//   const handleDropdownToggle = (dropdownType) => {
//     if (dropdowns === dropdownType) {
//       setDropdowns(null);
//     } else {
//       setDropdowns(dropdownType);
//     }
//   };

//   // Close dropdowns when clicking on a link
//   const closeDropdownOnLinkClick = () => {
//     setDropdowns(null);
//   };

//   return (
//     // Use a React Fragment as the parent element
//     <>
//       <style>{`
//         .nav-link {
//           transition: transform 0.3s ease, color 0.3s ease;
//         }
//         .nav-link:hover {
//           transform: scale(1.1);
//           color: #007bff;
//         }
//         .nav-item {
//           position: relative;
//         }
//         .nav-item ul {
//           background-color: white;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//           border-radius: 8px;
//           padding: 10px;
//           position: absolute;
//           top: 100%;
//           left: 0;
//           min-width: 250px;
//           z-index: 1000;
//           opacity: 0;
//           transform: translateY(-10px);
//           transition: opacity 0.3s ease, transform 0.3s ease;
//           display: none;
//         }
//         .nav-item ul.show {
//           opacity: 1;
//           transform: translateY(0);
//           display: block;
//         }
//         img {
//           transition: transform 0.3s ease;
//         }
//         img:hover {
//           transform: scale(1.1);
//         }
//         .navbar {
//           transition: background-color 0.3s ease, box-shadow 0.3s ease;
//         }
//       `}</style>

//       <motion.nav
//         className={`navbar fixed top-0 w-full z-50 ${scroll ? "bg-white shadow-lg" : "bg-transparent"}`}
//         initial={{ y: -100 }}
//         animate={{
//           y: 0,
//           backgroundColor: scroll ? "#fff" : "rgba(0, 0, 0, 0)",
//         }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
//           <Link href="/">
//             <motion.img
//               src={img}
//               className="inline-block"
//               style={{ width: "120px" }}
//               alt="Logo"
//               whileHover={{ scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </Link>

//           <div className="nav-icons flex items-center lg:flex ms-auto md:ms-8">
//             <LanguageSwitcher />
//             <button
//               type="button"
//               className="collapse-btn inline-flex items-center ms-2 text-dark lg:hidden"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <span className="sr-only">Navigation Menu</span>
//               <motion.i
//                 className="mdi mdi-menu text-[24px]"
//                 whileHover={{ rotate: 90 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </button>
//           </div>

//           <div
//             className={`navigation lg:flex ms-auto transition-all ${
//               menuOpen ? "block" : "hidden"
//             }`}
//           >
//            <ul className="navbar-nav flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
//   {navbar.map((item, index) => (
//     // Use a Fragment to wrap multiple <li> elements
//     <React.Fragment key={index}>
//       <li className="nav-item ms-0">
//         <Link href="/">
//           <a className="nav-link" onClick={closeDropdownOnLinkClick}>
//             {t(item.Home)}
//           </a>
//         </Link>
//       </li>

//       <li className="nav-item ms-0 relative">
//         <button
//           className="nav-link flex items-center transition duration-300 ease-in-out transform hover:scale-105"
//           onClick={() => handleDropdownToggle("servicesOpen")}
//         >
//           {t(item.Services)}
//           <RiArrowDropDownLine className="ml-1" fontSize={25} />
//         </button>
//         <ul className={`bg-white text-dark shadow-lg rounded-lg p-4 ${dropdowns === "servicesOpen" ? "show" : ""}`}>
//           {serviceData.map((service, idx) => (
//             <li className="nav-item" key={idx}>
//               <Link href={`/service/${service.id}`}>
//                 <a
//                   className="nav-link transition duration-200 ease-in-out hover:bg-gray-100 p-2 rounded-md"
//                   onClick={closeDropdownOnLinkClick}
//                 >
//                   {service.title}
//                 </a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </li>

//       <li className="nav-item ms-0">
//         <Link href="/formation">
//           <a className="nav-link" onClick={closeDropdownOnLinkClick}>
//             {t(item.Formation)}
//           </a>
//         </Link>
//       </li>
//     </React.Fragment>
//   ))}
// </ul>

//             </div>
//           </div>
//         </motion.nav>
//     </>
//   );
// }
