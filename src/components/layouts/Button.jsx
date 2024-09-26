// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
// // DarkMode Btn
// // const DarkMode = () =>{
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [darkMode, setDarkMode] = useState(false);

// //   const toggleDarkMode = () => {
// //     setDarkMode((prev) => !prev);
// //   };

// //   const onToggleMenu = () => {
// //     setMenuOpen((prev) => !prev);
// //   };

// //   useEffect(() => {
// //     const body = document.body;
// //     const header = document.querySelector("header");

// //     if (darkMode) {
// //       body.classList.add("dark");
// //       header.classList.add("dark");
// //     } else {
// //       body.classList.remove("dark");
// //       header.classList.remove("dark");
// //     }

// //     return () => {
// //       body.classList.remove("dark");
// //       header.classList.remove("dark");
// //     };
// //   }, [darkMode]);
// //   return (
//     // <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
//     //   <FontAwesomeIcon
//     //     icon={darkMode ? faSun : faMoon}
//     //     className="h-5 lg:h-[12px] xl:h-5"
//     //   />
//     // </button>
// //   );
// // }
// // export default DarkMode;


// const DarkModeToggle = () => {
//   // State to manage dark mode
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Effect to apply dark mode class to the body
//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add('dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//     }
//   }, [isDarkMode]);

//   // Function to toggle dark mode
//   const toggleDarkMode = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   return (
//     <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
//     <FontAwesomeIcon
//       icon= {isDarkMode ? faSun : faMoon}
//       className="h-5 lg:h-[12px] xl:h-5"
//     />
//   </button>
  
//   );
// };

