// export function Footerstyle(){
//     return(
//         <>
//             <script>
//         const navLinks = document.querySelector('.nav-links');
//         const mobileButtons = document.querySelector('.mobile-buttons');
//         const darkModeToggle = document.getElementById('dark-mode-toggle');
//         const darkModeIcon = document.getElementById('dark-mode-icon');
//         const body = document.body;
//         const header = document.querySelector('header');

//         function onToggleMenu(e) {
//             // Toggle between showing and hiding the navigation menu
//             navLinks.classList.toggle('top-[5%]');
//             navLinks.classList.toggle('top-[100%]');

//             // Change the icon based on menu state
//             e.name = e.name === 'menu' ? 'close' : 'menu';
//         }

//         function toggleDarkMode() {
//             body.classList.toggle('dark');
//             header.classList.toggle('dark');
//             navLinks.classList.toggle('dark'); // Add this line to toggle nav dark mode
//             navLinks.querySelectorAll('a').forEach(link => {
//                 link.classList.toggle('dark');
//             });
//             if (body.classList.contains('dark')) {
//                 darkModeIcon.classList.replace('fa-moon', 'fa-sun');
//             } else {
//                 darkModeIcon.classList.replace('fa-sun', 'fa-moon');
//             }
//         }

//         darkModeToggle.addEventListener('click', toggleDarkMode);

//         const footer = document.querySelector('footer');

// // Update toggleDarkMode function
//         function toggleDarkMode() {
//             body.classList.toggle('dark');
//             header.classList.toggle('dark');
//             navLinks.classList.toggle('dark');
//             footer.classList.toggle('dark'); // Add this line to toggle footer dark mode
//             navLinks.querySelectorAll('a').forEach(link => {
//                 link.classList.toggle('dark');
//             });
//             if (body.classList.contains('dark')) {
//                 darkModeIcon.classList.replace('fa-moon', 'fa-sun');
//             } else {
//                 darkModeIcon.classList.replace('fa-sun', 'fa-moon');
//             }
//         }
//     </script>

//         </>
//     )
    
// }